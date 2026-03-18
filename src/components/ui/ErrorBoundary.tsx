"use client";

import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const DefaultFallback = () => (
  <div className="min-h-[400px] bg-[#0D0D0D] flex items-center justify-center px-4">
    <div className="text-center">
      <p className="text-white/60 text-base">
        Something went wrong loading this section.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 gold-gradient text-white font-bold text-sm px-6 py-2 rounded-full"
      >
        Reload Page
      </button>
    </div>
  </div>
);

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <DefaultFallback />;
    }

    return this.props.children;
  }
}
