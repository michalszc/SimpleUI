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
    values: {
        "1": "First option",
        "2": "Second option",
        "3": "Third option",
    },
    selectedValues: {
        "2": "Second option",
    },
    multiple: true,
};
