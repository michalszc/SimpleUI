import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../src/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SimpleUI/Button",
  component: Button,
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
  size: {
    defaultValue: 'small'
  }
  //onClick: () => {}
};

export const OutlinedButton = Template.bind({});
OutlinedButton.argTypes = {
  children: {
    defaultValue: "Outlined Button"
  },
  mode: {
    defaultValue: 'outlined'
  }
};

export const TextButton = Template.bind({});
TextButton.argTypes = {
  children: {
    defaultValue: "Outlined Button"
  },
  mode: {
    defaultValue: 'text'
  }
};

export const ElevatedButton = Template.bind({});
ElevatedButton.argTypes = {
  children: {
    defaultValue: "Elevated Button"
  },
  mode: {
    defaultValue: 'elevated'
  }
};

export const DisabledButton = Template.bind({});
DisabledButton.argTypes = {
  children: {
    defaultValue: "Disable Button"
  },
  mode: {
    defaultValue: 'filled'
  },
  isDisable: {
    defautValue: true, 
  }
  //onClick: () => {}
};

// export const SmallButton = Template.bind({});
// SmallButton.args = {
//   text: "Hello world!",
//   size: "small",
//   onClick: () => {}
// };

// export const MediumButton = Template.bind({});
// MediumButton.args = {
//   text: "Hello world!",
//   size: "medium",
//   onClick: () => {}
// };

// export const LargeButton = Template.bind({});
// LargeButton.args = {
//   text: "Hello world!",
//   size: "large",
//   onClick: () => {}
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   text: "Click me!",
//   onClick: () => alert("Click me!")
// };