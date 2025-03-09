import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <main className="flex-grow p-6 container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}