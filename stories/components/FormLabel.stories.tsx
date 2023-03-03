import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormLabel, Switch } from "../../src/";

export default {
  title: "SimpleUI/FormLabel",
  component: Switch
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
    <FormLabel {...args} >
        Label
    </FormLabel>
);

export const DefaultFormLabel = Template.bind({});

export const FormLabelWithSwitch = Template.bind({});
FormLabelWithSwitch.decorators = [
    () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <FormLabel>
                <span>Text</span>
                <Switch isChecked={checked} onChange={(e) => {
                    setChecked(prev => !prev);
                }}/>
            </FormLabel>
        );
    } 
];

