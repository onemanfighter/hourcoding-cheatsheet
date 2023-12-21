import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface IBackButtonProps {}

export default function BackButton(props: IBackButtonProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="contained"
        color="warning"
        sx={{ borderRadius: 10, alignSelf: "center" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBack />
      </Button>
    </div>
  );
}
