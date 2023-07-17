import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./";
import { Flex } from "../Flex";
import { BrowserRouter, Route, Router } from "react-router-dom";

const meta: Meta<typeof Menu> = {
  component: Menu,
  argTypes: {},
  parameters: {
    reactRouter: [
      {
        routePath: "/home",
      },
      {
        routePath: "/sessions",
      },
      {
        routePath: "/locations",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof MenuElement>;

const MenuElement = (props) => {
  const [active, setActive] = useState<string | null>(null);

  const onClickItem = (item: string) => () => {
    setActive(item);
    console.log(item);
  };

  return (
    <Flex position="relative" width={500} bg="#737373">
      <Menu {...props} />
    </Flex>
  );
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
      submenu: [
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

          submenu: [
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
              submenu: [
                {
                  label: "locations",
                  path: "/locations",
                  roles: ["test"],
                  submenu: [
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
      ],
    },
    {
      label: "infrastructure",
      path: "",

      submenu: [
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
