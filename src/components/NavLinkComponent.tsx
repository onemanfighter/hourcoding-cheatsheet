import { NavLink } from "react-router-dom";

/**
 * Proptypes for NavLinkComponent.
 */
export interface INavLinkComponentProps {}

/**
 * Functional component for the navigation bar.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
export default function NavLinkComponent(props: { to: string; text: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive
          ? "text-center text-md shadow-md w-full p-2 m-3 hover:bg-amber-200 bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
          : " text-center text-md shadow-md w-full p-2 m-3 bg-amber-200 hover:bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
      }
    >
      {props.text}
    </NavLink>
  );
}
