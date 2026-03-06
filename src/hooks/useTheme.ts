import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
  listeners.forEach((cb) => cb());
}

// Initialize on first load
if (typeof window !== "undefined" && !document.documentElement.classList.contains("light") && !document.documentElement.classList.contains("dark")) {
  const stored = localStorage.getItem("theme") as Theme | null;
  const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.add(initial);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    const sync = () => setTheme(getTheme());
    listeners.add(sync);
    return () => { listeners.delete(sync); };
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return { theme, toggleTheme };
}
