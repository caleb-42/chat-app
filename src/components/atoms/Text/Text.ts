import { TextProps } from '@chakra-ui/react';
import { AtomProps } from '../atoms.interface';

export default interface ITypography extends AtomProps {
  value?: string;
  variant?: string;
  color?: string;
  fontWeight?: string;
  isTruncated?: boolean;
  fontSize?: string;
  align?: 'center' | 'left' | 'right' | 'justify';
  css?: string;
  style?: React.CSSProperties;
  props?: TextProps;
  type?:
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup';
}
