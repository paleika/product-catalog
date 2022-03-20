type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'button'
  | 'action1'
  | 'action2';

type Color =
  | 'background'
  | 'black'
  | 'backgroundDark'
  | 'darkGrey'
  | 'grey'
  | 'light'
  | 'mediumGrey'
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'smoke'
  | 'white';

interface SVGIconProps {
  color?: Color;
}

export type {
  Color,
  TypographyVariant,
  SVGIconProps,
};
