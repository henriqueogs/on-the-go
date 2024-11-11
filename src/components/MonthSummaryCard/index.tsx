import { CardContainer } from "./CardContainer";
import { CardTitle } from "./CardTitle";
import { CardFooterProgress } from "./CardFooterProgress";
import { CardDescription } from "./CardDescription";

export interface MonthSummaryCardInfoProps {
  numerator?: string;
  denominator?: string;
  description: string;
  showStatus?: boolean;
  typeFooter?: "progress" | "text" | "dots" | undefined;
  activeStep?: number;
}

const MonthSummaryCard = {
  Container: CardContainer,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooterProgress,
};

export default MonthSummaryCard;
