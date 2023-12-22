import { useContext } from "react";
import { DataContext } from "../../../contextProvider/Context";
import { NavLink } from "react-router-dom";

/**
 * Functional component for the list of categories.
 *
 * @returns List of categories.
 */
export default function ListOfCategories() {
  const data = useContext(DataContext);
  const category = data != null ? data["children"] : [];
  return (
    <>
      {category.map((item: any) => {
        const name: string = item["name"];
        return (
          <NavLink
            to={`categories/${item["name"]}`}
            key={item["name"]}
            className=" m-2 p-3 outline bg-amber-400 hover:bg-amber-500 text-white rounded-sm hover:scale-110 hover:rounded-tl-md transition-all"
          >
            {name.toUpperCase()}
          </NavLink>
        );
      }) ?? <></>}
    </>
  );
}
