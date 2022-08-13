import React from 'react';
import { Typography } from '../ui-components';
import { StoryRow } from './helpers';

export default {
  title: "Components/Typography",
  component: Typography,
}

export const TypographyStory = () => (
  <>
    <StoryRow vertical label="Typography options">
      <Typography>Default style</Typography>
      <Typography variant='h1'>Variant: h1</Typography>
      <Typography color='primary'>Color: primary</Typography>
    </StoryRow>
  </>
)

TypographyStory.storyName = "Typography defaults"
