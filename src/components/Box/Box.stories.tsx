import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = (args: any) => <Box {...args} />;
Primary.args = {
  width: 200,
  height: 200,
};
export const Clickable: Story = (args: any) => <Box {...args} />;
Clickable.args = {
  width: 200,
  height: 200,
  $clickable: true,
  $shape: "circle",
};
