import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { StoryRow } from './helpers';

import { Button } from '../ui-components';

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const ButtonsStory = () => (
  <>
    <StoryRow label="Variants">
      <Button>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
    </StoryRow>

    <StoryRow label="Components">
      <Button>Button</Button>
      <Button component='a'>Link</Button>
    </StoryRow>
  </>
)

ButtonsStory.storyName = "Buttons";
