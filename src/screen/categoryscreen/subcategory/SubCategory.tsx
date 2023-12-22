import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../contextProvider/Context";
import CheatsheetCard from "../../../components/CardComponent";

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

  const categoryChild: Array<any> = categoryData[0]["children"];
  return (
    <div className="p-2 m-3 flex flex-wrap justify-around items-baseline h-screen overflow-scroll">
      {categoryChild.map((child, index) => {
        const name: string = child["title"];
        const toLocation: string = child["name"];

        return (
          <CheatsheetCard
            title={name}
            description={toLocation}
            image={name}
            to={toLocation}
            key={index}
          />
        );
      })}
    </div>
  );
}
