export interface IAboutScreenProps {}

/**
 * Functional component for the about screen.
 *
 * @param props Props for the about screen.
 * @returns About screen.
 */
export default function AboutScreen(props: IAboutScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">About</h1>
        <h2 className="text-xl text-center m-2">What is this?</h2>
        <h2 className="text-center my-2 shadow-inner">
          This is a website for cheatsheets.
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Why?</h1>
        <h2 className="text-xl text-center m-2">Why not?</h2>
        <h2 className="text-center my-2 shadow-inner">
          I wanted to make a website for cheatsheets.
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">How?</h1>
        <h2 className="text-xl text-center m-2">With React and Typescript.</h2>
        <h2 className="text-center my-2 shadow-inner">
          I used React and Typescript.
        </h2>
      </div>
    </div>
  );
}
