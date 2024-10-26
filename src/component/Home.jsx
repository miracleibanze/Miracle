import { memo } from "react";
import { cvDocument, gradient, profile } from "../assets";
import { social } from "./constants";
import Button from "./design/Button";
import { useNavigate } from "react-router-dom";
import PageSwitcherStairs from "./design/PageSwitcherStairs";

const Home = ({ setDirectDestination }) => {
  const navigate = useNavigate();
  const redirect = (destination) => {
    setDirectDestination(destination);
    navigate(`/home/redirecting/external/source`);
  };

  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between md:h-[80vh]">
      <PageSwitcherStairs />
      <div className="md:w-[60%] w-full aspect-auto light fade-down py-16 px-8 rounded-3xl">
        <p className="tagline">Front-End Developer</p>
        <div className="sm:h2 h3 font-semibold font-code tracking-tight leading-none mb-3">
          Hello, I'm
          <br />
          <span className="sm:h1 h2 text-primary">IBANZE Miracle</span>
        </div>
        <p className="caption mb-4">
          I excel at crafting at digital experiences and
          <br />I am proficient in various programming languages and
          technologies.
        </p>
        <div className="md:w-full w-max max-w-md flex md:flex-row flex-col md:items-center items-start gap-4">
          <Button className="px-12" href={cvDocument}>
            Download CV
          </Button>
          <div className="flex items-center justify-center flex-1 gap-4">
            {social.map((item) => (
              <div
                className="h-10 aspect-square rounded-full flex items-center justify-center p-1.5 border-colorful"
                key={item.name}
                onClick={() => redirect(item.url)}
              >
                <img src={item.icon} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[40%] max-md:-translate-y-16 w-full flex items-center justify-center relative">
        <img
          src={profile}
          className="h-[30rem] w-[18rem] z-10 object-cover object-top fade-in"
          width={568}
          height={876}
        />
        <div className="profile-overlay absolute top-0 -right-1/2 left-0 -bottom-1 z-[12] md:slide-in" />
        <img
          src={gradient}
          className="absolute inset-0 object-contain opacity object-top opacity"
        />
      </div>
    </div>
  );
};

export default memo(Home);
