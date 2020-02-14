import React from "react";
import Ax from "../../hoc/Ax";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Ax>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Ax>
);

export default Layout;
