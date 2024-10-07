import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { createContext, lazy, Suspense, useState } from "react";
import Preloader from "./component/design/Preloader";
import PageNotFound from "./component/PageNotFound";

const Home = lazy(() => import("./component/Home"));
const Skills = lazy(() => import("./component/Skills"));
const Resume = lazy(() => import("./component/Resume"));
const Projects = lazy(() => import("./component/Projects"));
const Contact = lazy(() => import("./component/Contact"));

export const AppContext = createContext();

const App = () => {
  const [openNavigation, setOpenNavigation] = useState(true);
  const [menu, setMenu] = useState(null);

  return (
    <main className="md:max-w-[960px] max-w-full max-md:min-w-full h-full relative w-full min-h-[90vh]">
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
          <AppContext.Provider
            value={{ openNavigation, setOpenNavigation, menu, setMenu }}
          >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AppContext.Provider>
        </Suspense>
      </div>
    </main>
  );
};

export default App;
