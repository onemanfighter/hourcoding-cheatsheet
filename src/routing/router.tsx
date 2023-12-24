import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import { lazy } from "react";
import LazyLoaderComponent from "../components/LazyLoader/LazyLoaderProvider";

const App = lazy(() => import("../App"));
const MainScreen = lazy(() => import("../screen/mainscreen/MainScreen"));
const CategoryScreen = lazy(
  () => import("../screen/categoryscreen/CategoryScreen")
);
const DefaultCategoryContent = lazy(
  () => import("../screen/categoryscreen/DefaultCategoryContent")
);
const SubCategory = lazy(
  () => import("../screen/categoryscreen/subcategory/SubCategory")
);
const OfficialDocCheatsheetScreen = lazy(
  () => import("../screen/OfficialCheatsheetScreen/OfficialCheatSheetScreen")
);
const DefaultODCSScreenContent = lazy(
  () => import("../screen/OfficialCheatsheetScreen/DefaultODCSScreenContent")
);
const SubComponentOfficialCheatsheet = lazy(
  () => import("../screen/OfficialCheatsheetScreen/subcomponent/SubComponent")
);

const DetailsScreen = lazy(
  () => import("../screen/detailscreen/DetailsScreen")
);
const Contact = lazy(() => import("../screen/staticscreen/Contact"));
const AboutScreen = lazy(() => import("../screen/staticscreen/About"));
const PrivacyScreen = lazy(() => import("../screen/staticscreen/Privacy"));
const TermsAndConditionScreen = lazy(
  () => import("../screen/staticscreen/Terms")
);

/**
 * The router definition for the application.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<LazyLoaderComponent children={<App />} />}>
      <Route
        path=""
        element={<LazyLoaderComponent children={<MainScreen />} />}
      />
      <Route
        path="categories"
        element={<LazyLoaderComponent children={<CategoryScreen />} />}
      >
        <Route
          path=""
          element={
            <LazyLoaderComponent children={<DefaultCategoryContent />} />
          }
        />
        <Route
          path=":category"
          element={<LazyLoaderComponent children={<SubCategory />} />}
        />
      </Route>
      <Route
        path="csofficialdoc"
        element={
          <LazyLoaderComponent children={<OfficialDocCheatsheetScreen />} />
        }
      >
        <Route
          path=""
          element={
            <LazyLoaderComponent children={<DefaultODCSScreenContent />} />
          }
        />
        <Route
          path=":docId"
          element={
            <LazyLoaderComponent
              children={<SubComponentOfficialCheatsheet />}
            />
          }
        />
      </Route>
      <Route
        path="details"
        element={<LazyLoaderComponent children={<DetailsScreen />} />}
      >
        <Route
          path=":detailId"
          element={<LazyLoaderComponent children={<DetailsScreen />} />}
        />
      </Route>
      <Route
        path="contact"
        element={<LazyLoaderComponent children={<Contact />} />}
      />
      <Route
        path="about"
        element={<LazyLoaderComponent children={<AboutScreen />} />}
      />
      <Route
        path="privacy"
        element={<LazyLoaderComponent children={<PrivacyScreen />} />}
      />
      <Route
        path="terms"
        element={<LazyLoaderComponent children={<TermsAndConditionScreen />} />}
      />
    </Route>
  )
);

export default router;
