import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Display } from '../components/Display';


export default {
    title: 'UI/Display',
    component: Display,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Display>

const Template: ComponentStory<typeof Display> = (args) => 
<Display {...args} />

export const Primary = Template.bind({});

Primary.args = {
    value: '0'
}