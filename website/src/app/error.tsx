'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console (in production, consider using error monitoring service)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Something went wrong
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We apologize for the inconvenience. An unexpected error occurred.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            size="lg"
          >
            Go home
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
              Error details (development only)
            </summary>
            <pre className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-auto text-xs text-slate-800 dark:text-slate-200">
              {error.message}
              {error.digest && `\nError ID: ${error.digest}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
