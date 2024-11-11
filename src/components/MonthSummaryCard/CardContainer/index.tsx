import { ReactNode } from "react";
import { Card as MuiCard, CardContent } from "@mui/material";
interface ContainerProps {
  children: ReactNode;
}

export const CardContainer = ({ children }: ContainerProps) => (
  <MuiCard
    sx={{
      backgroundColor: "var(--gray_500)",
      borderRadius: "var(--border-radius)",
      boxShadow: "var(--box-shadow)",
      color: "var(--white)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "12rem",
    }}
  >
    <CardContent>{children}</CardContent>
  </MuiCard>
);
