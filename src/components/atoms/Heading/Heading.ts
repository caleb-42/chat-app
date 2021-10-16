import { HeadingProps } from '@chakra-ui/react';

export default interface IHeading {
  value?: string;
  variant?: string;
  color?: string;
  fontWeight?: string;
  children?: React.ReactNode;
  isTruncated?: boolean;
  size?: string;
  align?: 'center' | 'left' | 'right';
  css?: string;
  style?: React.CSSProperties;
  props?: HeadingProps;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
