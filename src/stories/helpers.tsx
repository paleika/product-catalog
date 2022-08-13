import React from 'react';
import styled from '@emotion/styled';

interface StoryRowProps {
  children: React.ReactNode;
  label?: string;
  vertical?: boolean;
};

const Row = styled.div({
  padding: '20px',
  borderBottom: '1px solid lightsteelblue',
  '&:last-of-type': {
    borderBottom: 'none',
  },
});

const Header = styled.div({
  fontFamily: 'monospace',
  fontWeight: 900,
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'lightsteelblue',
  marginBottom: '16px',
});

const Content = styled.div(({ vertical }: { vertical: boolean }) => ({
  display: 'flex',
  flexDirection: vertical ? 'column' : 'row',
  gap: '10px',
}));

const StoryRow: React.FC<StoryRowProps> = ({ children, label, vertical = false }) => (
  <Row>
    {label && <Header>{label}</Header>}
    <Content vertical={vertical}>
      {children}
    </Content>
  </Row>
);

const StoryHeader: React.FC<{ label: string }> = ({ label }) => (
  <Header>
    {label}
  </Header>
);

export {
  StoryHeader,
  StoryRow,
}
