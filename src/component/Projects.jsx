import { memo, useState } from "react";
import { projects } from "./constants";
import { AngleLeftSvg, AngleRightSvg, Visit } from "../assets/svg/Arrow";
import { doneSvg, undoneSvg } from "../assets";
import { useNavigate } from "react-router-dom";
import PageSwitcherStairs from "./design/PageSwitcherStairs";
const Projects = ({ setDirectDestination }) => {
  const navigate = useNavigate();
  const [viewindex, setViewIndex] = useState(0);

  const redirect = (source, destination) => {
    console.log(destination);
    setDirectDestination(destination);
    navigate(`/projects/redirecting/external/source`);
  };

  const nextProject = () => {
    const isLast = viewindex === projects.length - 1;
    const newIndex = isLast ? 0 : viewindex + 1;
    setViewIndex(newIndex);
  };

  const prevProject = () => {
    const isFirst = viewindex === 0;
    const newIndex = isFirst ? projects.length - 1 : viewindex - 1;
    setViewIndex(newIndex);
  };

  return (
    <div className="relative w-full flex h-full items-center md:flex-row-reverse flex-col md:justify-center pt-10 max-md:overflow-y-scroll scroll-design">
      <div className="md:min-h-[25rem] md:w-1/2 w-full fade-up max-md:max-w-[30rem] max-md:aspect-[13/11] relative flex flex-col place-content-start">
        <img
          src={projects[viewindex].image.img}
          alt={projects[viewindex].name}
          width={1298}
          height={1140}
          className="w-full h-auto max-md:h-full img object-cover object-center rounded-tl-xl rounded-br-xl rounded-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${projects[viewindex].image.imgPlaceHolder})`,
          }}
        />
        <span className="w-full flex md:place-content-end place-content-between py-2 items-center gap-2 max-md:absolute max-md:top-1/2 max-md:-translate-y-1/2">
          <AngleLeftSvg onClick={prevProject} />
          <AngleRightSvg onClick={nextProject} />
        </span>
        <span className="absolute top-1 right-3 px-2 py-1 rounded-md flex items-center gap-2 dark-bg">
          <img
            src={projects[viewindex].status === "Ready" ? doneSvg : undoneSvg}
            alt="status"
            className="h-6 w-6"
          />
          {projects[viewindex].status}
        </span>
      </div>
      <div className="md:min-h-[25rem] md:w-1/2 w-[90%] md:pr-4 relative">
        <div className="text-8xl leading-none text-outline pl-4">
          {"0" + (viewindex + 1)}
        </div>
        <h4 className="h4 leading-none">Frontend Project :</h4>
        <h1 className="h1 text-primary leading-none mb-4">
          {projects[viewindex].name}
        </h1>
        <p className="body-1-font-semibold">
          {projects[viewindex].description}
        </p>
        <p className="h5 font-semibold text-primary">
          {projects[viewindex].technologies}
        </p>
        <span
          className="absolute top-2 right-6 group"
          onClick={() => {
            redirect("projects", projects[viewindex].url);
            console.log(projects[viewindex].url);
          }}
        >
          <Visit />
        </span>
      </div>
      <PageSwitcherStairs />
    </div>
  );
};

export default memo(Projects);
