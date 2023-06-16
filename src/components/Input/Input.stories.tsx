import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { SimpleLoader } from "../Loader";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args: any) => <Input {...args} />;
Primary.args = {
  $variant: "primary",
  $placeholder: "hello",
  width: 200,
  $error: "test error",
};
export const WithPrefix: Story = (args: any) => <Input {...args} />;
WithPrefix.args = {
  $variant: "danger",
  $placeholder: "hello",
  width: 200,
  $suffix: "@gmail",
  $suffixProps: {
    padding: "0 5px",
    fontSize: 10,
  },
};
export const WithLoading: Story = (args: any) => <Input {...args} />;
WithLoading.args = {
  $variant: "danger",
  $placeholder: "hello",
  width: 200,
  $fill: true,
  $suffixProps: {
    padding: "0 5px",
    fontSize: 10,
  },
  $suffix: <SimpleLoader $variant="danger" />,
};
