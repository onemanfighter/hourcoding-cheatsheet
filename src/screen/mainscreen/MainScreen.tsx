import SearchComponent from "../../components/Search/SearchComponent";
import {
  ListOfCategoriesHeader,
  ListOfCheatsheetsHeader,
  ListOfLatestCheatsheetsHeader,
  MainScreenDescriptionText,
  MainScreenHeader,
  MainScreenSubHeader,
} from "./string/MainScreenStrings";
import ListOfCategories from "./sub_component/ListOfCategories";
import ListOfCheatsheets from "./sub_component/ListOfCheatsheets";
import ListOfLatestCheatsheets from "./sub_component/ListOfLatestCheatsheets";
import AccordionProvider from "../../components/Accordian/AccordianProvider";

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
    <div className="xl:m-auto mx-10 my-10 max-w-7xl ">
      <div className="flex flex-col justify-center items-center w-full my-4 bg-search-background bg-fixed">
        <div>
          <div className="flex flex-col justify-center items-center w-full">
            <img
              src={require("../../assets/image/LogoNoBackground.png")}
              alt="Main logo"
              className=" h-16 mt-2 md:h-24"
            />
            <h1 className="md:text-3xl text-xl font-bold text-center my-4">
              {MainScreenHeader}
            </h1>
            <h2 className="md:text-xl text-md text-center m-2">
              {MainScreenSubHeader}
            </h2>
            <h2 className="text-center my-2 rounded-md hidden xl:block">
              {MainScreenDescriptionText}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-full"></div>
        </div>
        <div className="items-center justify-between mx-10 ">
          <SearchComponent />
        </div>
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
      <AccordionProvider headingText={ListOfCategoriesHeader}>
        <div className="flex flex-wrap justify-center items-center w-full bg-accordion-background bg-fixed">
          <ListOfCategories />
        </div>
      </AccordionProvider>
      <AccordionProvider
        headingText={ListOfLatestCheatsheetsHeader}
        showBadge={true}
      >
        <div className="grid grid-cols-2 xl:grid-cols-3 justify-center items-center w-full bg-accordion-background bg-fixed">
          <ListOfLatestCheatsheets />
        </div>
      </AccordionProvider>
      <div className="flex flex-col justify-center m-4 w-full">
        <h1 className="text-2xl font-bold">{ListOfCheatsheetsHeader}</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <ListOfCheatsheets />
      </div>
    </div>
  );
}
