import { Button, ButtonProps } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AtomProps } from '../atoms.interface';

export default interface IButton extends AtomProps {
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  isLoading?: boolean;
  children?: any;
  borderRadius?: string;
  title?: string;
  colorScheme?: 'primary' | 'primary-dark' | 'secondary' | 'wht' | 'butter';
  fontSize?: string;
  width?: string;
  height?: string;
  gradientDir?:
  | 'to-t'
  | 'to-r'
  | 'to-l'
  | 'to-b'
  | 'to-tr'
  | 'to-br'
  | 'to-tl'
  | 'to-bl';
  loadingText?: string;
  onClick?: (event: any) => void;
  css?: string;
  style?: React.CSSProperties;
  props?: ButtonProps;
}

export const BtnStyle = styled(Button)`
  & {
    font-size: ${({ fontSize }) => fontSize};
    border-radius: ${({ borderRadius }) => borderRadius ?? '50px'};
    transition: all 0.5s ease-out;
    ${({ colorScheme, variant, theme }) => {
    let colors = (theme as any).colors;
    let color;
    if (colorScheme === 'secondary') {
      color = colors.secondaryColor.main;
    } else if (colorScheme === 'wht') {
      color = colors.wht['100'];
    } else {
      color = colors.primaryColor.main;
    }
    if (variant === 'outline') {
      return `
          background: none;
          box-shadow: none;
          color: ${color};
          border: 1px solid ${color};
        `;
    }
  }}
    &:hover {
      ${({ colorScheme, theme }) => {
    let colors = (theme as any).colors;
    let color = colorScheme === 'wht' ? colors.primaryColor.main : 'white';
    return `
          color: ${color};
          filter: opacity(${colorScheme === 'wht' ? '1' : '.8'});
        `;
  }};
      
    }
  }
`;

/* ${({ colorScheme, theme }) => {
        let colors = (theme as any).colors;
        let bg;
        if (colorScheme === 'secondary') {
          bg = `linear-gradient(to top right, ${colors.secondary[400]}, ${colors.secondaryColor.main})`;
        } else if (colorScheme === 'wht') {
          bg = colors.wht['100'];
        } else if (colorScheme === 'primary-dark') {
          bg = `linear-gradient(to bottom, ${colors.primary[600]}, ${colors.primaryColor.shadowInset} 90%)`;
        } else {
          bg = `linear-gradient(to top right, ${colors.primary[500]}, ${colors.primaryColor.shadowInset} 90%)`;
        }
        return bg ? `background-image: ${bg};` : '';
      }} */