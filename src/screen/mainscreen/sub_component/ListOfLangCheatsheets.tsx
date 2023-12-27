import { NavLink } from "react-router-dom";
import {
  ChildrenData,
  LangRelated,
  LangRelatedData,
} from "../../../data/static_json/LangRelated";

/**
 * Functional component for the list of latest cheatsheets.
 *
 * @returns List of latest cheatsheets.
 */
export default function ListOfLangCheatsheets() {
  const cheatsheets: LangRelated[] = LangRelatedData;

  return (
    <div className="flex flex-col justify-center items-center m-2">
      {cheatsheets.map((item: any) => {
        const name: string = item["name"];
        const children: Array<ChildrenData> = item["children"]; // Remove unused variable
        return (
          <div className="flex flex-col my-2 justify-start items-starts w-full">
            <div className="text-xl m-2 font-normal"> {name.toUpperCase()}</div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
              {" "}
              {children.map((child: ChildrenData) => {
                const name: string = child["name"];
                const path: string = child["path"];
                const icon: string = child["icon"];
                return <Component name={name} path={path} icon={icon} />;
              })}
            </div>
          </div>
        );
      })}
    </div> // Add closing tag for the div element
  );
}

interface IComponentProps {
  name: string;
  path: string;
  icon: string;
}

function Component(props: IComponentProps) {
  return (
    <NavLink
      key={props.name}
      to={`../../details/${props.path}`}
      className="flex flex-col items-center m-1 fill-transparent justify-center text-center hover:text-amber-800 rounded-3xl hover:scale-110 transform transition-all duration-300 ease-in-out"
    >
      <div className="opacity-100 text-sm font-thin items-center justify-center flex flex-col snap-center">
        <img
          alt={props.name}
          src={props.icon}
          className="md:w-24 md:h-24 h-12 w-12"
          loading="lazy"
        />
      </div>
      <div className="md:text-md text-sm font-light mb-2">
        {props.name.toUpperCase()}
      </div>
    </NavLink>
  );
}
