import { useContext, useState } from "react";
import { MainDataFileContext } from "../../../contextProvider/Context";
import { NavLink } from "react-router-dom";

/**
 * Functional component for the list of cheatsheets.
 *
 * @returns List of cheatsheets.
 */
export default function ListOfCheatsheets() {
  const data = useContext(MainDataFileContext);
  const cheatsheets = data != null ? data : [];
  let character = "";

  if (cheatsheets.length === 0) return <></>;

  return (
    <div className="m-auto grid xl:grid-cols-3 grid-cols-2 justify-center items-center w-full">
      {cheatsheets.map((item: any) => {
        const name: string = item["name"];
        const title: string = item["metadata"]["title"];
        const isNew: boolean = name[0].startsWith(character);
        character = name[0];
        return (
          <>
            {!isNew && (
              <div className=" relative xl:col-span-3 col-span-2 font-light mx-2 text-lg w-full text-start self-center py-4">
                {character === "2"
                  ? "Official docs cheatsheets"
                  : character.toUpperCase()}
                <hr className=" bg-amber-600 bg-transparent outline" />
              </div>
            )}
            <Component name={name} title={title} />
          </>
        );
      }) ?? <></>}
    </div>
  );
}

interface IComponentProps {
  name: string;
  title: string;
}

function Component(props: IComponentProps) {
  const [focusState, setFocusState] = useState<boolean>(false);
  return (
    <NavLink
      to={`details/${props.name}`}
      key={props.name}
      onMouseEnter={() => {
        setFocusState(true);
      }}
      onMouseLeave={() => {
        setFocusState(false);
      }}
      className=" m-2 py-2 px-4 shadow-lg overflow-hidden truncate flex flex-row justify-start bg-amber-200 hover:bg-amber-400 text-amber-600 hover:text-amber-100 hover:scale-x-105 rounded-md transition-all"
    >
      {processDateFromName(props.name)}
      {focusState && (
        <div className="text-md font-light mx-2 text-green-500">
          {props.title}
        </div>
      )}
    </NavLink>
  );
}

function processDateFromName(name: string) {
  return (
    name.match(/\d{4}-\d{2}-\d{2}/g) ? name.slice(11) : name
  ).toUpperCase();
}
