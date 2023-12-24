import { useContext } from "react";
import { useParams } from "react-router-dom";
import { OverApiContext } from "../../../contextProvider/Context";
import CheatsheetCard from "../../../components/Card/CardComponent";

/**
 * Proptypes for the Subcomponent Official CheatSheet component.
 */
export interface ISubComponentOfficialCheatsheetProps {}

/**
 * Functional component for the subcategory.
 *
 * @param props Proptypes for the SubCategory component.
 * @returns Subcategory content
 */
export default function SubComponentOfficialCheatsheet(
  props: ISubComponentOfficialCheatsheetProps
) {
  const data = useContext(OverApiContext);
  const categories = data != null ? data["children"] : [];
  const { docId } = useParams();
  console.log(docId, categories);

  // if no data is present, return empty fragment.
  if (categories.length === 0) return <></>;

  const categoryData = categories.filter((item: any) => {
    return item["name"] === docId;
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