import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Popover } from "./Popover";
import { PopoverBody, PopoverHeader } from "./PopoverStyledElement";
const PopoverElement = () => {
  const [status, setStatue] = useState<boolean>(false);
  return (
    <Popover position="right" status={status} setStatus={setStatue}>
      <Button> Clickme</Button>

      <PopoverBody style={{ width: 200, height: 200, backgroundColor: "red" }}>
        <PopoverHeader>header</PopoverHeader>
        test
      </PopoverBody>
    </Popover>
  );
};

const meta: Meta<typeof PopoverElement> = {
  component: PopoverElement,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PopoverElement>;

export const PopoverButton: Story = (args: any) => <PopoverElement {...args} />;
PopoverButton.args = {};
