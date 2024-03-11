import { Meta, StoryObj } from "@storybook/react";

import { Label } from "../index";

const meta = {
  title: "components/Label",
  argTypes: {},
  component: Label,
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Your email address",
  },
  render: (args) => {
    return (
      <Label {...args}>
        Your email address
      </Label>
    );
  },
};

export const VariantDisabled: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex flex-col">
        <Label {...args} />
        <Label {...args} isDisabled />
      </div>
    );
  },
};

export const VariantSize: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex flex-col">
        <Label {...args} size="sm" />
        <Label {...args} size="md" />
        <Label {...args} size="lg" />
      </div>
    );
  },
};
