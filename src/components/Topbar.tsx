import { useEffect, useState } from "react";
import { meta } from "../content";
import { PAGES, type PageId } from "../pages";
import { navClick } from "./ui";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function systemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

export function Topbar({ page, go }: { page: PageId; go: (id: PageId) => void }) {
  const [theme, setTheme] = useState<Theme>(() => storedTheme() ?? systemTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked: the theme still applies for this visit */
    }
  };

  return (
    <header className="dock">
      <a className="brand" href="/" onClick={navClick(go, "home")} aria-label={`${meta.name}, home`}>
        <span className="mark" aria-hidden="true">UK</span>
        <span className="brand-name">{meta.name}</span>
      </a>

      <nav className="tabs" aria-label="Pages">
        {PAGES.map((p) => (
          <a key={p.id} href={p.href} onClick={navClick(go, p.id)} aria-current={page === p.id ? "page" : undefined}>
            {p.label}
          </a>
        ))}
      </nav>

      <div className="dock-end">
        <a className="hire" href={`mailto:${meta.email}`}>Hire me</a>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 2.5a5.5 5.5 0 0 1 0 11z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
}
