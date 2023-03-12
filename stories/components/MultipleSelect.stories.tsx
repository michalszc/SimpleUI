import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultipleSelect } from "../../src/";
import { Option } from "../../src/components/Select";
import Colors from "../../src/constants/Colors";

export default {
    title: "SimpleUI/MultiSelect",
    component: MultipleSelect
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (args) => (
    <MultipleSelect {...args} >
        <Option value='First Option'/>
        <Option value='Second Option'/>
        <Option value='Third Option'/>
        <Option value='Fourth Option'/>
        <Option value='Fifth Option'/>
        <Option value='Sixth Option'/>
        <Option value='Seventh Option'/>
        <Option value='Eigth Option'/>
        <Option value='Ninth Option'/>
        <Option value='Tenth Option'/>
    </MultipleSelect>)
;

export const SelectMultiple = Template.bind({});
SelectMultiple.args = {
    placeholder: "Select values",
};

export const SelectMultipleCustomColors = Template.bind({});
SelectMultipleCustomColors.args = {
    placeholder: "Select values",
    tagBgColor: Colors.pink[500],
    borderColor: Colors.pink[500]
};

export const SelectMultipleWithDefaultValues = Template.bind({});
SelectMultipleWithDefaultValues.args = {
    placeholder: "Select values",
    selected: [
        "Third Option",
        "Ninth Option"
    ]
};
