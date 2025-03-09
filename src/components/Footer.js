export default function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-b from-black to-gray-800 text-white border-t border-gray-700 mt-auto shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} MemeVerse. All rights reserved.</p>
      </div>
    </footer>
  );
}