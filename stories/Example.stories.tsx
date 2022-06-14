import Example, { ExampleProps } from './Example';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Example',
  component: Example,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ExampleProps> = (args, context) => {
  console.log('context', context);
  return <Example data={context.globals} />;
};

export const Default = Template.bind({});

export const Another = Template.bind({});
