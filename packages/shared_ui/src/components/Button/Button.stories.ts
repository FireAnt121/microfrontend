import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default = {
  args: {
    text: 'Primary Button',
    type: 'primary',
  }
}

export const Primary = {
  args: {
    text: 'Primary Button',
    type: 'primary',
  }
}

export const Seconday = {
  args: {
    text: 'Secondary Button',
    type: 'secondary',
  }
}
