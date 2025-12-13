"use client";

import { useCallback, useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const current = document.documentElement.dataset.theme;
    if (current === "dark" || current === "light") {
      setMode(current);
    }
  }, []);

  const setThemeMode = useCallback(({ mode: nextMode }: { mode: ThemeMode }) => {
    setMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
    document.documentElement.dataset.theme = nextMode;
    try {
      localStorage.setItem("theme", nextMode);
    } catch {
      // ignore
    }
  }, []);

  const toggleThemeMode = useCallback(() => {
    setThemeMode({ mode: mode === "dark" ? "light" : "dark" });
  }, [mode, setThemeMode]);

  return { mode, isMounted, setThemeMode, toggleThemeMode };
};


