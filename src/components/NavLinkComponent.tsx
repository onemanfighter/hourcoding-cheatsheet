import { NavLink } from "react-router-dom";

export interface INavLinkComponentProps {}

export default function NavLinkComponent(props: { to: string; text: string }) {
  return (
    <NavLink
      to={props.to}
      className="text-center text-md shadow-md w-full p-2 m-3 bg-amber-200 hover:bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
    >
      {props.text}
    </NavLink>
  );
}
