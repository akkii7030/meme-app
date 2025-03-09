import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        setDarkMode(savedMode === "true");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Dark mode changed:", darkMode); // Debug log

      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
