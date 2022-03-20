import React from 'react';
import styled from '@emotion/styled';
import { PanelProps } from './types';

const StyledPanel = styled.div({
  margin: '24px 0',
  width: '100%',
});

const TabPanel = ({ children }: PanelProps) => {
  return (
    <StyledPanel>
      {children}
    </StyledPanel>
  )
};

export default TabPanel;
