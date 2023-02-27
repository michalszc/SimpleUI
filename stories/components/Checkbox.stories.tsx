import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../../src";

export default {
    title: 'SimpleUI/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const SelectedCheckbox = Template.bind({});
SelectedCheckbox.args = {
    value: 'Checkbox value',
    isChecked: true
};

export const DeselectedCheckbox = Template.bind({});
DeselectedCheckbox.args = {
    value: 'Checkbox value',
};

