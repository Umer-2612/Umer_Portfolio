export const PAGES = [
  { id: "home", label: "Home", href: "/" },
  { id: "work", label: "Work", href: "/work" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export type PageId = (typeof PAGES)[number]["id"];

/** Reads the page from the URL path (/work). Unknown paths fall back to Home. */
export function pageFromLocation(loc: Pick<Location, "pathname" | "hash">): PageId {
  // Old links looked like /#/work. Treat them as /work.
  const legacy = loc.hash.startsWith("#/") ? loc.hash.slice(1) : "";
  const path = (legacy || loc.pathname).replace(/\/+$/, "") || "/";
  return PAGES.find((p) => p.href === path)?.id ?? "home";
}
