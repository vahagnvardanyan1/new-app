export const themeScript = `
(() => {
  const storageKey = "theme";
  const getPreferredTheme = () => {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  try {
    const stored = localStorage.getItem(storageKey);
    const theme = stored === "dark" || stored === "light" ? stored : getPreferredTheme();
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    const theme = getPreferredTheme();
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  }
})();
`;


