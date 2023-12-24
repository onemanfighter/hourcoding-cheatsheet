import { Autocomplete, ListItem, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import NavLinkComponent from "../Navigation/NavLinkComponent";
import { MainDataFileContext } from "../../contextProvider/Context";
import {
  SearchButtonText,
  SearchPlaceholderText,
} from "../string/ComponentStrings";
export interface ISearchComponentProps {}

/**
 * Proptypes for the search component.
 */
export interface SearchProps {
  name: string;
  to: string;
}

/**
 * Functional component for the search component.
 *
 * @param props Props for the search component.
 * @returns Search component.
 */
export default function SearchComponent(props: ISearchComponentProps) {
  const data = useContext(MainDataFileContext);
  const [search, setSearch] = useState("");
  const dataFileState = data != null ? data : [];
  const searchList: Array<SearchProps> = [];
  const searchTitleList: Array<string> = [];

  dataFileState.forEach((item: any) => {
    searchList.push({ name: item["metadata"]["title"], to: item["name"] });
    searchTitleList.push(item["metadata"]["title"]);
  });

  // Function to get the search to location.
  const getSearchTo = (): string => {
    const obj = searchList.filter((item: SearchProps) => {
      return item.name === search;
    })[0];
    return obj !== undefined ? obj.to : "";
  };

  return (
    <Stack direction="row" sx={{ alignContent: "center" }}>
      <ListItem>
        <Autocomplete
          sx={{ minWidth: 300, minHeight: 20 }}
          id="free-solo-demo"
          freeSolo
          options={searchTitleList}
          onInputChange={(e, value) => setSearch(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              className="border-amber-600 md:w-52 w-40 text-base"
              label={SearchPlaceholderText}
            />
          )}
        />
      </ListItem>
      <ListItem sx={{ minWidth: 120, maxWidth: 300 }}>
        <NavLinkComponent
          to={`details/${getSearchTo()}`}
          text={SearchButtonText}
        />
      </ListItem>
    </Stack>
  );
}
