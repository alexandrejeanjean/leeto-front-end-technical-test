import type { Meta, StoryObj } from "@storybook/react";
import { CardLabel } from "../../../GiftCard/index";

const meta: Meta<typeof CardLabel> = {
  component: CardLabel,
};

export default meta;
type Story = StoryObj<typeof CardLabel>;

const CardLabelComponent = () => (
  <CardLabel>Se clôture dans 3 semaines</CardLabel>
);

export const Component: Story = {
  render: () => <CardLabelComponent />,
};
