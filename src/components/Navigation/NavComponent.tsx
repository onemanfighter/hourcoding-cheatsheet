import { NavLink } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";
import { NavTitle } from "../string/ComponentStrings";
import { Collapse, IconButton } from "@mui/material";
import BadgeProvider from "../Badge/BadgeProvider";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

/**
 * Proptypes for NavComponent.
 */
export interface INavComponentProps {}

/**
 * Functional component for the navigation bar.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
export default function NavComponent(props: INavComponentProps) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="max-w-7xl xl:m-auto lg:mx-10 m-3 flex justify-between items-center shadow-lg rounded-md px-5 py-3">
        <div className="flex flex-row items-start mx-3">
          <NavLink
            to="/"
            className="text-md md:text-lg font-sans font-bold bg-gradient-to-r from-amber-400 to-amber-600 hover:bg-gradient-to-l text-transparent bg-clip-text"
          >
            {NavTitle}
          </NavLink>
        </div>
        <div className="flex-col items-end justify-center lg:hidden">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <Menu />
          </IconButton>
        </div>
        <div className="flex-col items-end justify-center hidden lg:block">
          <BadgeProvider
            badgeContent="new"
            position={{ vertical: "bottom", horizontal: "left" }}
            overlap="circular"
          >
            <NavLinkComponent to="/csofficialdoc" text="New cheatsheets" />
          </BadgeProvider>
          <NavLinkComponent to="/categories" text="Categories" />
          <NavLinkComponent to="/all" text="All cheatsheets" />
        </div>
      </div>
      <NavigationButtonUnderHood showNav={showNav} />
    </>
  );
}

/**
 * Functional component for the navigation bar with button support.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
function NavigationButtonUnderHood(props: { showNav: boolean }) {
  return (
    <Collapse in={props.showNav} timeout={200}>
      <div className="max-w-7xl min:md xl:m-auto md:mx-10 mx-3 flex flex-col text-sm md:text-base lg:hidden  ">
        <NavLinkComponent to="/csofficialdoc" text="New cheatsheets" />
        <NavLinkComponent to="/categories" text="Categories" />
        <NavLinkComponent to="/all" text="All cheatsheets" />{" "}
      </div>
    </Collapse>
  );
}
