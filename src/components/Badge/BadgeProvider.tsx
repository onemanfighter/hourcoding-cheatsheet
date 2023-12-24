import { Badge } from "@mui/material";

export interface BadgePosition {
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}

export interface IBadgeProviderProps {
  badgeContent: string;
  children: any;
  position: BadgePosition;
  badgeVariant?: "dot" | "standard";
  overlap?: "circular" | "rectangular";
}

export default function BadgeProvider(props: IBadgeProviderProps) {
  return (
    <Badge
      badgeContent={props.badgeContent}
      color="secondary"
      anchorOrigin={{
        vertical: props.position.vertical,
        horizontal: props.position.horizontal,
      }}
      variant={props.badgeVariant ?? "standard"}
      overlap={props.overlap ?? "rectangular"}
    >
      {props.children}
    </Badge>
  );
}
