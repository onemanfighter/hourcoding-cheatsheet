import { Button } from "@mui/material";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";
import { fetchData } from "../../json_reader/JsonReader";

export interface IDetailsScreenProps {
  path: string;
}

export default function DetailsScreen(props: IDetailsScreenProps) {
  const [state, setState] = useState<string>("");

  const handleClick = () => {
    fetchData();
    const readmePath = require(props.path);
    fetch(readmePath)
      .then((res) => {
        return res.text();
      })
      .then((res: string) => {
        console.log(res);
        setState(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div data-color-mode="light">
        <Button onClick={handleClick}>Click</Button>
        <MarkdownPreview source={state} />
      </div>
    </div>
  );
}
