import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DigitButton } from '../components/DigitButton';

export default {
    title: 'UI/DigitButton',
    component: DigitButton,
    onClick: () => {
        console.log('hihi')
    }
    ,
    argTypes: {
        backgroundColor: { control: 'color'}
    }
} as ComponentMeta<typeof DigitButton>

const Template: ComponentStory<typeof DigitButton> = (args) => <DigitButton {...args} />

export const Primary = Template.bind({});

Primary.args = {
    digit: '9',
}