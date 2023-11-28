import type { Meta, StoryObj } from "@storybook/react";

import Geometry from "../../../components/geometry";

const meta = {
  title: "Components/Geometry",
  component: Geometry,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Geometry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: {
      width: 40,
      height: 40,
    },
    config: {
      type: Symbol("geometry"),
      label: "Geometry",
      value: {
        width: 40,
        height: 40,
      },
    },
    onChange: () => {},
    // label: "Button",
  },
};
