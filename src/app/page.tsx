import Page from "../components/template/Page";
import Body from "./body";
import Summary from "./summary";

export default function Home() {
  return (
    <Page>
      <Summary />
      <Body />
    </Page>
  );
}
