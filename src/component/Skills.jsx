import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { LeftCurve, RightCurve } from "./design/Curves";
import { Laptop } from "../assets/svg/Svgs";
import { skills } from "./constants";
import Rotate from "./design/Rotate";
import Button from "./design/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const [detailView, setDetailView] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);

  useEffect(() => {
    if (viewIndex === null) {
      setDetailView(true);
    } else {
      setDetailView(false);
    }
  }, [viewIndex]);

  return (
    <div
      className="grid grid-rows-9 h-full min-w-full gap-4 min-h-full relative justify-center"
      onClick={() => {
        if (openNavigation) {
          setOpenNavigation(false);
        }
        if (menu) {
          setMenu(false);
        }
      }}
    >
      <p className="text-center row-span-1 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        laudantium asperiores dolores.
      </p>

      <div className="row-span-8 h-full light scale-in scale-in gap-10 rounded-md flex flex-col items-center place-content-between overflow-y-scroll scroll-design">
        <div className="sticky right-0 left-0 bottom-full m-2 lg:ml-4 p-2 theme-color bg-clip-padding rounded-md flex place-content-center justify-center gap-2 flex-wrap items-center tagline font-semibold">
          For Details:
          {Array(9)
            .fill("")
            .map((item, index) => (
              <Button
                white={viewIndex !== index ? true : false}
                className="lg:px-10 md:px-6 sm:px-4 px-2"
                onClick={() => setViewIndex(index)}
              >
                {skills[index].name}
              </Button>
            ))}
          {viewIndex !== null && (
            <div
              className="absolute md:right-8 right-2 p-4 -bottom-16"
              onClick={() => setViewIndex(null)}
            >
              <MenuSvg openNavigation={true} />
            </div>
          )}
        </div>
        <div
          className={`${
            !detailView && "hidden"
          } relative sm:w-[25rem] w-[25rem] mb-12 max-w-[80vw] aspect-square overflow-visible rounded-full `}
        >
          <div className="absolute inset-0 m-16 flex aspect-square rounded-full bg-cover bg-center overflow-visible items-center justify-center">
            <Laptop fill="text-primary" />
          </div>
          <ul className="absolute inset-0 flex items-center justify-end">
            {skills.map((item) => (
              <Rotate index={Math.round(item.id * 40)} key={item.id}>
                <div
                  className={`absolute p-1 bg-conic-gradient opacity h-[140%] translate-x-6 top-1/2 -translate-y-1/2 aspect-square rounded-full`}
                >
                  <div className="h-full aspect-square rounded-full p-3 bg-[#e4e4e7] flex items-center place-content-center">
                    <img
                      src={item.icon}
                      className="h-full aspect-square object-fill"
                    />
                  </div>
                </div>
              </Rotate>
            ))}
          </ul>
          <LeftCurve />
          <RightCurve />
        </div>
        {viewIndex !== null && (
          <h1 className="h1 font-code font-bold tracking-widest">
            {skills[viewIndex].title}
          </h1>
        )}
        <div className="relative flex flex-col items-center justify-between  h-1/2 max-sm:w-full max-sm:p-2">
          {skills.map((item) => (
            <div
              className="w-full flex items-center sm:flex-row flex-col gap-1"
              key={item.id}
            >
              <div
                className={`bg-count-${item.id} p-2 ${
                  viewIndex !== item.id && "hidden"
                } opacity h-24 aspect-square rounded-full`}
              >
                <div className="h-full aspect-square rounded-full p-3 theme-color flex items-center place-content-center font-bold font-code text-2xl">
                  {item.count}%
                </div>
              </div>
              <div
                className={`px-4 py-2 rounded-md theme-color ${
                  viewIndex !== item.id && "hidden"
                } sm:w-[20rem] w-full`}
              >
                <p className="body-1 font-semibold">{item.level}</p>
                <p className="w-full text-end">{item.status}</p>
              </div>
            </div>
          ))}
          <button
            className="tagline px-4 py-2 rounded-md bg-primary text-black font-semibold mb-4"
            onClick={() => navigate("/projects")}
          >
            Check Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);
