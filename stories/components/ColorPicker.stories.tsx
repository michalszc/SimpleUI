import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColorPicker, Colors } from "../../src/";

export default {
  title: "SimpleUI/ColorPicker",
  component: ColorPicker
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => <ColorPicker {...args} />;

export const DefaultColorPicker = Template.bind({});
DefaultColorPicker.args = {
    header: true,
    input: 'hsl'
    // colors: Object.values(Colors).map( v => Object.values(v)).flat(2)
};
