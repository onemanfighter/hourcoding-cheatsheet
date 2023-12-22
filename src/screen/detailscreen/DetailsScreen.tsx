import MarkdownPreview from "@uiw/react-markdown-preview";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButtonComponent";
import { DataFileContext } from "../../contextProvider/Context";
import markdownStyle from "./css/Markdown.module.css";
import { fixMdFileString } from "../../utils/HelperFunction";
import { Category } from "@mui/icons-material";

/**
 * Proptypes definition for the DetailsScreen component.
 */
export interface IDetailsScreenProps {}

/**
 * Functional component for the details screen.
 *
 * @param props Proptypes for the DetailsScreen component.
 * @returns Details screen.
 */
export default function DetailsScreen(props: IDetailsScreenProps) {
  const data = useContext(DataFileContext);
  const dataFileState = data != null ? data : [];

  const [state, setState] = useState<string>("");
  const { detailId } = useParams();
  const object = dataFileState?.filter((item) => {
    return item["name"] === detailId;
  });
  if (object.length === 0) return <></>;
  const meta = object[0]["metadata"];
  console.log(meta);

  const name = meta["title"];
  const updated = meta["updated"];
  const category = meta["category"];

  // if no data is present, return empty fragment
  showMdData(object[0]["path"], (mdData: string) => {
    setState(fixMdFileString(mdData));
  });

  return (
    <div className="max-w-6xl min:md xl:mx-auto xl:my-4 mx-10 p-5 mt-10 ">
      <div className="m-1 p-2 flex items-start">
        <BackButton />
        <div className="text-3xl mx-3 text-amber-950">
          <i className=" font-thin">{name}</i> Cheatsheet
        </div>
      </div>
      <div className=" border border-black p-3 flex items-start rounded-lg font-bold text-amber-700">
        {name && (
          <div className=" rounded-md outline-dashed p-2 mx-1 outline-amber-300">
            {`Cheatsheet name : ${name}`}
          </div>
        )}
        {updated && (
          <div className=" rounded-md outline-dashed p-2 mx-1 outline-amber-300">
            {`Last updated : ${updated}`}
          </div>
        )}
        {category && (
          <div className=" rounded-md outline-dashed p-2 mx-1 outline-amber-300">
            {`Category : ${category}`}
          </div>
        )}
      </div>
      <div data-color-mode="light">
        <MarkdownPreview className={markdownStyle.markdown} source={state} />
      </div>
    </div>
  );
}

/**
 * Function to load and show the markdown data.
 *
 * @param path Path to the markdown file.
 * @param responseHandler Response handler for the markdown data.
 */
function showMdData(path: string, responseHandler: (mdData: string) => void) {
  if (path === "") return;
  const readmePath = require(`../../${path}`);
  fetch(readmePath)
    .then((res) => {
      return res.text();
    })
    .then((res: string) => {
      responseHandler(res);
    })
    .catch((error) => console.log(error));
}
