"use client";

import MonthSummaryCard, {
  MonthSummaryCardInfoProps,
} from "@/components/MonthSummaryCard";
import { Box, Container, Grid2 } from "@mui/material";
import { SummaryContainer, SummaryText, SummaryTitle } from "./summaryStyles";
import NewReportsCard from "@/components/NewReportsCard/NewReportsCard";

const MonthSummaryCardInfo: MonthSummaryCardInfoProps[] = [
  {
    numerator: "0",
    denominator: "/5",
    description: "PESQUISAS EM CAMPO",
    showStatus: true,
    typeFooter: "dots",
  },
  {
    numerator: "300",
    description: "PESQUISAS EM ROTEIRIZAÇÃO",
    showStatus: false,
  },
  {
    numerator: "2.000",
    denominator: "/10.000",
    description: "DISPAROS FEITOS",
    showStatus: false,
    typeFooter: "progress",
    activeStep: 1,
  },
];

export default function Summary() {
  return (
    <Box
      sx={{
        bgcolor: "var(--foreground)",
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          bgcolor: "var(--foreground)",
          pb: 6,
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <SummaryContainer>
              <SummaryText>RESUMO MENSAL</SummaryText>
              <SummaryTitle>JANEIRO, 2023</SummaryTitle>
            </SummaryContainer>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 6, md: 3 }}>
                <MonthSummaryCard.Container>
                  <MonthSummaryCard.Title
                    numerator={MonthSummaryCardInfo[0].numerator}
                    denominator={MonthSummaryCardInfo[0].denominator}
                    showStatus={MonthSummaryCardInfo[0].showStatus}
                  />
                  <MonthSummaryCard.Description
                    description={MonthSummaryCardInfo[0].description}
                  />
                  <MonthSummaryCard.Footer
                    type={MonthSummaryCardInfo[0].typeFooter}
                  />
                </MonthSummaryCard.Container>
              </Grid2>
              <Grid2 size={{ xs: 6, md: 3 }}>
                <MonthSummaryCard.Container>
                  <MonthSummaryCard.Title
                    numerator={MonthSummaryCardInfo[1].numerator}
                    denominator={MonthSummaryCardInfo[1].denominator}
                  />
                  <MonthSummaryCard.Description
                    description={MonthSummaryCardInfo[1].description}
                  />
                  <MonthSummaryCard.Footer />
                </MonthSummaryCard.Container>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <MonthSummaryCard.Container>
                  <MonthSummaryCard.Title
                    numerator={MonthSummaryCardInfo[2].numerator}
                    denominator={MonthSummaryCardInfo[2].denominator}
                  />
                  <MonthSummaryCard.Description
                    description={MonthSummaryCardInfo[2].description}
                  />
                  <MonthSummaryCard.Footer
                    type={MonthSummaryCardInfo[2].typeFooter}
                    activeStep={MonthSummaryCardInfo[2].activeStep}
                  />
                </MonthSummaryCard.Container>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <NewReportsCard />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
