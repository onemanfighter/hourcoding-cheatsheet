import SearchComponent from "../../components/SearchComponent";
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
import AccordionProvider from "../../components/AccordianProvider";

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
    <div className="lg:m-auto lg:my-10 mx-10 my-10 flex-grow max-w-5xl ">
      <div className="flex flex-col justify-center items-center w-full my-4 bg-search-background bg-fixed">
        <div>
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl font-bold text-center my-4">
              {MainScreenHeader}
            </h1>
            <h2 className="text-xl text-center m-2">{MainScreenSubHeader}</h2>
            <h2 className="text-center my-2 rounded-md">
              {MainScreenDescriptionText}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-full"></div>
        </div>
        <div className="items-center justify-between w-full">
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
      <AccordionProvider headingText={ListOfLatestCheatsheetsHeader}>
        <div className="grid grid-cols-2 justify-center items-center w-full bg-accordion-background bg-fixed">
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
