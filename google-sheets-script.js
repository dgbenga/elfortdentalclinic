/**
 * A.U.T.O.MATE — Enterprise Google Sheets Automation Engine (v2.5)
 * ==============================================================================
 * Engineering Standards:
 * - Anti-Duplicate Intelligence: Match by normalized email or Nigerian/Intl phone (last 10 digits).
 * - Dual Duplicate Modes: "UPDATE" in-place (no duplicate rows) or "BLOCK" (strict registration lock).
 * - Multi-Format Payload Parser: Handles both URLSearchParams (no-cors fetch) and raw JSON.
 * - Auto-Styling & Sheet Beautification: Dark slate header (#0F172A), frozen row, calibrated column widths.
 * - Instant Notification Alerts: Automatic email digest to sheet owner on every brief.
 * - Web App Diagnostic Dashboard: Accessing URL in browser renders a live health check.
 * - In-Sheet Admin Menu: "⚡ A.U.T.O.MATE" menu for one-click beautify and duplicate audit.
 * ==============================================================================
 */

// ==============================================================================
// 1. ENGINE CONFIGURATION
// ==============================================================================
var CONFIG = {
  /**
   * DUPLICATE_MODE:
   * - "UPDATE" : Updates client's existing row in-place with latest answers, refreshes
   *              "Last Updated", marks status as "UPDATED", and prevents duplicate rows.
   * - "BLOCK"  : Strictly blocks any second submission with the same email or phone.
   * - "FLAG"   : Appends the submission anyway, but labels status as "DUPLICATE - REVIEW".
   */
  DUPLICATE_MODE: "UPDATE",

  // Email Notifications
  SEND_EMAIL_ALERTS: true,
  // Notification email where new/updated brief alerts are sent
  ALERT_EMAIL_RECIPIENT: "icoms8895@gmail.com",

  // Sheet Name (leave blank to use the active sheet)
  SHEET_NAME: "Project Briefs"
};

