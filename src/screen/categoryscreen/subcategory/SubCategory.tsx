import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../App";

export interface ISubCategoryProps {}

export default function SubCategory(props: ISubCategoryProps) {
  const data = useContext(DataContext);
  const categories = data != null ? data["children"] : [];
  const { category } = useParams();
  const categoryData = categories.filter((item: any) => {
    return item["name"] === category;
  });
  console.log(categoryData);

  const categoryChild: Array<any> = categoryData[0]["children"];
  return (
    <div>
      {categoryChild.map((child, index) => {
        const name: string = child["name"];

        return <div>{name}</div>;
      })}
    </div>
  );
}
