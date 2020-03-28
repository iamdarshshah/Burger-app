import React from "react";
import "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);

export default NavigationItems;
