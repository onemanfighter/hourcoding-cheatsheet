import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButtonComponent";
import { OverApiContext } from "../../contextProvider/Context";
import { Alert, Collapse } from "@mui/material";

/**
 * Proptypes definition for the OfficialDocCheatsheetScreen component.
 */
export interface IOfficialDocCheatsheetScreenProps {}

/**
 * Functional component for the official document cheatsheet screen.
 *
 * @param props Proptypes for the OfficialDocCheatsheetScreen component.
 * @returns Official document cheatsheet screen.
 */
export default function OfficialDocCheatsheetScreen(
  props: IOfficialDocCheatsheetScreenProps
) {
  const [showAlert, setShowAlert] = useState(true);

  const data = useContext(OverApiContext);
  const [categoryName, setCategoryName] = useState<string>("");
  const category = data != null ? data["children"] : [];
  category.sort((a: any, b: any) => {
    return a["name"].localeCompare(b["name"]);
  });

  return (
    <div className="">
      <Collapse in={showAlert}>
        <div className=" max-w-7xl min:md xl:mx-auto xl:my-4 md:mx-10 mx-3 md:p-5 p-2 xl:mt-10 md:m-5 m-2 flex items-start justify-start shadow-md md:my-6 my-2">
          <div className=" flex-row items-center rounded">
            <Alert
              severity="info"
              onClose={() => {
                setShowAlert(false);
              }}
            >
              These cheatsheets are created using the official documentation of
              corresponding frameworks, languages, and libraries.
            </Alert>
          </div>
        </div>
      </Collapse>

      <div className=" max-w-7xl min:md xl:mx-auto xl:my-4 md:mx-10 mx-3 md:p-5 p-2 lg:mt-10 md:md-5 flex items-start justify-start shadow-md md:my-6 my-3">
        <BackButton />
        <div className="text-lg md:text-xl lg:text-3xl mx-3 text-amber-950">
          <NavLink to="" className="flex-row">
            Cheatsheets{" "}
          </NavLink>
        </div>
        {categoryName !== "" ? (
          <div className="text-lg md:text-xl lg:text-3xl text-amber-950 font-light">{` | ${categoryName.toUpperCase()}`}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="max-w-7xl min:md md:mx-10 mx-3 xl:m-auto h-screen flex-row flex justify-start">
        <div className=" shadow-xl my-2 py-4 xl:w-[30%] md:w-[300px] sm:w-[250px] w-[200px] flex flex-col justify-between overflow-scroll ">
          {category.map((item: any) => {
            const name: string = item["name"];
            if (name === "detail") return <></>;
            return (
              <div
                className="flex flex-row items-start text-center"
                key={item["name"]}
              >
                <NavLink
                  to={`${item["name"]}`}
                  className={({ isActive }) =>
                    isActive
                      ? " text-base md:text-lg border m-1 md:m-2 py-1 md:py-2 hover:text-white hover:shadow-md bg-amber-600 shadow-2xl text-white rounded-lg px-10 w-full"
                      : " text-base md:text-lg border m-1 md:m-2 py-1 md:py-2 hover:bg-amber-400 hover:text-white hover:shadow-md bg-inherit rounded-lg px-10 w-full"
                  }
                  onClick={() => {
                    setCategoryName(name);
                  }}
                >
                  {name.toUpperCase()}
                </NavLink>
              </div>
            );
          }) ?? <></>}
        </div>
        <div className=" flex flex-wrap flex-col justify-start items-center p-1 md:p-2 m-2 shadow-xl w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
