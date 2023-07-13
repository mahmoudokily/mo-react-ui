import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Popover } from "./Popover";
const PopoverElement = () => {
  const [status, setStatue] = useState<boolean>(false);
  return (
    <Popover position="right" status={status} setStatus={setStatue}>
      <Button> Clickme</Button>
      <Box style={{ width: 200, height: 200 }} $variant="danger">
        test
      </Box>
    </Popover>
  );
};

const meta: Meta<typeof PopoverElement> = {
  component: PopoverElement,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PopoverElement>;

export const Primary: Story = (args: any) => <PopoverElement {...args} />;
Primary.args = {};
