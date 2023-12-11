import {
  Autocomplete,
  Button,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";
export interface ISearchComponentProps {}

export default function SearchComponent(props: ISearchComponentProps) {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Stack direction="row" spacing={2}>
      <ListItem>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={["Amit"]}
          onInputChange={(e, value) => setSearch(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              className="border-amber-600 w-52"
              label="Search cheatsheet"
            />
          )}
        />
      </ListItem>
      <ListItem>
        <NavLinkComponent to={search} text="Click to search" />
      </ListItem>
    </Stack>
  );
}
