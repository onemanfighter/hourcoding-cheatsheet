export interface IErrorScreenProps {}

export default function ErrorScreen(props: IErrorScreenProps) {
  return (
    <div className="w-full flex flex-row items-center justify-center my-32 ">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-9xl font-bold text-amber-600">404</div>
        <div className="text-4xl font-bold text-amber-600">Page not found</div>
        <div className="text-2xl font-bold text-amber-600">
          The page you are looking for does not exist.
        </div>
      </div>
    </div>
  );
}
