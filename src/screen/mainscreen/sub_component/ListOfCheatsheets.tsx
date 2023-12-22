import { useContext } from "react";
import { DataFileContext } from "../../../contextProvider/Context";
import { NavLink } from "react-router-dom";
import { removeExtenstionFromString } from "../../../utils/HelperFunction";

/**
 * Functional component for the list of cheatsheets.
 *
 * @returns List of cheatsheets.
 */
export default function ListOfCheatsheets() {
  const data = useContext(DataFileContext);
  const cheatsheets = data != null ? data : [];
  let character = "";

  if (cheatsheets.length === 0) return <></>;
  console.log(cheatsheets);

  return (
    <div className="grid grid-cols-2 justify-center items-center w-full">
      {cheatsheets.map((item: any) => {
        const name: string = item["name"];
        const isNew: boolean = name[0].startsWith(character);
        character = name[0];
        return (
          <>
            {!isNew && (
              <div className=" relative col-span-2 font-light mx-2 text-lg w-full text-start self-center py-4">
                {character.toUpperCase()}
                <hr className=" bg-amber-600 bg-transparent outline" />
              </div>
            )}
            <NavLink
              to={`details/${item["name"]}`}
              key={item["name"]}
              className=" m-2 py-2 px-4 shadow-lg bg-amber-200 hover:bg-amber-400 text-amber-600 hover:text-amber-100 hover:scale-x-105 rounded-md transition-all"
            >
              {removeExtenstionFromString(name.toUpperCase())}
            </NavLink>
          </>
        );
      }) ?? <></>}
    </div>
  );
}
