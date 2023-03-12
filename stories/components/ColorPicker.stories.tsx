import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColorPicker, Colors } from "../../src/";

export default {
  title: "SimpleUI/ColorPicker",
  component: ColorPicker
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => <ColorPicker {...args} />;

export const DefaultColorPicker = Template.bind({});

export const ColorPickerWithSquareShape = Template.bind({});
ColorPickerWithSquareShape.args = {
  shape: 'square'
};

export const ColorPickerWithRoundedSquareShape = Template.bind({});
ColorPickerWithRoundedSquareShape.args = {
  shape: 'roundedSquare'
};

export const ColorPickerWithRGBInput = Template.bind({});
ColorPickerWithRGBInput.args = {
  input: 'rgb'
};

export const ColorPickerWithRGBAInput = Template.bind({});
ColorPickerWithRGBAInput.args = {
  input: 'rgba'
};

export const ColorPickerWithHSLInput = Template.bind({});
ColorPickerWithHSLInput.args = {
  input: 'hsl'
};

export const ColorPickerWithHSLAInput = Template.bind({});
ColorPickerWithHSLAInput.args = {
  input: 'hsla'
};

export const ColorPickerWithHiddenInput = Template.bind({});
ColorPickerWithHiddenInput.args = {
  input: 'hide'
};

export const ColorPickerWithHeader = Template.bind({});
ColorPickerWithHeader.args = {
  header: true
};

export const ColorPickerWithEyeDropper = Template.bind({});
ColorPickerWithEyeDropper.args = {
  header: true,
  eyeDropper: true
};

export const ColorPickerWithCustomSize = Template.bind({});
ColorPickerWithCustomSize.args = {
  size: [1, 20]
};

export const ColorPickerWithCustomColors = Template.bind({});
ColorPickerWithCustomColors.args = {
  header: true,
  colors: [
    Colors.teal[100],
    Colors.red[100],
    Colors.lightBlue[100],
    Colors.brown[100]
  ],
  selectedColor: Colors.brown[100],
  size: [2,2]
};
