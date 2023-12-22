import { NavLink } from "react-router-dom";

/**
 * Proptypes for FooterComponent.
 */
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
      <div>
        <FooterContent />
      </div>
      <div>
        <FooterSticky />
      </div>
    </div>
  );
}

/**
 * Ui component for the sticky footer of the website.
 *
 * @returns UI component for the sticky footer of the website.
 */
function FooterSticky() {
  return (
    <div className=" overflow-scroll text-center text-md shadow-md w-full p-2 m-auto bg-gradient-to-r from-amber-200 to-amber-400 rounded-md">
      <div className="footer-content">
        <div>
          &copy; 2023{" "}
          <NavLink to="" className="hover:text-amber-800">
            Hourcoding.com{" "}
          </NavLink>
          |{" "}
          <NavLink to="" className="hover:text-amber-800">
            Cheatsheets
          </NavLink>
          <div className="">All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Functional component for the content of the footer.
 * @returns Content of the footer.
 */
function FooterContent() {
  return <></>;
}
