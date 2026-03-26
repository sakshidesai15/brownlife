import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Unexpected error',
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Keep console logging for debugging without crashing the UI
    // eslint-disable-next-line no-console
    console.error('UI crash captured by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-brand-900">Something went wrong</h1>
            <p className="mt-3 text-sm text-brand-700">
              The app hit a runtime error and stopped rendering. Please refresh the page.
            </p>
            <p className="mt-2 text-xs text-brand-500 break-words">
              {this.state.message}
            </p>
            <button
              className="mt-6 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
