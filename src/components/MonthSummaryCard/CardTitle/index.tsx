import { Box, Typography } from "@mui/material";
import StatusCard from "../StatusCard";

interface TitleProps {
  numerator?: string;
  denominator?: string;
  showStatus?: boolean;
}

export const CardTitle = ({
  numerator,
  denominator,
  showStatus,
}: TitleProps) => (
  <>
    {showStatus ? <StatusCard /> : <div />}
    <Box
      alignItems="flex-end"
      display="flex"
      flexDirection="row"
      justifyContent="initial"
    >
      <Typography
        component="p"
        sx={{
          fontFamily: "var(--font-public-sans)",
          fontSize: "var(--font-size-xxl)",
          fontWeight: 700,
        }}
      >
        {numerator}
      </Typography>
      <Typography
        component="p"
        sx={{
          color: "var(--text_gray_secundary)",
          fontFamily: "var(--font-public-sans)",
          fontSize: "var(--font-size-md)",
          textAlign: "initial",
        }}
      >
        {denominator ? ` ${denominator}` : ""}
      </Typography>
    </Box>
  </>
);
