import { NavLink } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";
import { NavTitle } from "./string/ComponentStrings";

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
  return (
    <div className="max-w-6xl min:md xl:m-auto mx-10 flex justify-between  items-center shadow-lg rounded-md p-5">
      <div className="flex flex-row items-start mx-3">
        <NavLink
          to="/"
          className="text-lg font-sans font-bold bg-gradient-to-r from-amber-400 to-amber-600 hover:bg-gradient-to-l text-transparent bg-clip-text"
        >
          {NavTitle}
        </NavLink>
      </div>
      <div className="flex-col items-end justify-center">
        <NavLinkComponent to="/categories" text="Categories" />
        <NavLinkComponent to="/about" text="About" />
        <NavLinkComponent to="/contact" text="Contact" />
      </div>
    </div>
  );
}
