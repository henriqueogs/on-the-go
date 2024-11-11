import { Box, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function StatusCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        color: "var(--status_active)",
        height: "1px",
      }}
    >
      <Typography>
        <FiberManualRecordIcon
          sx={{
            color: "var(--status_active)",
            fontSize: "0.5rem",
            position: "relative",
          }}
        />
      </Typography>
    </Box>
  );
}
