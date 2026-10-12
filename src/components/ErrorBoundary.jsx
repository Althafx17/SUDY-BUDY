import React from 'react';
import { AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled Application Runtime Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleResetState = () => {
    try {
      localStorage.removeItem('study-ledger');
      localStorage.removeItem('study-ledger-theme');
      localStorage.removeItem('study-ledger-accent');
    } catch (e) {
      console.warn('Failed to clear localStorage keys:', e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] flex items-center justify-center p-4 selection:bg-[#1f6feb] selection:text-white font-sans">
          <div className="max-w-xl w-full bg-[#161b22] border border-[#30363d] rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 text-[#f85149]">
              <div className="w-10 h-10 rounded-lg bg-[#f85149]/10 border border-[#f85149]/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-[#f85149]" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-[#f0f6fc]">
                  Application Render Error
                </h1>
                <p className="text-xs text-[#8b949e]">
                  The application caught a runtime crash and prevented a white screen.
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3.5 mb-6 text-xs font-mono text-[#f85149] overflow-x-auto max-h-48 whitespace-pre-wrap">
              {this.state.error?.toString() || 'Unknown error occurred'}
            </div>

            <p className="text-sm text-[#8b949e] mb-6 leading-relaxed">
              This issue can happen if saved state in your browser&apos;s local storage is corrupted or if a view failed to mount. You can try refreshing the page or resetting your stored data back to default defaults.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold text-sm rounded-lg border border-[#388bfd]/20 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2ea043]"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleResetState}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#21262d] hover:bg-[#b62324] text-[#c9d1d9] hover:text-white font-semibold text-sm rounded-lg border border-[#30363d] hover:border-[#b62324] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f85149]"
              >
                <Trash2 className="w-4 h-4" />
                Reset Data &amp; Reload
              </button>
            </div>

            {this.state.errorInfo?.componentStack && (
              <details className="mt-6 pt-4 border-t border-[#30363d]">
                <summary className="text-xs text-[#8b949e] cursor-pointer hover:text-[#f0f6fc]">
                  View Component Stack Details
                </summary>
                <pre className="mt-2 text-[11px] font-mono text-[#8b949e] bg-[#0d1117] p-3 rounded border border-[#30363d] overflow-x-auto max-h-36">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
