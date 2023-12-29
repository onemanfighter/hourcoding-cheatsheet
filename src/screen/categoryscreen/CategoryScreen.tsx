import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButtonComponent";
import { DataContext } from "../../contextProvider/Context";

/**
 * Proptypes for CategoryScreen.
 */
export interface ICategoryScreenProps {}

/**
 * Functional component for the category screen.
 *
 * @param props Proptypes for CategoryScreen.
 * @returns CategoryScreen content.
 */
export default function CategoryScreen(props: ICategoryScreenProps) {
  const data = useContext(DataContext);
  const [categoryName, setCategoryName] = useState<string>("");
  const category = data != null ? data["children"] : [];
  category.sort((a: any, b: any) => {
    return a["name"].localeCompare(b["name"]);
  });

  return (
    <div className="">
      <div className=" max-w-8xl min:md xl:mx-auto xl:my-4 md:mx-10 mx-3 md:p-5 p-2 lg:mt-10 md:md-5 flex items-start justify-start shadow-md my-6">
        <BackButton />
        <div className=" text-lg md:text-xl lg:text-3xl mx-3 text-amber-950">
          <NavLink to="" className="flex-row">
            Categories{" "}
          </NavLink>
        </div>
        {categoryName !== "" ? (
          <div className="text-lg md:text-xl lg:text-3xl text-amber-950 font-light">{` | ${categoryName}`}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="max-w-7xl min:md xl:m-auto md:mx-10 mx-3 h-screen flex-row flex justify-start">
        <div className=" shadow-xl my-2 py-4 xl:w-[30%] md:w-[300px] sm:w-[250px] w-[180px] flex flex-col justify-between overflow-scroll ">
          {category.map((item: any) => {
            const name: string = item["name"];
            return (
              <div
                className="flex flex-row items-start text-center"
                key={item["name"]}
              >
                <NavLink
                  to={`${item["name"]}`}
                  className={({ isActive }) =>
                    isActive
                      ? " text-sm md:text-lg border m-1 md:m-2 px-5 md:px-10 py-1 md:py-2 hover:text-white hover:shadow-md bg-amber-700 text-white rounded-lg  w-full"
                      : " text-sm md:text-lg border m-1 md:m-2 px-5 md:px-10 py-1 md:py-2 hover:bg-amber-500 hover:text-white hover:shadow-md bg-inherit rounded-lg w-full"
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
        <div className=" flex flex-wrap flex-col justify-start items-center p-2 md:p-2 m-2 shadow-xl w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
