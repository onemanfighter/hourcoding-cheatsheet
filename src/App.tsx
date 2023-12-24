import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/Navigation/NavComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import DataContextProvider from "./contextProvider/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
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
    </DataContextProvider>
  );
}

export default App;
