import { Autocomplete, ListItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import NavLinkComponent from "./NavLinkComponent";
export interface ISearchComponentProps {}

export default function SearchComponent(props: ISearchComponentProps) {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Stack direction="row" spacing={2}>
      <ListItem>
        <Autocomplete
          sx={{ minWidth: 400, minHeight: 20 }}
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
      <ListItem sx={{ minWidth: 400 }}>
        <NavLinkComponent to={search} text="Click to search" />
      </ListItem>
    </Stack>
  );
}
