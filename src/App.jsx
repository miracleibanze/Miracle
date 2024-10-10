import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import { createContext, lazy, Suspense, useCallback, useState } from "react";
import Preloader from "./component/design/Preloader";
import PageNotFound from "./component/PageNotFound";
import Redirecting from "./component/Redirecting";

const Home = lazy(() => import("./component/Home"));
const Skills = lazy(() => import("./component/Skills"));
const Resume = lazy(() => import("./component/Resume"));
const Projects = lazy(() => import("./component/Projects"));
const Contact = lazy(() => import("./component/Contact"));

const App = () => {
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [menu, setMenu] = useState(null);

  const [directDestination, setDirectDestination] = useState("");

  const redirect = (source, destination) => {
    console.log(destination);
    setDirectDestination(destination);
    navigate(`/${source}/redirecting/external/source`);
  };

  return (
    <main className="lg:max-w-screen-lg max-w-full max-md:min-w-full h-full relative w-full min-h-[90vh]">
      <Navbar
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        className="absolute top-[4rem] bottom-10 h-full max-h-[90%] w-full"
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
    </main>
  );
};

export default App;
