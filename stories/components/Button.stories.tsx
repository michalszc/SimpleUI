import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SlHome } from 'react-icons/sl';
import { Button } from "../../src/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SimpleUI/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'medium',
    },
    isDisable: {
      defaultValue: false,
      control: 'boolean',
    }
  } 
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  mode: 'filled',
  children: 'Filled Button',
  onClick: () => {},
  bg: 'red',
  mt: '100px',
  textColor: 'purple'
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  mode: 'outlined',
  children: 'Outlined Button',
};

export const TextButton = Template.bind({});
TextButton.args = {
  mode: 'text',
  children: 'Text Button',
};

export const ElevatedButton = Template.bind({});
ElevatedButton.args = {
  mode: 'elevated',
  children: 'Elevated Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  mode: 'filled',
  children: <div><SlHome /> Icon Button</div>,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  mode: 'filled',
  children: 'Small Button',
  size: 'small',
};


export const MediumButton = Template.bind({});
MediumButton.args = {
  mode: 'filled',
  children: 'Medium Button',
  size: 'medium',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  mode: 'filled',
  children: 'Large Button',
  size: 'large',
};

export const ClickMeButton = Template.bind({});
ClickMeButton.args = {
  mode: 'filled',
  children: 'Click Me Button',
  onClick: () => alert("Click me!"),
};
