import * as React from "react";
import SearchComponent from "../../components/SearchComponent";

export interface IMainScreenProps {}

export default function MainScreen(props: IMainScreenProps) {
  return (
    <div className="lg:m-auto lg:my-10 mx-10 my-10 flex-grow max-w-5xl">
      <div className="  items-center justify-between w-full">
        <SearchComponent />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
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
    </div>
  );
}
