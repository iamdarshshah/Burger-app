import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = props => {
  return (
    <div className="SideDrawer">
      <Logo height="11%" />
      <nav style={{ marginTop: "32px" }}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
