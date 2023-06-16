import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: any) => <Button {...args} />;
Primary.args = {
  $variant: "primary",
  children: "test",
  $size: "default",
  $fill: true,
};

export const Block: Story = (args: any) => <Button {...args} />;
Block.args = {
  $variant: "secondary",
  children: "test",
  $block: true,
  $size: "large",
};

export const Loading: Story = (args: any) => <Button {...args} />;
Loading.args = {
  $variant: "danger",
  $loading: true,
  children: "test",
};

export const Link: Story = (args: any) => <Button {...args} />;
Link.args = {
  $variant: "primary",
  $size: "large",
  children: "test",
  $link: true,
  $withShadow: false,
};
