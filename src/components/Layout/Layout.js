import React from "react";
import Ax from "../../hoc/Ax";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <Ax>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Ax>
);

export default Layout;
