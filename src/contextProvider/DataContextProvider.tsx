import { useEffect, useState } from "react";
import {
  fetchData,
  fetchFileData,
  fetchRecentFileData,
} from "../json_reader/JsonReader";
import { DataContext, DataFileContext, RecentFileContext } from "./Context";

/**
 * Proptypes for the data context provider.
 */
export interface IDataContextProviderProps {
  children: any;
}

/**
 * This is the context provider for the all json.
 *
 * @param props Props for the data context provider.
 * @returns Data context provider.
 */
export default function DataContextProvider(props: IDataContextProviderProps) {
  const [dataState, setDataState] = useState<any>();
  const [dataFileState, setDataFileState] = useState<any>();
  const [recentFileState, setRecentFileState] = useState<any>();

  // Fetch data from file structure json.
  useEffect(() => {
    fetchData().then((res) => {
      setDataState(res);
    });
  }, [dataState]);

  // Fetch data from file data json.
  useEffect(() => {
    fetchFileData().then((res) => {
      setDataFileState(res.sort((a, b) => a["name"].localeCompare(b["name"])));
    });
  }, [dataFileState]);

  // Fetch data from recent file json.
  useEffect(() => {
    fetchRecentFileData().then((res) => {
      setRecentFileState(res);
    });
  }, [recentFileState]);

  return (
    <DataContext.Provider value={dataState}>
      <DataFileContext.Provider value={dataFileState}>
        <RecentFileContext.Provider value={recentFileState}>
          {props.children}
        </RecentFileContext.Provider>
      </DataFileContext.Provider>
    </DataContext.Provider>
  );
}
