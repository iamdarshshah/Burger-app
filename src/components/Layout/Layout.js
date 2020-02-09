import React from "react";
import Ax from "../../hoc/Ax";
import "./Layout.css";

const Layout = props => (
  <Ax>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Ax>
);

export default Layout;
