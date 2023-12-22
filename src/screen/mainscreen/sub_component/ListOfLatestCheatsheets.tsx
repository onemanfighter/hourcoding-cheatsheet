import { useContext, useState } from "react";
import { RecentFileContext } from "../../../contextProvider/Context";
import { NavLink } from "react-router-dom";
import { on } from "events";
import { removeExtenstionFromString } from "../../../utils/HelperFunction";

/**
 * Functional component for the list of latest cheatsheets.
 *
 * @returns List of latest cheatsheets.
 */
export default function ListOfLatestCheatsheets() {
  const data = useContext(RecentFileContext);
  const cheatsheets = data != null ? data : [];

  if (cheatsheets.length === 0) return <></>;

  return (
    <>
      {cheatsheets.map((item: any) => {
        const name: string = item["name"];
        const title: string = item["metadata"]["title"];
        return <Component name={name} title={title} />;
      }) ?? <></>}
    </>
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
      className=" m-2 py-2 px-4 border border-amber-800 bg-slate-200 opacity-80 overflow-hidden truncate flex flex-row justify-start hover:bg-amber-300 hover:text-white rounded-md hover:scale-x-105 transition-transform"
      onMouseEnter={() => {
        setFocusState(true);
      }}
      onMouseLeave={() => {
        setFocusState(false);
      }}
    >
      {props.name.toUpperCase()}
      {focusState && (
        <div className="text-md font-light mx-2 text-green-500">
          {props.title}
        </div>
      )}
    </NavLink>
  );
}
