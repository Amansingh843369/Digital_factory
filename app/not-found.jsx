import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl md:text-8xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-md mx-auto text-gray-500">
          Sorry, the page you are looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 rounded-full bg-black px-6 py-3
                     text-sm font-medium text-white transition
                     hover:bg-gray-800"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}