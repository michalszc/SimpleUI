import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Colors, Switch } from "../../src/";

export default {
  title: "SimpleUI/Switch",
  component: Switch
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(args.isChecked ?? false);

  return (
    <Switch {...args} isChecked={checked} onChange={(e) => {
      setChecked(prev => !prev);
      if (args.onChange) {
        args.onChange(e);
      }
    }}/>
  );
};

export const DefaultSwitch = Template.bind({});

export const SwitchWithSquareShape = Template.bind({});
SwitchWithSquareShape.args = {
  shape: 'square'
};

export const SwitchWithRoundedSquareShape = Template.bind({});
SwitchWithRoundedSquareShape.args = {
  shape: 'roundedSquare'
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  isDisabled: true
};

export const ReadOnlySwitch = Template.bind({});
ReadOnlySwitch.args = {
  isReadonly: true
};

export const CheckedSwitch = Template.bind({});
CheckedSwitch.args = {
  isChecked: true
};

export const SwitchWithCustomCheckedColor = Template.bind({});
SwitchWithCustomCheckedColor.args = {
  isChecked: true,
  checkedColor: Colors.red[600]
};
