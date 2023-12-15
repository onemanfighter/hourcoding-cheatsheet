import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
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
  );
}

export default App;
