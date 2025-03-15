import { JSX } from 'react';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen w-full flex items-start justify-center pt-20">
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-9xl font-bold text-gray-200 transition-all duration-300 hover:text-gray-300">
          404
        </h1>
        
        <h2 className="mt-8 text-2xl font-medium text-gray-600">
          Page not found
        </h2>
        <p className="mt-4 text-gray-500 text-center max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          Please check the URL or return to the homepage.
        </p>
        
        <Link 
          href="/"
          className="mt-8 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}