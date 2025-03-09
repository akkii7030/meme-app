import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button 
      onClick={() => setDarkMode((prev) => !prev)} 
      className="p-2 border rounded"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}