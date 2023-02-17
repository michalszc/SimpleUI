import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../../src/";

export default {
    title: "SimpleUI/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
    values: [
        {
            value: "1",
            label: "First option",
        },
        {
            value: "2",
            label: "Second option",
        },
        {
            value: "3",
            label: "Third option",
        },
    ],
    selectedValues: [
        {
            value: "2",
            label: "Second option",
        },
    ],
    multiple: true,
    placeholder: "Search value"
};
