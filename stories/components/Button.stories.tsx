import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../src/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SimpleUI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "Hello world!",
  onClick: () => {}
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Hello world!",
  primary: true,
  onClick: () => {}
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  text: "Hello world!",
  disabled: true,
  onClick: () => {}
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  text: "Hello world!",
  size: "small",
  onClick: () => {}
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  text: "Hello world!",
  size: "medium",
  onClick: () => {}
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  text: "Hello world!",
  size: "large",
  onClick: () => {}
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  text: "Click me!",
  onClick: () => alert("Click me!")
};