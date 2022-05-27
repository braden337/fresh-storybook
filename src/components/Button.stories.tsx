import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const RedButton: ComponentStory<typeof Button> = () => (
  <Button bg="red">Button</Button>
);
export const GreenButton: ComponentStory<typeof Button> = () => (
  <Button bg="green">Button</Button>
);
