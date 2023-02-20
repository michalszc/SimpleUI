import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../../src/";
import SelectOption from "../../src/components/Select/SelectOption";
import { changeSelectedOptions, checkIfSelected } from "../../src/components/Select";

export default {
    title: "SimpleUI/Select",
    component: Select,
    decorators: [
        () => {
            const [selected, setSelected] = useState([data[0]]);
            
            return(
                <Select selectedValues={selected}>
                    {data.map((elem) => {
                        
                        return(
                            <SelectOption 
                                isChecked={checkIfSelected(selected, elem)} 
                                value={elem} 
                                onClick={() => setSelected(changeSelectedOptions(true, selected, elem))}/>
                        );
                    })}
                </Select>
            );
        }
    ]
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

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    multi: false,
    placeholder: "Search value",
};
