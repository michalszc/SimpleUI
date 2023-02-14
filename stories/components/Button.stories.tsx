import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SlHome } from 'react-icons/sl';
import { Button } from "../../src/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SimpleUI/Button",
  component: Button,
  argTypes: {
    bg:{
      name: "background-color",
      options: ['#2196f3', '#673ab7', '#ff1744', '#ffeb3b', '#00e676'],
      control: {
        type: 'radio',
      }
    },
    size: {
      defaultValue: 'medium',
    }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.argTypes = {
  children: {
    defaultValue: "Filled Button"
  },
  mode: {
    defaultValue: 'filled'
  },
  //onClick: () => {}
};

export const OutlinedButton = Template.bind({});
OutlinedButton.argTypes = {
  children: {
    defaultValue: "Outlined Button"
  },
  mode: {
    defaultValue: 'outlined'
  },
};

export const TextButton = Template.bind({});
TextButton.argTypes = {
  children: {
    defaultValue: "Outlined Button"
  },
  mode: {
    defaultValue: 'text'
  },
};

export const ElevatedButton = Template.bind({});
ElevatedButton.argTypes = {
  children: {
    defaultValue: "Elevated Button"
  },
  mode: {
    defaultValue: 'elevated'
  },
};

export const IconButton = Template.bind({});
IconButton.argTypes = {
  children: {
    defaultValue: <div><SlHome /> Icon Button</div>,
  },
  mode: {
    defaultValue: 'filled'
  },
  //onClick: () => {}
};

export const SmallButton = Template.bind({});
SmallButton.argTypes = {
  children: {
    defaultValue: "Small Button"
  },
  mode: {
    defaultValue: 'filled'
  },
  size: {
    defaultValue: 'small'
  }
  //onClick: () => {}
};

export const MediumButton = Template.bind({});
MediumButton.argTypes = {
  children: {
    defaultValue: "Medium Button"
  },
  mode: {
    defaultValue: 'filled'
  },
  //onClick: () => {}
};

export const LargeButton = Template.bind({});
LargeButton.argTypes = {
  children: {
    defaultValue: "Large Button"
  },
  mode: {
    defaultValue: 'filled'
  },
  size: {
    defaultValue: 'large'
  }
  //onClick: () => {}
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   text: "Click me!",
//   onClick: () => alert("Click me!")
// };