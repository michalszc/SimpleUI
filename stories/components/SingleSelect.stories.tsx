import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SingleSelect } from "../../src/";
import { Option } from "../../src/components/Select";
import Colors from "../../src/constants/Colors";


export default {
    title: "SimpleUI/SingleSelect",
    component: SingleSelect
} as ComponentMeta<typeof SingleSelect>;

const Template: ComponentStory<typeof SingleSelect> = (args) => (
    <SingleSelect {...args} >
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
    </SingleSelect>
);

export const SelectSingle = Template.bind({});
SelectSingle.args = {
    placeholder: 'Placeholder'
};

export const SelectSingleCustomColors = Template.bind({});
SelectSingleCustomColors.args = {
    placeholder: 'Placeholder',
    borderColor: Colors.pink[500]
};

export const SelectSingleWithDefaultValues = Template.bind({});
SelectSingleWithDefaultValues.args = {
    placeholder: "Select values",
    selected: "Third Option",
};
