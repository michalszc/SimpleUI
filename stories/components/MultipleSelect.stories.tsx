import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultipleSelect } from "../../src/";
import { Option } from "../../src/components/Select";
import Colors from "../../src/constants/Colors";

export default {
    title: "SimpleUI/MultiSelect",
    component: MultipleSelect
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (args) => <MultipleSelect {...args} />;

const data =  [
    'Option 1', 
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
];


export const SelectMultiple = Template.bind({});

SelectMultiple.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string[]>([]);
        
        return(
            <MultipleSelect placeholder="Select values" onChange={(v) => setSelected(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
                <Option value={data[3]}/>
                <Option value={data[4]}/>
                <Option value={data[5]}/>
                <Option value={data[6]}/>
                <Option value={data[7]}/>
                <Option value={data[8]}/>
                <Option value={data[9]}/>
            </MultipleSelect>
        );
    }, 
];

export const SelectMultipleCustomColors = Template.bind({});

SelectMultipleCustomColors.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string[]>([]);
        
        return(
            <MultipleSelect 
            borderColor={Colors.pink[500]} 
            tagBgColor={Colors.pink[500]}
            placeholder="Select values" 
            onChange={(v) => setSelected(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
                <Option value={data[3]}/>
                <Option value={data[4]}/>
                <Option value={data[5]}/>
                <Option value={data[6]}/>
                <Option value={data[7]}/>
                <Option value={data[8]}/>
                <Option value={data[9]}/>
            </MultipleSelect>
        );
    }, 
];

export const SelectMultipleWithLabel = Template.bind({});

SelectMultipleWithLabel.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string[]>([]);
        
        return(
            <MultipleSelect 
            label="Label" 
            placeholder="Select values" 
            onChange={(v) => setSelected(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
                <Option value={data[3]}/>
                <Option value={data[4]}/>
                <Option value={data[5]}/>
                <Option value={data[6]}/>
                <Option value={data[7]}/>
                <Option value={data[8]}/>
                <Option value={data[9]}/>
            </MultipleSelect>
        );
    }, 
];
