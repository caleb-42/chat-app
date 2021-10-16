import { Input, InputProps } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { AtomProps } from '../atoms.interface';

export default interface ITextField extends AtomProps {
  variant?: 'solid' | 'flushed' | 'outline' | 'unstyled';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  borderRadius?: string;
  placeholder?: string;
  value?: string;
  rightAdornment?: React.ReactNode;
  leftAdornment?: React.ReactNode;
  fontSize?: string;
  name?: string;
  hasShadow?: boolean;
  keepHelperTextSpace?: boolean;
  isError?: boolean;
  width?: string;
  height?: string;
  helperText?: string;
  onChange?: (event: any) => void;
  css?: string;
  style?: React.CSSProperties;
  props?: InputProps;
}

export const InputStyle = styled(Input)`
  & {
    &:focus {
      outline: 0;
      box-shadow: 0 0 1px 1px
        ${({ theme }) => {
    let colors = (theme as any).colors;
    return colors.primaryColor.main;
  }};
    }
  }
`;
