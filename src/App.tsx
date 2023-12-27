import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/Navigation/NavComponent";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <div className="">
      <div className=" sticky top-0 z-50">
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
