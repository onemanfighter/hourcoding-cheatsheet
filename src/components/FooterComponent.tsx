import { NavLink } from "react-router-dom";

export interface IFooterComponentProps {}

/**
 * Ui component for the footer of the website.
 *
 * @param props footer component properties.
 * @returns UI component for the footer of the website.
 */
export default function FooterComponent(props: IFooterComponentProps) {
  return (
    <div>
      <div></div>
      <div>
        <FooterSticky />
      </div>
    </div>
  );
}

function FooterSticky() {
  return (
    <div className="fixed bottom-0 overflow-scroll text-center text-md shadow-md w-full p-2 m-auto bg-gradient-to-r from-amber-200 to-amber-400 rounded-md">
      <div className="footer-content">
        <p>
          &copy; 2023{" "}
          <NavLink to="" className="hover:text-amber-800">
            Hourcoding.com{" "}
          </NavLink>
          |{" "}
          <NavLink to="" className="hover:text-amber-800">
            Cheatsheets
          </NavLink>
        </p>
      </div>
    </div>
  );
}
