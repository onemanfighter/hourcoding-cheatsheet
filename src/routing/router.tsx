import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import MainScreen from "../screen/mainscreen/MainScreen";
import { Category, Details } from "@mui/icons-material";
import CategoryScreen from "../screen/categoryscreen/CategoryScreen";

/**
 * The router for the application.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainScreen />} />
      <Route path="categories" element={<CategoryScreen />}>
        <Route path=":category" element={<Details />} />
      </Route>
      <Route path="contact" element={<MainScreen />} />
      <Route path="about" element={<MainScreen />} />
    </Route>
  )
);

export default router;
