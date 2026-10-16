import { Component, ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    // Forward to Sentry if initialized
    Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-card border border-border shadow-soft">
            <span className="font-serif text-2xl text-foreground font-normal">
              ELFORT DENTAL CLINIC
            </span>
            <h2 className="mt-4 font-sans text-lg font-semibold text-foreground">
              Temporarily Unavailable
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We encountered an unexpected display issue. Please refresh the page or reach out directly to our concierge team on WhatsApp.
            </p>
            <a
              href="https://wa.me/18005550199"
              className="mt-6 inline-flex items-center justify-center h-11 px-6 rounded-full bg-whatsapp text-white text-sm font-medium hover:bg-whatsapp-hover transition-colors"
            >
              Direct Concierge WhatsApp
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
