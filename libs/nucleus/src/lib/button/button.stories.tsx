import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const DifferentOne = Template.bind({});

Primary.args = {
  children: "Hello world!"
};

DifferentOne.args = {
  children: "Čau"
};