// ==============================================================================
// 2. HTTP POST HANDLER (Receives briefs from start.html)
// ==============================================================================
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Acquire lock for up to 30s to prevent concurrent write collisions
  lock.tryLock(30000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getTargetSheet(doc);

    // Initialize headers & layout if new sheet
    ensureSheetStructure(sheet);

    // Parse input from URLSearchParams or raw JSON
    var params = extractPayload(e);

    // Sanitize and extract primary identifiers
    var submittedEmail = (params.email || "").toString().trim().toLowerCase();
    var rawPhone = (params.phone || "").toString().trim();
    var submittedPhoneDigits = normalizePhone(rawPhone);
    var fullName = (params.full_name || "").toString().trim();
    var businessName = (params.business_name || "").toString().trim();

    if (!submittedEmail && !submittedPhoneDigits) {
      return jsonResponse({
        result: "error",
        message: "Validation Error: At least an email address or phone number is required."
      });
    }

    // Format compound multi-line input fields
    var likedSites = formatSites([
      { url: params.liked_site_1_url, reason: params.liked_site_1_reason },
      { url: params.liked_site_2_url, reason: params.liked_site_2_reason },
      { url: params.liked_site_3_url, reason: params.liked_site_3_reason }
    ]);

    var dislikedSites = formatSites([
      { url: params.disliked_site_1_url, reason: params.disliked_site_1_reason },
      { url: params.disliked_site_2_url, reason: params.disliked_site_2_reason }
    ]);

    var pagesRequired = params.pages_required || "";
    if (params.pages_other) {
      pagesRequired += (pagesRequired ? ", " : "") + "Other: " + params.pages_other;
    }

    var specialFeatures = params.features || "";
    if (params.features_other) {
      specialFeatures += (specialFeatures ? ", " : "") + "Other: " + params.features_other;
    }

    var now = new Date();
    var formattedNow = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

    // ==========================================================================
    // 3. ANTI-DUPLICATE SCANNING ALGORITHM
    // ==========================================================================
    // Email is stored in Col 7, Phone in Col 8
    var lastRow = sheet.getLastRow();
    var existingRowIndex = -1;
    var originalSubmissionDate = formattedNow;

    if (lastRow > 1) {
      var dataRange = sheet.getRange(2, 1, lastRow - 1, getHeaders().length).getValues();
      for (var i = 0; i < dataRange.length; i++) {
        var rowEmail = (dataRange[i][6] || "").toString().trim().toLowerCase();
        var rowPhone = normalizePhone((dataRange[i][7] || "").toString());

        var emailMatches = (submittedEmail && rowEmail === submittedEmail);
        var phoneMatches = (submittedPhoneDigits && rowPhone && (
          submittedPhoneDigits === rowPhone ||
          (submittedPhoneDigits.length >= 10 && rowPhone.length >= 10 && submittedPhoneDigits.slice(-10) === rowPhone.slice(-10))
        ));

        if (emailMatches || phoneMatches) {
          existingRowIndex = i + 2; // Row number (1-based + 1 header row)
          originalSubmissionDate = dataRange[i][1]; // Preserve original submission timestamp
          break;
        }
      }
    }

    // Check if duplicate submission should be strictly blocked
    if (existingRowIndex > 0 && CONFIG.DUPLICATE_MODE === "BLOCK") {
      return jsonResponse({
        result: "duplicate_blocked",
        message: "Duplicate blocked: A project brief has already been registered with this email or phone (" + (submittedEmail || rawPhone) + ").",
        existingRow: existingRowIndex
      });
    }

    // Determine status tag
    var statusTag = "NEW";
    if (existingRowIndex > 0) {
      statusTag = (CONFIG.DUPLICATE_MODE === "FLAG") ? "DUPLICATE - REVIEW" : "UPDATED";
    }

    var rowPayload = [
      statusTag,
      originalSubmissionDate,
      formattedNow,
      fullName,
      businessName,
      params.business_desc || "",
      submittedEmail,
      rawPhone,
      params.project_type || "",
      params.budget_range || "",
      params.timeline || "",
      params.audience || "",
      params.problem_solved || "",
      params.main_action || "",
      params.tone_words || "",
      params.existing_branding || "",
      likedSites,
      dislikedSites,
      pagesRequired,
      specialFeatures,
      params.asset_link || "",
      params.extra_notes || ""
    ];

    // ==========================================================================
    // 4. WRITE RECORD TO SPREADSHEET
    // ==========================================================================
    var targetRow = existingRowIndex;

    if (existingRowIndex > 0 && CONFIG.DUPLICATE_MODE === "UPDATE") {
      // In-place update of existing client record
      sheet.getRange(existingRowIndex, 1, 1, rowPayload.length).setValues([rowPayload]);
      sheet.getRange(existingRowIndex, 1)
           .setBackground("#FEF3C7")
           .setFontColor("#92400E")
           .setFontWeight("bold");
    } else {
      // Append brand-new row or flagged duplicate
      sheet.appendRow(rowPayload);
      targetRow = sheet.getLastRow();

      if (statusTag === "DUPLICATE - REVIEW") {
        sheet.getRange(targetRow, 1).setBackground("#FEE2E2").setFontColor("#991B1B").setFontWeight("bold");
      } else {
        sheet.getRange(targetRow, 1).setBackground("#DCFCE7").setFontColor("#166534").setFontWeight("bold");
      }
    }

    // Center-align status and dates
    sheet.getRange(targetRow, 1, 1, 3).setHorizontalAlignment("center");

    // ==========================================================================
    // 5. EMAIL ALERT TO STUDIO OWNER
    // ==========================================================================
    if (CONFIG.SEND_EMAIL_ALERTS) {
      sendOwnerAlert(doc, {
        statusTag: statusTag,
        fullName: fullName,
        businessName: businessName,
        projectType: params.project_type,
        budgetRange: params.budget_range,
        timeline: params.timeline,
        email: submittedEmail,
        phone: rawPhone,
        assetLink: params.asset_link,
        targetRow: targetRow
      });
    }

    return jsonResponse({
      result: "success",
      action: statusTag.toLowerCase(),
      row: targetRow,
      client: fullName || businessName || submittedEmail
    });

  } catch (error) {
    return jsonResponse({
      result: "error",
      error: error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

// ==============================================================================
// 6. HTTP GET HANDLER (Live Diagnostic Dashboard)
// ==============================================================================
function doGet(e) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getTargetSheet(doc);
  var totalBriefs = Math.max(0, sheet.getLastRow() - 1);

  var html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>A.U.T.O.MATE Brief Engine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0F172A; color: #F8FAFC; margin: 0; padding: 40px 20px; display: flex; justify-content: center; }
          .card { background: #1E293B; border: 1px solid #334155; border-radius: 12px; max-width: 580px; width: 100%; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          .badge { display: inline-block; background: #06B6D4; color: #0F172A; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
          h1 { margin: 0 0 8px; font-size: 24px; color: #FFFFFF; font-weight: 800; letter-spacing: -0.02em; }
          p { color: #94A3B8; font-size: 14px; line-height: 1.6; margin: 0 0 24px; }
          .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
          .stat-box { background: #0F172A; border: 1px solid #334155; border-radius: 8px; padding: 14px; }
          .stat-label { font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 600; letter-spacing: 0.05em; }
          .stat-val { font-size: 20px; font-weight: 800; color: #38BDF8; margin-top: 4px; }
          .btn { display: inline-block; background: #06B6D4; color: #0F172A; text-decoration: none; font-weight: 700; font-size: 13px; padding: 10px 18px; border-radius: 6px; }
          .btn:hover { background: #22D3EE; }
          code { background: #0F172A; border: 1px solid #334155; padding: 2px 6px; border-radius: 4px; font-size: 12px; color: #38BDF8; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge">Operational &bull; v2.5</div>
          <h1>A.U.T.O.MATE Brief Automation Engine</h1>
          <p>Your Google Apps Script Web App receiver is healthy and listening for project briefs from <code>start.html</code>.</p>
          
          <div class="stat-grid">
            <div class="stat-box">
              <div class="stat-label">Total Briefs Logged</div>
              <div class="stat-val">${totalBriefs}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Duplicate Mode</div>
              <div class="stat-val" style="font-size: 16px; margin-top: 8px;">${CONFIG.DUPLICATE_MODE}</div>
            </div>
          </div>

          <div style="border-top: 1px solid #334155; padding-top: 20px;">
            <a href="${doc.getUrl()}" target="_blank" class="btn">&rarr; Open Google Sheet</a>
          </div>
        </div>
      </body>
    </html>
  `;

  return HtmlService.createHtmlOutput(html)
    .setTitle("A.U.T.O.MATE Brief Engine Diagnostic")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ==============================================================================
// 7. IN-SHEET CUSTOM MENU & UTILITIES
// ==============================================================================
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("⚡ A.U.T.O.MATE")
    .addItem("Beautify & Format Sheet", "menuBeautifySheet")
    .addItem("Audit & Highlight Duplicates", "menuAuditDuplicates")
    .addSeparator()
    .addItem("Send Test Brief", "menuInsertTestBrief")
    .addToUi();
}

function menuBeautifySheet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getTargetSheet(doc);
  ensureSheetStructure(sheet);
  applyColumnDimensions(sheet);
  SpreadsheetApp.getUi().alert("Sheet successfully formatted with dark slate header and calibrated column widths!");
}

function menuAuditDuplicates() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getTargetSheet(doc);
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    SpreadsheetApp.getUi().alert("No brief records found to audit.");
    return;
  }

  var data = sheet.getRange(2, 7, lastRow - 1, 2).getValues(); // Email & Phone
  var seen = {};
  var duplicateCount = 0;

  for (var i = 0; i < data.length; i++) {
    var email = (data[i][0] || "").toString().trim().toLowerCase();
    var phone = normalizePhone((data[i][1] || "").toString());
    var key = email || phone;

    if (!key) continue;

    if (seen[key]) {
      sheet.getRange(i + 2, 1).setBackground("#FEE2E2").setFontColor("#991B1B").setValue("DUPLICATE");
      duplicateCount++;
    } else {
      seen[key] = true;
    }
  }

  SpreadsheetApp.getUi().alert("Audit Complete: Found " + duplicateCount + " duplicate brief(s).");
}

function menuInsertTestBrief() {
  var testPayload = {
    parameter: {
      full_name: "Test Client",
      business_name: "Lagos Logistics Hub",
      business_desc: "A sample brief verifying automated sheet pipeline connectivity.",
      email: "test.brief@" + new Date().getTime() + ".com",
      phone: "+234 801 234 5678",
      project_type: "Web Applications",
      budget_range: "₦300,000 – ₦500,000",
      timeline: "4–8 weeks",
      problem_solved: "Automating dispatch operations and customer billing.",
      main_action: "Book a direct pickup dispatch",
      tone_words: "fast, professional, minimal",
      pages_required: "Home, About, Services, Dispatch Portal",
      features: "User Accounts / Login, Payment Processing (Paystack/Flutterwave)",
      asset_link: "https://drive.google.com/drive/folders/sample-test",
      extra_notes: "Automated verification test."
    }
  };
  doPost(testPayload);
  SpreadsheetApp.getUi().alert("Test brief generated and logged successfully!");
}

// ==============================================================================
// 8. HELPER METHODS
// ==============================================================================
function getTargetSheet(doc) {
  var target = doc.getSheetByName(CONFIG.SHEET_NAME);
  if (!target) {
    target = doc.getActiveSheet();
    target.setName(CONFIG.SHEET_NAME);
  }
  return target;
}

function getHeaders() {
  return [
    "Status",
    "Submission Date",
    "Last Updated",
    "Full Name",
    "Business Name",
    "One-Sentence Description",
    "Email Address",
    "WhatsApp / Phone",
    "Project Type",
    "Budget Range",
    "Ideal Timeline",
    "Target Audience",
    "Primary Problem Solved",
    "Main Action Driven",
    "Tone Words",
    "Existing Branding",
    "Liked Websites",
    "Disliked Websites",
    "Pages Required",
    "Special Features",
    "Google Drive Asset Link",
    "Additional Notes"
  ];
}

function ensureSheetStructure(sheet) {
  var headers = getHeaders();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  // Header Styling: Dark Slate #0F172A with white bold text
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold")
             .setBackground("#0F172A")
             .setFontColor("#FFFFFF")
             .setHorizontalAlignment("center")
             .setFontFamily("Inter");
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 40);

  applyColumnDimensions(sheet);
}

function applyColumnDimensions(sheet) {
  var widths = {
    1: 120, // Status
    2: 160, // Submission Date
    3: 160, // Last Updated
    4: 180, // Full Name
    5: 180, // Business Name
    6: 280, // Description
    7: 220, // Email
    8: 160, // Phone
    9: 180, // Project Type
    10: 180, // Budget Range
    11: 130, // Timeline
    12: 200, // Audience
    13: 260, // Problem Solved
    14: 220, // Main Action
    15: 180, // Tone Words
    16: 180, // Branding
    17: 260, // Liked Sites
    18: 260, // Disliked Sites
    19: 220, // Pages
    20: 240, // Features
    21: 260, // Drive Link
    22: 280  // Notes
  };

  for (var col in widths) {
    sheet.setColumnWidth(parseInt(col, 10), widths[col]);
  }
}

function extractPayload(e) {
  var params = {};
  if (e && e.postData && e.postData.contents) {
    try {
      params = JSON.parse(e.postData.contents);
    } catch (err) {
      params = e.parameter || {};
    }
  } else if (e && e.parameter) {
    params = e.parameter;
  }
  return params;
}

function normalizePhone(phoneStr) {
  if (!phoneStr) return "";
  return phoneStr.toString().replace(/\D/g, "");
}

function formatSites(sitesList) {
  return sitesList
    .map(function(s) {
      if (!s.url) return "";
      return s.url + (s.reason ? " (" + s.reason + ")" : "");
    })
    .filter(Boolean)
    .join("\n");
}

function sendOwnerAlert(doc, meta) {
  try {
    var recipient = CONFIG.ALERT_EMAIL_RECIPIENT || Session.getEffectiveUser().getEmail();
    if (!recipient) return;

    var isUpdate = (meta.statusTag === "UPDATED");
    var subjectPrefix = isUpdate ? "[BRIEF UPDATED] " : "[NEW BRIEF] ";
    var subject = subjectPrefix + meta.fullName + " — " + meta.businessName + " (" + (meta.budgetRange || "Budget Not Set") + ")";

    var body = "Hello A.U.T.O.MATE Studio,\n\n" +
      (isUpdate ? "An existing client has updated their project brief:\n\n" : "A new project brief was submitted on the website:\n\n") +
      "• Client Name: " + meta.fullName + "\n" +
      "• Business: " + meta.businessName + "\n" +
      "• Service: " + (meta.projectType || "N/A") + "\n" +
      "• Budget Range: " + (meta.budgetRange || "N/A") + "\n" +
      "• Timeline: " + (meta.timeline || "N/A") + "\n" +
      "• Email: " + meta.email + "\n" +
      "• WhatsApp/Phone: " + meta.phone + "\n" +
      "• Asset Folder: " + (meta.assetLink || "None provided") + "\n\n" +
      "Open your Google Sheet to view the full specification:\n" + doc.getUrl() + "\n\n" +
      "— A.U.T.O.MATE Digital Studio Brief Engine";

    MailApp.sendEmail(recipient, subject, body);
  } catch (err) {
    // Non-fatal if daily quota is reached
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
