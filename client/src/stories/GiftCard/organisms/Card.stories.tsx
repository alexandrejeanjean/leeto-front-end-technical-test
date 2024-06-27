import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardLabel,
  CardProgressBar,
  CardLogo,
  CardName,
} from "../../../GiftCard/index";

const SampleCardInfos = {
  id: 1,
  name: "Carte cadeau rentrée scolaire",
  closingDate: "Se clôture dans 3 semaines",
  state: "active",
  allowedAmount: 100,
  consumedAmount: 50,
};

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

const CardComponent = () => (
  <Card>
    <div className="mb-1">
      <div className="mb-3">
        <CardLogo />
      </div>
      <CardLabel>Se clôture dans {SampleCardInfos.closingDate}</CardLabel>
      <CardName>{SampleCardInfos.name}</CardName>
    </div>
    <CardProgressBar value={SampleCardInfos.consumedAmount}>
      <CardLabel>
        {SampleCardInfos.consumedAmount}€ dépensés /
        {SampleCardInfos.allowedAmount}€
      </CardLabel>
    </CardProgressBar>
  </Card>
);

export const Component: Story = {
  render: () => <CardComponent />,
};
