import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import { fetchData } from "./json_reader/JsonReader";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

function App() {
  const [dataState, setDataState] = useState<any>();
  useEffect(() => {
    const data = fetchData();
    data.then((res) => {
      setDataState(res);
    });
  }, []);
  return (
    <DataContext.Provider value={dataState}>
      <div className="">
        <div className="">
          <NavComponent />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <FooterComponent />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
