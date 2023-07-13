import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./";

const meta: Meta<typeof Menu> = {
  component: Menu,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const SubMenu: Story = (args: any) => <Menu {...args} />;
SubMenu.args = {
  items: [
    { title: "home" },

    {
      title: "session",
      submenu: [
        {
          title: "sessions",
          path: "/sessions",
          roles: ["test"],
        },
        {
          title: "activities",
          path: "/activities",
          roles: ["test"],
        },
        ,
        {
          title: "SDRs",
          path: "/sdrs",
          roles: ["test"],
        },
      ],
    },
    {
      title: "infrastructure",
      submenu: [
        {
          title: "locations",
          path: "/locations",
          roles: ["test"],
        },
        {
          title: "EVCs",
          path: "/evcs",
          roles: ["test"],
        },

        {
          title: "EVSEs",
          path: "/evses",
          roles: ["test"],
        },
      ],
    },
  ],
};
