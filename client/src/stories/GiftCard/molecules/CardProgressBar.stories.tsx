import type { Meta, StoryObj } from "@storybook/react";
import { CardLabel, CardProgressBar } from "../../../GiftCard/index";

const SampleCardInfos = {
  allowedAmount: 100,
  consumedAmount: 50,
};

const meta: Meta<typeof CardProgressBar> = {
  component: CardProgressBar,
};

export default meta;
type Story = StoryObj<typeof CardProgressBar>;

const CardProgressBarComponent = () => (
  <CardProgressBar value={SampleCardInfos.consumedAmount}>
    <CardLabel>
      {SampleCardInfos.consumedAmount}€ dépensés /{" "}
      {SampleCardInfos.allowedAmount}€
    </CardLabel>
  </CardProgressBar>
);

export const Component: Story = {
  render: () => <CardProgressBarComponent />,
};
