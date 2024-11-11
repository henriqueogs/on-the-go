import { Box, MobileStepper } from "@mui/material";

interface CardFooterProgressProps {
  type?: "progress" | "text" | "dots" | undefined;
  activeStep?: number;
}

export const CardFooterProgress = ({
  type,
  activeStep,
}: CardFooterProgressProps) => {
  return type ? (
    <Box
      sx={{
        alignItems: "end",
        justifyContent: "flex-end",
        padding: "3rem 0 0rem 0rem",
      }}
    >
      <MobileStepper
        variant={type}
        steps={5}
        activeStep={activeStep || -1}
        position="static"
        sx={{
          backgroundColor: "unset",
          padding: "0",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "transparent",
            border: "1px solid var(--white)",
            cursor: "pointer",
            height: "12px",
            marginRight: "0.25rem",
            width: "12px",
          },
          "& .MuiMobileStepper-progress": {
            backgroundColor: "transparent",
            border: "1px solid var(--white)",
            borderRadius: "1rem",
            cursor: "pointer",
            height: "12px",
            marginRight: "0.25rem",
            width: "100%",
            color: "var(--white)",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "var(--white)",
          },
          "& .MuiLinearProgress-bar": {
            backgroundColor: "var(--white)",
          },
        }}
        backButton={<></>}
        nextButton={<></>}
      />
    </Box>
  ) : (
    <></>
  );
};
