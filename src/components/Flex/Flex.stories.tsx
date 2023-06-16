import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = (args: any) => <Flex {...args} />;
Primary.args = {
  width: 200,
  height: 200,
};
export const Clickable: Story = (args: any) => <Flex {...args} />;
Clickable.args = {
  width: 200,
  height: 200,
  $clickable: true,
  $shape: "circle",
};
