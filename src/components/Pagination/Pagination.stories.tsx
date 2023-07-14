import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Pagination } from "./Pagination";
import { Flex } from "../Flex";
const PaginationElement = (props) => {
  const [page, setPage] = useState<number>(1);
  const onPageChange = (e: any, page: number) => {
    console.log(page);
    setPage(page);
  };
  return (
    <Flex>
      <Pagination
        {...props}
        $variant="primary"
        maxPage={4}
        page={page}
        total={200}
        onPageChange={onPageChange}
        hideFirstButton
        hideLastButton
      />
      Active Page : {page}
    </Flex>
  );
};

const meta: Meta<typeof PaginationElement> = {
  component: PaginationElement,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PaginationElement>;

export const PopoverButton: Story = (args: any) => (
  <PaginationElement {...args} />
);
PopoverButton.args = {};
