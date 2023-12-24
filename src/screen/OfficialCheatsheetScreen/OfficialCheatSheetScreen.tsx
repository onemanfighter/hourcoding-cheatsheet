import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButtonComponent";
import { OverApiContext } from "../../contextProvider/Context";
import { Alert } from "@mui/material";

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
  const data = useContext(OverApiContext);
  const [categoryName, setCategoryName] = useState<string>("");
  const category = data != null ? data["children"] : [];
  category.sort((a: any, b: any) => {
    return a["name"].localeCompare(b["name"]);
  });

  return (
    <div className="">
      <div className=" max-w-7xl min:md xl:mx-auto xl:my-4 mx-10 p-5 mt-10 flex items-start justify-start shadow-md my-6">
        <div className=" flex-row items-center rounded text-lg font-light">
          <Alert severity="info">
            These cheatsheets are created using the official documentation of
            corresponding frameworks, languages, and libraries.
          </Alert>
        </div>
      </div>
      <div className=" max-w-7xl min:md xl:mx-auto xl:my-4 mx-10 p-5 mt-10 flex items-start justify-start shadow-md my-6">
        <BackButton />
        <div className=" text-3xl mx-3 text-amber-950">
          <NavLink to="" className="flex-row">
            Cheatsheets{" "}
          </NavLink>
        </div>
        {categoryName !== "" ? (
          <div className="text-3xl text-amber-950 font-light">{` | ${categoryName.toUpperCase()}`}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="max-w-7xl min:md xl:m-auto h-screen flex-row flex justify-start">
        <div className=" shadow-xl my-2 py-4 xl:w-[30%] md:w-[300px] sm:w-[150px] flex flex-col justify-between overflow-scroll ">
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
                      ? " text-lg border m-2 py-2 hover:text-white hover:shadow-md bg-amber-600 shadow-2xl text-white rounded-lg px-10 w-full"
                      : " text-lg border m-2 py-2 hover:bg-amber-400 hover:text-white hover:shadow-md bg-inherit rounded-lg px-10 w-full"
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
        <div className=" flex flex-wrap flex-col justify-start items-center p-2 m-2 shadow-xl w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
