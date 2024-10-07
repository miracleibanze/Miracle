import { useContext } from "react";
import { AppContext } from "../App";
import { gradient, profile } from "../assets";
import { social } from "./constants";
import Button from "./design/Button";

const Home = () => {
  const { openNavigation, setOpenNavigation, menu, setMenu } =
    useContext(AppContext);
  return (
    <div
      className="w-full flex md:flex-row flex-col items-center justify-between md:h-[80vh]"
      onClick={() => {
        if (openNavigation) {
          setOpenNavigation(false);
        }
        if (menu) {
          setMenu(false);
        }
      }}
    >
      <div className="md:w-[60%] w-full aspect-auto light fade-down py-16 px-8 rounded-3xl">
        <p className="tagline">Front-End Developer</p>
        <h1 className="sm:h1 h2 font-semibold font-code tracking-tight leading-none mb-3">
          Hello I'm
          <br />
          <span className="text-primary">IBANZE Miracle</span>
        </h1>
        <p className="caption mb-4">
          I excel at crafting at digital experiences and
          <br />I am proficient in various programming languages and
          technologies.
        </p>
        <div className="md:w-full w-max max-w-md flex md:flex-row flex-col md:items-center items-start gap-4">
          <Button className="px-12">Download CV</Button>
          <div className="flex items-center justify-center flex-1 gap-2">
            {social.map((item) => (
              <div
                className="h-10 aspect-square rounded-full bg-conic-gradient flex overflow-hidden  items-center justify-center"
                key={item.name}
              >
                <div className="w-full h-full bg-[#18181b] rounded-full p-1.5 bg-clip-padding border-2 border-transparent">
                  <img src={item.icon} className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[40%] max-md:-translate-y-16 w-full flex items-center justify-center relative">
        <img
          src={profile}
          className="h-[30rem] w-[18rem] z-10 object-cover object-top fade-in"
          width={500}
          height={845}
        />
        <div className="profile-overlay absolute top-0 right-0 left-0 -bottom-1 z-[12] slide-in" />
        <img
          src={gradient}
          className="absolute inset-0 object-contain opacity object-top opacity"
        />
      </div>
    </div>
  );
};

export default Home;