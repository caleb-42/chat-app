import { HeadingProps } from '@chakra-ui/react';
import { AtomProps } from '../atoms.interface';

export default interface IHeading extends AtomProps {
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
