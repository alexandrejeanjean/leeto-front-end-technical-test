import type { Meta, StoryObj } from "@storybook/react";
import { CardName } from "../../../GiftCard/index";

const meta: Meta<typeof CardName> = {
  component: CardName,
};

export default meta;
type Story = StoryObj<typeof CardName>;

const CardLabelComponent = () => (
  <CardName>Carte cadeau rentrée scolaire</CardName>
);

export const Component: Story = {
  render: () => <CardLabelComponent />,
};
