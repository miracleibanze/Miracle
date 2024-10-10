import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "./constants";
import Button from "./design/Button";
import ButtonGradient from "./design/ButtonGradient";
import Toggle from "../assets/svg/Toggle";
import MenuSvg from "../assets/svg/MenuSvg";
import { Gear } from "../assets/svg/Svgs";

const Navbar = ({ openNavigation, setOpenNavigation, menu, setMenu }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const toggleMenu = () => setMenu(!menu);
  const toggleNavigation = () => setOpenNavigation(!openNavigation);

  const theme = document.body.classList.contains("theme");

  const toggleTheme = () => {
    if (theme) {
      document.body.classList.remove("theme");
    } else {
      document.body.classList.add("theme");
    }
  };

  const navContent = (
    <div className="fixed right-0 sm:hidden top-0 animate-menu bottom-0 dark-bg z-[100] w-5/6 flex flex-col justify-center gap-4">
      {navlinks.map((item) => (
        <div
          className={`w-full px-6 py-2 cursor-pointer hover:bg-primary link-${item.id}`}
          key={item.id}
          onClick={() => {
            setOpenNavigation(false);
            navigate(`${item.link}`);
          }}
        >
          {item.name}
        </div>
      ))}
      <div
        className="w-full px-6 py-2 link-5 cursor-pointer light flex items-center justify-between"
        onClick={() => {
          toggleTheme();
          setOpenNavigation(false);
        }}
      >
        Dark mode
        <Toggle rotate={theme ? "rotate-180" : "rotate-0"} />
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between w-full font-semibold py-2 relative">
        <h4
          className="h4 font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          M<span className="relative text-primary">ira</span>cle.
        </h4>

        <div
          className="sm:flex hidden items-center gap-2 flex-1 justify-center"
          onClick={() => {
            if (openNavigation) {
              setOpenNavigation(false);
            }
            if (menu) {
              setMenu(false);
            }
          }}
        >
          {navlinks.map((item) => (
            <span
              className={`${
                item.name === "Contact" && "sm:hidden"
              } relative hover:text-primary py-1 cursor-pointer duration-300 ${
                location === item.link && "navLink-Underline text-primary"
              }`}
              key={item.id}
              onClick={() => navigate(`${item.link}`)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="sm:flex hidden items-center gap-2">
          <Button
            underline={location === "/contact" ? true : false}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
          <Gear onClick={toggleMenu} />
        </div>

        <Button
          className="ml-auto sm:hidden"
          onClick={toggleNavigation}
          zIndex="z-[200]"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        <div
          className={`absolute z-10 max-sm:hidden top-full right-0 px-4 py-2 dark-bg w-[20rem] ${
            !menu && "hidden"
          } z-[100]`}
          onClick={() => {
            toggleTheme();
            toggleMenu();
          }}
        >
          <span className="flex items-center justify-between w-full hover:dark-bg px-4 py-2 cursor-pointer">
            <p>Dark mode</p>
            <Toggle rotate={theme ? "rotate-180" : "rotate-0"} />
          </span>
        </div>
        {openNavigation && navContent}
      </div>
      <ButtonGradient />
    </>
  );
};

export default Navbar;
