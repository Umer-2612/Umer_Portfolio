import { useCallback, useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Hero";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { About, Contact } from "./components/Rest";
import { PAGES, pageFromLocation, type PageId } from "./pages";

function hrefFor(id: PageId): string {
  return PAGES.find((p) => p.id === id)?.href ?? "/";
}

function App() {
  const [page, setPage] = useState<PageId>(() => pageFromLocation(window.location));
  const main = useRef<HTMLElement | null>(null);

  // Back and forward buttons.
  useEffect(() => {
    const onPop = () => setPage(pageFromLocation(window.location));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // An old /#/work link lands on the clean /work address.
  useEffect(() => {
    if (window.location.hash.startsWith("#/")) {
      window.history.replaceState(null, "", hrefFor(pageFromLocation(window.location)));
    }
  }, []);

  // Each swap starts at the top, moves focus to the new page for screen readers, and updates the tab title.
  useEffect(() => {
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
    const label = PAGES.find((p) => p.id === page)?.label ?? "";
    document.title = page === "home" ? "Umer | Software Engineer" : `${label} | Umer`;
  }, [page]);

  const go = useCallback((id: PageId) => {
    const href = hrefFor(id);
    if (window.location.pathname !== href) window.history.pushState(null, "", href);
    setPage(id);
  }, []);

  return (
    <>
      <Topbar page={page} go={go} />
      <main ref={main} tabIndex={-1} className="page" key={page} aria-live="polite">
        {page === "home" && <Home go={go} />}
        {page === "work" && <Work />}
        {page === "experience" && <Experience />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </main>
      <Analytics />
    </>
  );
}

export default App;
