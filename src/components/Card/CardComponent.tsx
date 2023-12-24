import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
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
  const handler = () => {};
  return (
    <Card
      sx={{
        maxWidth: 200,
        minWidth: 200,
        m: 1,
        background: "linear-gradient(to bottom, #f7dc6f, rgba(0,0,0,0) 200px)",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={props.image} title={props.title} />
      <CardContent>
        <Tooltip
          title={props.title.toUpperCase()}
          color="primary"
          placement="top"
          TransitionComponent={Zoom}
          followCursor
          arrow
        >
          <div className=" text-start font-bold text-lg overflow-hidden truncate w-full hover:rounded-md hover:capitalize cursor-pointer">
            {props.title}
          </div>
        </Tooltip>

        <Typography variant="body2" color="text.secondary" sx={{ maxLines: 2 }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="flex flex-rowm justify-between w-full">
          <Button size="small" onClick={handler} variant="contained">
            <DocumentScannerOutlined />
          </Button>
          <Button size="small" onClick={handler} variant="contained">
            <NavLink
              to={`../../details/${props.to}`}
              className="hover:text-amber-800"
            >
              cheatsheet
            </NavLink>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
