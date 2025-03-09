import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-2xl mt-4 text-gray-400">Oops! This page doesn't exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
      >
        Go back home
      </Link>
    </div>
  );
}