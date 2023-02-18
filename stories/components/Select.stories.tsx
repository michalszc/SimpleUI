import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../../src/";

export default {
    title: "SimpleUI/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const data =  [
    {
        index: '1',
        value: 'First option',
    },
    {
        index: '2',
        value: 'Second option',
    },
    {
        index: '3',
        value: 'Third option',
    },
    {
        index: '4',
        value: 'Fourth option',
    },
];

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
    values: data,
    selectedValues: [
        {
            index: '3',
            value: 'Third option',
        },
    ],
    multi: true,
    placeholder: "Search value"
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    values: data,
    multi: false,
    placeholder: "Search value",
};
