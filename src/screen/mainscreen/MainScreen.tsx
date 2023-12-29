import SearchComponent from "../../components/Search/SearchComponent";
import {
  ListOfCheatsheetsHeader,
  ListOfLatestCheatsheetsHeader,
  ListOfProgrammingCheatsheets,
  MainScreenDescriptionText,
  MainScreenHeader,
  MainScreenSubHeader,
} from "./string/MainScreenStrings";
import AccordionProvider from "../../components/Accordian/AccordianProvider";
import { Suspense, lazy } from "react";
import ListOfLangCheatsheets from "./sub_component/ListOfLangCheatsheets";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

// Lazy loading
const ListOfCheatsheets = lazy(
  () => import("./sub_component/ListOfCheatsheets")
);
const ListOfCategories = lazy(() => import("./sub_component/ListOfCategories"));
const ListOfLatestCheatsheets = lazy(
  () => import("./sub_component/ListOfLatestCheatsheets")
);

/**
 * Properties for the MainScreen component.
 */
export interface IMainScreenProps {}

/**
 * Functional component for the MainScreen.
 *
 * @param props Properties for the MainScreen component
 * @returns MainScreen component
 */
export default function MainScreen(props: IMainScreenProps) {
  return (
    <div className="xl:m-auto md:mx-10 mx-5 max-w-7xl ">
      <div className=" xl:m-auto my-5 max-w-8xl flex flex-row justify-center items-center">
        <div className="text-lg p-2 outline mx-1 outline-cyan-600 drop-shadow-lg rounded-md">
          Categories
        </div>
        <ArrowBackIosOutlined />
        <div className="py-2 flex flex-row justify-start items-center overflow-scroll">
          <Suspense fallback={<div>Loading...</div>}>
            <ListOfCategories />
          </Suspense>
        </div>
        <ArrowForwardIosOutlined />
      </div>
      <div className="flex flex-row justify-center items-center w-full my-4 bg-search-background">
        <div>
          <div className="flex flex-col  justify-center items-center w-full">
            <img
              src={require("../../assets/image/LogoNoBackground.png")}
              alt="Main logo"
              className=" h-16 mt-2 md:h-24"
            />
            <h1 className="md:text-3xl text-md sm:text-xl font-bold text-center my-4">
              {MainScreenHeader}
            </h1>
            <h2 className="md:text-xl text-sm sm:text-md text-md text-center m-2">
              {MainScreenSubHeader}
            </h2>
            <h2 className="text-center my-2 rounded-md hidden xl:block">
              {MainScreenDescriptionText}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-full"></div>
        </div>
      </div>
      <div className="items-center justify-between mx-5 ">
        <SearchComponent />
      </div>
      <Content />
    </div>
  );
}

/**
 * Functional component for the main content of the MainScreen component.
 *
 * @returns Main content of the MainScreen component.
 */
function Content() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-4">
      <AccordionProvider
        headingText={ListOfProgrammingCheatsheets}
        showBadge={true}
        expanded={true}
      >
        <div className=" w-full bg-amber-100 rounded-md flex flex-col">
          <Suspense fallback={<div>Loading..</div>}>
            <ListOfLangCheatsheets />
          </Suspense>
        </div>
      </AccordionProvider>
      <AccordionProvider
        headingText={ListOfLatestCheatsheetsHeader}
        showBadge={true}
      >
        <div className="grid grid-cols-2 xl:grid-cols-3  rounded-md justify-center items-center w-full bg-accordion-background">
          <Suspense fallback={<div>Loading...</div>}>
            <ListOfLatestCheatsheets />
          </Suspense>
        </div>
      </AccordionProvider>
      <div className="flex flex-col justify-center m-4 w-full">
        <h1 className="md:text-2xl text-lg px-2 font-bold">
          {ListOfCheatsheetsHeader}
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ListOfCheatsheets />
        </Suspense>
      </div>
    </div>
  );
}
