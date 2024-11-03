import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Preloader from "./component/design/Preloader";
import PageNotFound from "./component/PageNotFound";
import Redirecting from "./component/Redirecting";

const Home = lazy(() => import("./component/Home"));
const Skills = lazy(() => import("./component/Skills"));
const Resume = lazy(() => import("./component/Resume"));
const Projects = lazy(() => import("./component/Projects"));
const Contact = lazy(() => import("./component/Contact"));

const App = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [menu, setMenu] = useState(null);

  const [stairsLoader, setStairsLoader] = useState(false);
  const [stairsBg, setStairsBg] = useState(false);
  const [directDestination, setDirectDestination] = useState("");

  const redirect = (source, destination) => {
    console.log(destination);
    setDirectDestination(destination);
    navigate(`/${source}/redirecting/external/source`);
  };

  useLayoutEffect(() => {
    setStairsLoader(true);
    setStairsBg(true);
    setTimeout(() => {
      setStairsBg(false);
    }, 800);
    setTimeout(() => {
      setStairsLoader(false);
    }, 1400);
  }, [location]);

  return (
    <main className="lg:max-w-screen-lg max-w-full max-md:min-w-full h-full min-h-full relative w-full">
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        className="absolute top-[4rem] bottom-10 h-full max-h-[85%] w-full max-md:px-8"
        onClick={() => {
          if (openNavigation) {
            setOpenNavigation(false);
          }
          if (menu) {
            setMenu(false);
          }
        }}
      >
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setDirectDestination={setDirectDestination} />}
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="/projects"
              element={<Projects setDirectDestination={setDirectDestination} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/:source/redirecting/external/source"
              element={<Redirecting directDestination={directDestination} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
      <div className="fixed bottom-0 right-0 left-0 py-2 px-8 text-right italic vertical">
        &copy; {new Date().getFullYear()}, All rights reserved.
      </div>
    </main>
  );
};

export default App;
