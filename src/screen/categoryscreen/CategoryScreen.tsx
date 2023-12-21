import { useContext } from "react";
import { DataContext } from "../../App";
import { NavLink, Outlet } from "react-router-dom";
import BackButton from "../../components/BackButtonComponent";

export interface ICategoryScreenProps {}

export default function CategoryScreen(props: ICategoryScreenProps) {
  const data = useContext(DataContext);
  const category = data != null ? data["children"] : [];

  return (
    <div className="">
      <div className="max-w-6xl min:md xl:mx-auto xl:my-4 mx-10 p-5 mt-10 flex items-start justify-start shadow-md my-6">
        <BackButton />
        <div className=" flex-row items-center "></div>
        <div className=" text-3xl mx-3 text-amber-950">
          <NavLink to="">Categories</NavLink>
        </div>
      </div>
      <div className="max-w-6xl min:md xl:m-auto w-[30%] mx-10 flex flex-wrap justify-center items-start overflow-scroll ">
        {category.map((item: any) => {
          const name: string = item["name"];
          return (
            <div className="m-4 w-[150px]" key={item["name"]}>
              <NavLink
                to={`${item["name"]}`}
                className={({ isActive }) =>
                  isActive
                    ? " text-lg border m-8 p-2 hover:text-white hover:shadow-md bg-amber-700 text-white rounded-lg px-10"
                    : " text-lg border m-8 p-2 hover:bg-amber-500 hover:text-white hover:shadow-md bg-inherit rounded-lg px-10"
                }
              >
                {name.toUpperCase()}
              </NavLink>
            </div>
          );
        }) ?? <></>}
      </div>
      <div className=" flex">
        <Outlet />
      </div>
    </div>
  );
}
