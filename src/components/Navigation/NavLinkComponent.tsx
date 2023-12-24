import { NavLink } from "react-router-dom";

/**
 * Proptypes for NavLinkComponent.
 */
export interface INavLinkComponentProps {
  to: string;
  text: string;
}

/**
 * Functional component for the navigation bar.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
export default function NavLinkComponent(props: INavLinkComponentProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive
          ? "text-center text-md shadow-md w-full p-2 xl:m-3 m-1 hover:bg-amber-200 bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
          : " text-center text-md shadow-md w-full p-2 xl:m-3 m-1 bg-amber-200 hover:bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
      }
    >
      {props.text}
    </NavLink>
  );
}
