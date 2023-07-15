import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./";

const meta: Meta<typeof Menu> = {
  component: Menu,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MenuElement>;

const MenuElement = (props) => {
  const [active, setActive] = useState<string | null>(null);

  const onClickItem = (item: string) => () => {
    setActive(item);
    console.log(item);
  };

  return <Menu onClickItem={onClickItem} active={active} {...props} />;
};
export const SubMenu: Story = (args: any) => <MenuElement {...args} />;
SubMenu.args = {
  items: [
    {
      label: "home",
      path: "/home",
    },

    {
      label: "Sessions",
      path: "Sessions",
      subMenu: [
        {
          label: "sessions",
          path: "/sessions",
          roles: ["test"],
        },
        {
          label: "activities",
          path: "/activities",
          roles: ["test"],
        },
        ,
        {
          label: "SDRs",
          path: "/sdrs",
          roles: ["test"],

          subMenu: [
            {
              label: "locations",
              path: "/locations",
              roles: ["test"],
            },
            {
              label: "EVCs",
              path: "/evcs",
              roles: ["test"],
            },

            {
              label: "EVSEs",
              path: "/evses",
              roles: ["test"],
            },
          ],
        },
      ],
    },
    {
      label: "infrastructure",
      path: "",

      subMenu: [
        {
          label: "locations",
          path: "/locations",
          roles: ["test"],
        },
        {
          label: "EVCs",
          path: "/evcs",
          roles: ["test"],
        },

        {
          label: "EVSEs",
          path: "/evses",
          roles: ["test"],
        },
      ],
    },
  ],
};
