import React, { useState } from "react";
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
  $variant: "primary",
};

const ClickableBox = () => {
  const [amount, setAmount] = useState<number>(0);
  const handleClick = () => {
    setAmount((prev) => prev + 1);
  };

  return (
    <Box>
      <Box
        $variant="primary"
        $shape="circle"
        width={200}
        height={200}
        $clickable
        onClick={handleClick}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        Click Me
      </Box>
      {amount > 0 ? (
        <Box display="inline-block">clicked {amount} :)</Box>
      ) : null}
    </Box>
  );
};

export const Clickable: Story = (args: any) => <ClickableBox {...args} />;

Clickable.args = {
  width: 200,
  height: 200,
  $clickable: true,
  $shape: "circle",
  $variant: "primary",
};
