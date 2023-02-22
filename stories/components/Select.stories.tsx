import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../../src/";
import { OptionValue } from '../../src/utils/types/option';
import Option from "../../src/components/Select/Option";

export default {
    title: "SimpleUI/Select",
    component: Select
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
    multi: true,
    placeholder: "Search value"
};

MultipleSelect.decorators = [
    () => {
        const [selected, setSelected] = useState<OptionValue[]>([data[0]]);
        
        return(
            <Select onChange={(v) => setSelected(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </Select>
        );
    }, 
];

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    multi: false,
    placeholder: "Search value",
};

SingleSelect.decorators = [
    () => {
        const [selected, setSelected] = useState<OptionValue[]>([]);
        
        return(
            <Select onChange={(v) => setSelected(v)} multi={false}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </Select>
        );
    }, 
];
