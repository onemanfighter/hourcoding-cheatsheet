import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DataContext } from "../../../contextProvider/Context";
import CheatsheetCard from "../../../components/Card/CardComponent";

/**
 * Proptypes for the SubCategory component.
 */
export interface ISubCategoryProps {}

/**
 * Functional component for the subcategory.
 *
 * @param props Proptypes for the SubCategory component.
 * @returns Subcategory content
 */
export default function SubCategory(props: ISubCategoryProps) {
  const data = useContext(DataContext);
  const categories = data != null ? data["children"] : [];
  const { category } = useParams();

  // if no data is present, return empty fragment.
  if (categories.length === 0) return <></>;

  const categoryData = categories.filter((item: any) => {
    return item["name"] === category;
  });
  if (categoryData.length === 0) return <Navigate to="404" />;

  const categoryChild: Array<any> = categoryData[0]["children"];
  return (
    <div className="p-2 m-3 flex flex-wrap justify-evenly items-baseline overflow-scroll">
      {categoryChild.map((child, index) => {
        const name: string = child["title"];
        const toLocation: string = child["name"];
        const image: string = child["image"];

        return (
          <CheatsheetCard
            title={name}
            description={toLocation}
            image={image}
            to={toLocation}
            key={index}
          />
        );
      })}
    </div>
  );
}
