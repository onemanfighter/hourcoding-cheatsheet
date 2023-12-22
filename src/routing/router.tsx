import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import MainScreen from "../screen/mainscreen/MainScreen";
import CategoryScreen from "../screen/categoryscreen/CategoryScreen";
import AboutScreen from "../screen/staticscreen/About";
import Contact from "../screen/staticscreen/Contact";
import SubCategory from "../screen/categoryscreen/subcategory/SubCategory";
import DetailsScreen from "../screen/detailscreen/DetailsScreen";
import DefaultCategoryContent from "../screen/categoryscreen/DefaultCategoryContent";

/**
 * The router definition for the application.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainScreen />} />
      <Route path="categories" element={<CategoryScreen />}>
        <Route path="" element={<DefaultCategoryContent />} />
        <Route path=":category" element={<SubCategory />} />
      </Route>
      <Route path="details" element={<DetailsScreen />}>
        <Route path=":detailId" element={<DetailsScreen />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<AboutScreen />} />
    </Route>
  )
);

export default router;
