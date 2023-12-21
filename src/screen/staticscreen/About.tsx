import DetailsScreen from "../detailscreen/DetailsScreen";

export interface IAboutScreenProps {}

export default function AboutScreen(props: IAboutScreenProps) {
  return (
    <div>
      <DetailsScreen path={`../../data/md/analytics/analytics.js.md`} />
    </div>
  );
}
