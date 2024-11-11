import Image from "next/image";
import React from "react";
import { CadContainer, CardDescriptions, StyledButton } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

export default function NewReportsCard() {
  return (
    <CadContainer>
      <Image src="/animation.gif" width={100} height={100} alt="Animation" />
      <Box sx={{ mt: "1rem", mb: "1rem" }}>
        <CardDescriptions>Pronto para conhecer seu cliente?</CardDescriptions>
      </Box>
      <StyledButton>
        NOVA PESQUISA <AddIcon />
      </StyledButton>
    </CadContainer>
  );
}
