import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

/**
 * Proptypes for BackButton.
 */
export interface IBackButtonProps {}

/**
 * Functional component for the back button.
 *
 * @param props Props for the back button.
 * @returns Back button.
 */
export default function BackButton(props: IBackButtonProps) {
  return (
    <div className="flex items-center justify-center">
      <NavLink to="/">
        <Button
          variant="contained"
          color="warning"
          sx={{ borderRadius: 10, alignSelf: "center", height: 30 }}
        >
          <ArrowBack />
        </Button>
      </NavLink>
    </div>
  );
}
