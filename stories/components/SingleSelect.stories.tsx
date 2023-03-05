import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SingleSelect } from "../../src/";
import { Option } from "../../src/components/Select";
import Colors from "../../src/constants/Colors";


export default {
    title: "SimpleUI/SingleSelect",
    component: SingleSelect
} as ComponentMeta<typeof SingleSelect>;

const Template: ComponentStory<typeof SingleSelect> = (args) => <SingleSelect {...args} />;

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


export const SelectSingle = Template.bind({});

SelectSingle.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string>("");
        
        return(
            <SingleSelect placeholder="Select value" onChange={(v) => setSelected(v)}>
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
            </SingleSelect>
        );
    }, 
];

export const SelectSingleCustomColors = Template.bind({});

SelectSingleCustomColors.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string>("");
        
        return(
            <SingleSelect 
            borderColor={Colors.pink[500]}
            placeholder="Select value" 
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
            </SingleSelect>
        );
    }, 
];

export const SelectSingleWithLabel = Template.bind({});

SelectSingleWithLabel.decorators = [
    () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selected, setSelected] = useState<string>("");
        
        return(
            <SingleSelect label="Label" placeholder="Select value" onChange={(v) => setSelected(v)}>
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
            </SingleSelect>
        );
    }, 
];
