import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="p-4 bg-gradient-to-b from-black to-gray-800 text-white border-b border-gray-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-400 transition">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
          MemeVerse
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/explore" className="hover:text-gray-400 transition">Explore</Link>
          <Link href="/upload" className="hover:text-gray-400 transition">Upload</Link>
          <Link href="/profile" className="hover:text-gray-400 transition">Profile</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
