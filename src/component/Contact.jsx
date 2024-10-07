import { memo, useContext } from "react";
import { AppContext } from "../App";

const Contact = () => {
  const { openNavigation, setOpenNavigation, menu, setMenu } =
    useContext(AppContext);
  return (
    <div
      onClick={() => {
        if (openNavigation) {
          setOpenNavigation(false);
        }
        if (menu) {
          setMenu(false);
        }
      }}
    >
      Contact
    </div>
  );
};

export default memo(Contact);
