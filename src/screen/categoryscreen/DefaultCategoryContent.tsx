export interface IDefaultCategoryContentProps {}

/**
 * Functional component for the default category content.
 *
 * @param props Props for the default category content.
 * @returns Default category content.
 */
export default function DefaultCategoryContent(
  props: IDefaultCategoryContentProps
) {
  return (
    <div className="p-2 m-3 flex flex-wrap justify-center w-full h-full items-center overflow-scroll">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-2xl font-bold">No category selected</h1>
        <h2 className="text-base lg:text-xl text-center">
          Please select a category from the sidebar.
        </h2>
      </div>
    </div>
  );
}
