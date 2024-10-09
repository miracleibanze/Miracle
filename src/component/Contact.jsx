import { memo } from "react";
import Input from "./design/Input";
import Button2 from "./design/Button2";
import { contact } from "./constants";

const Contact = () => {
  return (
    <div className="relative w-full flex h-full items-center md:flex-row-reverse flex-col md:justify-center pt-10 max-md:overflow-y-scroll scroll-design lg:gap-16 md:gap-8 gap-12 justify-start">
      <div className="md:w-[40%] flex flex-col gap-4 slide-in">
        {contact.map((item) => (
          <div
            className="flex items-center gap-2 w-full"
            key={item.id + " " + item.name}
          >
            <div className="p-3 light">
              <img src={item.icon} alt={item.title} className="h-6 w-6" />
            </div>
            <div>
              <div className="span">{item.title}</div>
              <div>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="light md:w-[60%] py-4 px-8 flex flex-col gap-4 w-full max-md:max-w-md opacity">
        <h3 className="h3 font-code text-primary font-semibold">
          Let's Work Together
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          illo ullam vitae ipsa et inventore.
        </p>
        <Input type="text" placeholder="Full names" />
        <Input type="email" placeholder="Email address" />
        <Input type="number" placeholder="Phone number" />
        <textarea
          placeholder="Type your message here."
          className="reverse w-full h-[6rem] rounded-md px-4 py-2 outline-1 outline-indigo-300"
        ></textarea>
        <Button2 className=" text-reverse">Send message</Button2>
      </div>
    </div>
  );
};

export default memo(Contact);
