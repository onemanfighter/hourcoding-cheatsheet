import { useContext, useState } from "react";
import { AllCheatsheetScreenHeader } from "./string/string";
import { MainDataFileContext } from "../../contextProvider/Context";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { processDateFromName } from "../../utils/HelperFunction";

/**
 * Proptypes for AllCheatsheetScreen component
 */
export interface IAllCheatsheetScreenProps {}

/**
 * Functional component for the AllCheatsheetScreen.
 *
 * @param props Properties for the AllCheatsheetScreen component
 * @returns AllCheatsheetScreen component
 */
export default function AllCheatsheetScreen(props: IAllCheatsheetScreenProps) {
  const allCheatsheets = useContext(MainDataFileContext);
  const dataFileState = allCheatsheets != null ? allCheatsheets : [];
  const [cheatsheats, setCheatsheets] = useState([...dataFileState]);

  return (
    <div>
      <div className="xl:m-auto md:mx-10 mx-5 max-w-7xl ">
        <div className="flex flex-row items-center justify-center m-5">
          <TextField
            variant="outlined"
            label="Search cheatsheets"
            placeholder="Enter cheatsheet name"
            sx={{ width: "100%", margin: "0 1rem" }}
            onChange={(t) => {
              setCheatsheets(
                dataFileState.filter((item: any) => {
                  const name: string = item["name"];
                  return name.includes(t.target.value);
                })
              );
            }}
          />
        </div>
        <Content list={cheatsheats} />
      </div>
    </div>
  );
}

function Content(props: { list: any }) {
  return (
    <div className="flex flex-col justify-start items-start m-2">
      <div className="text-2xl m-2 font-normal text-amber-600 text-start">
        {AllCheatsheetScreenHeader}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
        {props.list.map((item: any) => {
          const name: string = item["name"];
          const path: string = item["path"];
          return <Component name={name} path={path} />;
        })}
      </div>
    </div>
  );
}

function Component(props: { name: string; path: string }) {
  return (
    <NavLink
      key={props.name}
      to={`../details/${props.name}`}
      className="rounded-md p-1 mx-2 my-1 shadow-amber-300 shadow-sm hover:shadow-lg hover:bg-amber-300 h-fit"
    >
      {processDateFromName(props.name)}
    </NavLink>
  );
}
