import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Ax from "../../../hoc/Ax/Ax";
import "./SideDrawer.css";

const SideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Ax>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav style={{ marginTop: "32px" }}>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Ax>
  );
};

export default SideDrawer;
