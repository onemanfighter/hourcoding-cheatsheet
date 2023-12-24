import { NavLink } from "react-router-dom";
import { imageData } from "../../static/image/MostPopularImageData";

/**
 * Proptypes for the default official documentation cheetsheet screen content.
 */
export interface IDefaultODCSScreenContentProps {}

/**
 * Default official documentation cheetsheet screen content.
 *
 * @param props Props for the default official documentation cheetsheet screen content.
 * @returns Default official documentation cheetsheet screen content.
 */
export default function DefaultODCSScreenContent(
  props: IDefaultODCSScreenContentProps
) {
  return (
    <div className="p-2 m-3 flex flex-wrap justify-center w-full h-full items-center overflow-scroll">
      <div className="md:text-xl lg:text-2xl text-lg font-bold">
        Most popular cheatsheets
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-2 items-center py-10">
        {imageData.map((image, index) => (
          <NavLink
            key={index}
            to={`../../details/${image.toPath}`}
            className="flex flex-col items-center justify-center text-center hover:text-amber-800 shadow-2xl rounded-3xl hover:scale-110 transform transition-all duration-300 ease-in-out"
          >
            <div className="text-sm font-thin mt-2 items-center p-2 justify-center flex flex-col snap-center">
              <img
                alt={image.name}
                src={image.imagePath}
                className="md:w-24 md:h-24 h-12 w-12"
                loading="lazy"
              />
            </div>
            <div className="md:text-md text-sm font-thin mx-2 mb-2">
              {image.name.toUpperCase()}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
