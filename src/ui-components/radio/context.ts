import React from 'react';
import { Color, TypographyVariant } from '../../types';

interface RadioContextValue {
  activeColor?: Color;
  activeValue: string | undefined;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  labelColor?: Color;
  labelVariant?: TypographyVariant;
  name: string;
}

const RadioContext = React.createContext<RadioContextValue | null>(null);

export default RadioContext;
export type { RadioContextValue }
