import * as React from "react";
import PageLoadingComponent from "./PageLoadingComponent";

export interface ILazyLoaderComponentProps {
  children: any;
}

export default function LazyLoaderComponent(props: ILazyLoaderComponentProps) {
  return (
    <React.Suspense fallback={<PageLoadingComponent />}>
      {props.children}
    </React.Suspense>
  );
}
