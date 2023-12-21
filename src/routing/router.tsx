import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import MainScreen from "../screen/mainscreen/MainScreen";
import { Details } from "@mui/icons-material";
import CategoryScreen from "../screen/categoryscreen/CategoryScreen";
import AboutScreen from "../screen/staticscreen/About";
import Contact from "../screen/staticscreen/Contact";
import SubCategory from "../screen/categoryscreen/subcategory/SubCategory";

/**
 * The router for the application.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainScreen />} />
      <Route path="categories" element={<CategoryScreen />}>
        <Route path=":category" element={<SubCategory />} />
      </Route>
      <Route path="details" element={<Details />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<AboutScreen />} />
    </Route>
  )
);

export default router;
