import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl sm:text-9xl font-black gold-text-gradient mb-4">
          404
        </h1>
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 text-base sm:text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block gold-gradient text-white font-bold text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
