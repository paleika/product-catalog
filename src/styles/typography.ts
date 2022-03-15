import { TypographyVariant } from "../types";
import './fonts.css';

interface TypographyConfig {
  component: React.ElementType;
  style: Record<string, any>;
}
const typographyMap: Record<TypographyVariant, TypographyConfig> = {

  h1: {
    component: 'h1',
    style: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '21.09px',
    },
  },
  h2: {
    component: 'h2',
    style: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '20px',
    },
  },
  h3: {
    component: 'h3',
    style: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20.61px',
    }
  },
  button: {
    component: 'div',
    style: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '16px',
    },
  },
  action1: {
    component: 'div',
    style: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '15.23px',
    },
  },
  action2: {
    component: 'div',
    style: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '15px',
    },
  },
  subtitle: {
    component: 'div',
    style: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
    },
  },
  body1: {
    component: 'div',
    style: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
    }
  },
  body2: {
    component: 'div',
    style: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '20px',
    },
  },
};

export default typographyMap;
