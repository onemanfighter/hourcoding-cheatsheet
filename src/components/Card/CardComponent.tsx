import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { DocumentScannerOutlined } from "@mui/icons-material";
import { Tooltip, Zoom } from "@mui/material";

/**
 * Proptypes for Cheatsheet card.
 */
export interface ICheatsheetCardProps {
  title: string;
  description: string;
  image: string;
  to: string;
}

/**
 * Functional component for the cheatsheet card.
 *
 * @param props Props for the cheatsheet card.
 * @returns Cheatsheet card.
 */
export default function CheatsheetCard(props: ICheatsheetCardProps) {
  const navigate = useNavigate();
  const handler = () => {};
  const cheatsheetHandler = () => {
    navigate(`/details/${props.to}`);
  };
  return (
    <Card
      sx={{
        width: { xs: 80, sm: 100, md: 150, lg: 200 },
        height: { xs: 120, sm: 135, md: 175, lg: 230 },
        m: { xs: 0.8, sm: 0.9, md: 1.2, lg: 2 },
        p: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom, #f7dc6f, rgba(0,0,0,0) 200px)",
      }}
    >
      <div className="sm:p-1 md:p-2 w-50 h-50 lg:p-4 flex justify-center">
        <img
          className="rounded-none md:rounded-md h-4 sm:h-5 md:h-10 lg:h-14 xl:20 bg-center filter drop-shadow-md object-contain"
          src={
            props.image !== ""
              ? props.image
              : require("../../assets/image/placeholder.png")
          }
          alt={props.title}
          loading="lazy"
        />
      </div>
      <Tooltip title={props.title} TransitionComponent={Zoom} followCursor>
        <div className="flex flex-col justify-between items-center mx-1 xl:p-1 w-full">
          <div className=" text-center md:text-start font-medium text-xs sm:text-sm md:text-md xl:text-base md:overflow-hidden truncate w-full hover:rounded-md marker:capitalize cursor-pointer">
            {props.title}
          </div>
          <div className=" text-center md:text-start font-light text-xs sm:text-sm md:text-md xl:text-base md:overflow-hidden truncate w-full hover:rounded-md capitalize cursor-pointer">
            {props.description}
          </div>
        </div>
      </Tooltip>
      <div className="flex flex-col lg:flex-row justify-evenly w-full">
        <Tooltip title={"Show preview"} TransitionComponent={Zoom} arrow>
          <button
            onClick={handler}
            className="bg-blue-700 m-0.5 hover:bg-purple-600 lg:p-1 lg:h-8 h-6 xl:h-10 xl:px-3 shadow-xl rounded-md hover:scale-105"
          >
            <DocumentScannerOutlined
              sx={{ width: { xs: 14, md: 20, xl: 30 }, color: "#fff" }}
            />
          </button>
        </Tooltip>
        <button
          onClick={cheatsheetHandler}
          className="text-xs md:text-base m-0.5 xl:text-md h-6 lg:h-8 xl:h-10 bg-blue-700 hover:bg-purple-600 p-0 lg:px-2 lg:py-1 shadow-xl rounded-md text-white hover:scale-105"
        >
          Cheatsheet
        </button>
      </div>
    </Card>
  );
}
