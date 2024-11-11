import { Typography } from "@mui/material";

interface DescriptionProps {
  description: string;
}

export const CardDescription = ({ description }: DescriptionProps) => (
  <Typography
    component="p"
    sx={{
      color: "var(--text_gray_secundary)",
      fontFamily: "var(--font-public-sans)",
      fontSize: "var(--font-size-sm)",
      fontWeight: 400,
      lineHeight: "1.028rem",
      marginTop: "0.5rem",
      wordBreak: "break-word",
    }}
  >
    {description}
  </Typography>
);
