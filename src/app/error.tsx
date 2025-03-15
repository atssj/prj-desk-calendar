"use client";

import React, { useEffect, JSX } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    // Add more descriptive error logging
    console.error("Application error:", error);

    // Optional: Log the error digest if available
    if (error.digest) {
      console.error("Error digest:", error.digest);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Something went wrong!</h2>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
