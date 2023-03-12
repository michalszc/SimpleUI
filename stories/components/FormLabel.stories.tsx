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
            <FormLabel fontSize={'24px'}>
                <span>Click me!</span>
                <Switch 
                    isChecked={checked} onChange={() => {
                        setChecked(prev => !prev);
                    }}
                />
            </FormLabel>
        );
    } 
];

export const FormLabelHtmlFor= Template.bind({});
FormLabelHtmlFor.decorators = [
    () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <FormLabel htmlFor={'switch-id'} fontSize={'24px'}>
                    <span>Click me!</span>
                </FormLabel>
                <Switch id={'switch-id'} isChecked={checked} onChange={() => {
                    setChecked(prev => !prev);
                }}/>
            </div>
        );
    } 
];
