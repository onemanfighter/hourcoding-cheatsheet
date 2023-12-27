import {
  Alert,
  Autocomplete,
  ListItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { MainDataFileContext } from "../../contextProvider/Context";
import {
  SearchButtonText,
  SearchPlaceholderText,
} from "../string/ComponentStrings";
import { useNavigate } from "react-router-dom";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search === "") {
      setSnackbarOpen(true);
    } else {
      navigate(`/details/${getSearchTo()}`);
    }
  };

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
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please enter the name of the cheatsheet.
        </Alert>
      </Snackbar>
      <Stack direction="row" sx={{ alignContent: "center" }}>
        <ListItem>
          <Autocomplete
            sx={{
              width: {
                xs: 150,
                sm: 300,
                md: 450,
                lg: 600,
                xl: 700,
              },
            }}
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
          <button
            onClick={handleSearch}
            className="text-center text-md shadow-md w-full p-2 xl:m-3 m-1 bg-amber-200 hover:bg-gradient-to-r from-amber-400 to-amber-600 rounded-md"
          >
            {SearchButtonText}
          </button>
        </ListItem>
      </Stack>
    </>
  );
}
