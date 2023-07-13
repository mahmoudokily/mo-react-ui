import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FixedContainer } from "./FixedContainer";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { Box } from "../Box";

const FixedElement = () => {
  const [status, setStatue] = useState<boolean>(false);
  return (
    <FixedContainer space={4} status={status} setStatus={setStatue}>
      <Button> Clickme</Button>
      <Box style={{ width: 400, height: 400 }} $variant="danger">
        test
      </Box>
    </FixedContainer>
  );
};

const meta: Meta<typeof FixedElement> = {
  component: FixedElement,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof FixedElement>;

export const Primary: Story = (args: any) => <FixedElement {...args} />;
Primary.args = {};
