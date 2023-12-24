import { useEffect, useState } from "react";
import {
  fetchData,
  fetchMainFileData,
  fetchOverApiData,
  fetchRecentFileData,
} from "../json_reader/JsonReader";
import {
  DataContext,
  MainDataFileContext,
  OverApiContext,
  RecentFileContext,
} from "./Context";

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
  const [mainDataFileState, setMainDataFileState] = useState<any>();
  const [recentFileState, setRecentFileState] = useState<any>();
  const [overApiDataState, setOverApiDataState] = useState<any>();

  // Fetch data from file structure json.
  useEffect(() => {
    fetchData().then((res) => {
      setDataState(res);
    });
  }, [dataState]);

  // Fetch data from file data json.
  useEffect(() => {
    fetchMainFileData().then((res) => {
      setMainDataFileState(
        res.sort((a, b) => a["name"].localeCompare(b["name"]))
      );
    });
  }, [mainDataFileState]);

  // Fetch data from recent file json.
  useEffect(() => {
    fetchRecentFileData().then((res) => {
      setRecentFileState(res);
    });
  }, [recentFileState]);

  // Fetch data from overapi json.
  useEffect(() => {
    fetchOverApiData().then((res) => {
      setOverApiDataState(res);
    });
  }, [overApiDataState]);

  return (
    <DataContext.Provider value={dataState}>
      <RecentFileContext.Provider value={recentFileState}>
        <OverApiContext.Provider value={overApiDataState}>
          <MainDataFileContext.Provider value={mainDataFileState}>
            {props.children}
          </MainDataFileContext.Provider>
        </OverApiContext.Provider>
      </RecentFileContext.Provider>
    </DataContext.Provider>
  );
}
