import SearchComponent from "../../components/SearchComponent";

export interface IMainScreenProps {}

export default function MainScreen(props: IMainScreenProps) {
  return (
    <div className="lg:m-auto lg:my-10 mx-10 my-10 flex-grow max-w-5xl">
      <div className="flex flex-col justify-center items-center w-full my-4">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-5xl font-bold text-center">
            Welcome to Hourcoding.com
          </h1>
          <h2 className="text-2xl font-bold text-center">
            A place to learn and grow
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full"></div>
      </div>
      <div className="  items-center justify-between w-full">
        <SearchComponent />
      </div>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-4">
      <div className="flex flex-col justify-center m-4 w-full">
        <h1 className="text-2xl font-bold">Categories</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full">
        <ListOfCategories />
      </div>
    </div>
  );
}

function ListOfCategories() {
  return <></>;
}
