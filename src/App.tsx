// Static import
import { useState, lazy, Suspense } from "react";
import { Banner } from "./components/Banner";

// Dynamic imports
const Home = lazy(() =>
  import("./components/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() => import("./components/About"));
const Nav = lazy(() =>
  import("./components/Nav").then((module) => ({ default: module.Nav }))
);

export default function App() {
  const [tab, setTab] = useState<"home" | "about" | "nav">("home");

  return (
    <main>
      <Banner />

      <nav>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("about")}>About</button>
        <button onClick={() => setTab("nav")}>Nav</button>
      </nav>

      {tab === "home" && (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      )}
      {tab === "about" && (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )}
      {tab === "nav" && (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
      )}
    </main>
  );
}
