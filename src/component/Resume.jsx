import { memo, useEffect, useState } from "react";
import { resume } from "./constants";
import { useNavigate, useParams } from "react-router-dom";
import Button2 from "./design/Button2";
const Resume = () => {
  const navigate = useNavigate();
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <div className="w-full grid md:grid-cols-3 gap-3 mt-[5vh] max-md:overflow-y-scroll scroll-design max-h-full">
      <div className="relative w-full px-2 max-md:text-center md:pr-4 md:col-span-1 col-span-2">
        <h3 className="h3 font-code tracking-tighter font-semibold">
          Why&nbsp;hire&nbsp;me
        </h3>
        <p className="mb-8 span">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          libero!
        </p>
        {resume.map((item) => (
          <Button2
            full
            background={viewIndex !== item.id && "light"}
            key={item.name}
            onClick={() => setViewIndex(item.id)}
          >
            {item.name}
          </Button2>
        ))}
      </div>
      <div className="grid md:grid-cols-2 col-span-2 gap-4 md:pl-4 text-lg fade-down">
        <div className="md:col-span-2 md:pt-4">
          <h4 className="h4 font-code tracking-tight font-semibold">
            {resume[viewIndex].name}
          </h4>
          <p className="mb-4 span">{resume[viewIndex].introduction}</p>
        </div>
        {viewIndex === 0 && (
          <div className="relative col-span-2 row-span-2 h5 italic clear-both light flex items-center justify-center text-center p-4 font-grotesk rounded-md">
            "Motivated front-end web developer with a strong foundation in
            React.js, Tailwind CSS, and Vite. Proven experience in creating
            responsive, user-friendly applications with efficient routing and
            state management. Passionate about leveraging modern development
            tools to enhance user engagement and drive innovative solutions."
          </div>
        )}
        {viewIndex === 1 && (
          <div className="grid col-span-2 grid-cols-2 gap-4 md:max-h-[20rem] overflow-y-scroll scroll-design">
            <div className="w-full light p-4 row-span-2">
              <p className="text-primary">2024</p>
              <h5 className="h5 font-semibold min-h-20">
                Version Control, Browser Developer Tools
              </h5>
              <ul className="list-disc list-inside">
                <li className="caption">Online course</li>
              </ul>
            </div>
            <div className="w-full light p-4 row-span-2">
              <p className="text-primary">2024</p>
              <h5 className="h5 font-semibold min-h-20">Responsive design</h5>
              <ul className="list-disc list-inside">
                <li className="caption">Free Code Camp</li>
              </ul>
            </div>
            <div className="w-full light p-4 row-span-2">
              <p className="text-primary">2024</p>
              <h5 className="h5 font-semibold min-h-20">
                HTML & CSS certificates
              </h5>
              <ul className="list-disc list-inside">
                <li className="caption">Codeliber mobile app</li>
              </ul>
            </div>
            <div className="w-full light p-4 row-span-2">
              <p className="text-primary">2021-2024</p>
              <h5 className="h5 font-semibold min-h-20">
                Mathematics - Computer&nbsp;Science - Economics
              </h5>
              <ul className="list-disc list-inside">
                <li className="caption">Mukingi Secondary School</li>
              </ul>
            </div>
          </div>
        )}
        {viewIndex === 2 && (
          <>
            <ul className="list-disc list-inside pl-8">
              <h5 className="h5 font-semibold">Languages</h5>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
            <ul className="list-disc list-inside pl-8">
              <h5 className="h5 font-semibold">FrameWorks/ Libraries</h5>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
            <ul className="list-disc list-inside pl-8">
              <h5 className="h5 font-semibold">Tools</h5>

              <li>Git</li>
              <li>Vite</li>
              <li>Sass</li>
              <li>npm</li>
            </ul>
            <ul className="list-disc list-inside pl-8">
              <h5 className="h5 font-semibold">FrameWorks/ Libraries</h5>
              <li> Responsive design</li>
              <li>Browser Developer Tool</li>
              <li>Version Control</li>
            </ul>
          </>
        )}
        {viewIndex === 3 && (
          <div className="md:col-span-2 flex items-center">
            <div className="w-1/3">
              <p>
                <i className="span">Names:</i>
                <br />
                &nbsp;&nbsp;IBANZE&nbsp;Miracle
              </p>
              <p>
                <i className="span">Natioality:</i>
                <br />
                &nbsp;&nbsp;Rwandan
              </p>
              <p>
                <i className="span">Location:</i>
                <br />
                &nbsp;&nbsp;Ruhango,&nbsp;Rwanda
              </p>
            </div>
            <div className="w-2/3">
              <p>
                <i className="span">Telephone:</i>
                <br />
                &nbsp;&nbsp;+250794881466
              </p>
              <p>
                <i className="span">Email:</i>
                <br />
                &nbsp;&nbsp;miracleibanze@gmail.com
              </p>
              <p>
                <i className="span">LinkedIn:</i>
                <br />
                &nbsp;&nbsp;www.linkedin.com/in/ibanze-miracle
              </p>
              <p>
                <i className="span">Github:</i>
                <br />
                &nbsp;&nbsp;https://github.com/miracleibanze
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Resume);
