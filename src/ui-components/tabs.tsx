import React from 'react';
import styled from '@emotion/styled';
import humanized from '../utils/humanized';
import TabButton from './tabs/button';
import TabPanel from './tabs/panel';
import { PanelProps } from './tabs/types';

type Panel = React.ReactElement<PanelProps>;

interface TabsProps {
  children: Panel | Panel[];
  activeValue: string;
  handleChange?: () => void;
}
const StyledTabList = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
})


const Tabs = ({ activeValue, children, handleChange }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(activeValue);
  const panels = React.Children.toArray(children) as React.ReactElement<PanelProps>[];
  const handleTabChange = React.useCallback((value: string) => {
    setActiveTab(value);
    handleChange && handleChange();
  }, []);

  return (
    <div>
      <StyledTabList>
        {panels.map(({ props: { label, value, disabled = false } }) => (
          <TabButton
            key={value}
            value={value}
            label={label || humanized(value)}
            active={value === activeTab}
            disabled={disabled}
            handleClick={handleTabChange}
          />
        ))}
      </StyledTabList>
      {panels.map((panel) => {
        if (panel.props.value !== activeTab) return null;
        return panel;
      })}
    </div>

  );
};

Tabs.Panel = TabPanel;

export default Tabs;
