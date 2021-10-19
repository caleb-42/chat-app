import { useColorModeValue, useStyleConfig } from '@chakra-ui/react';
import React from 'react';
import IButton, { BtnStyle } from './Button';

export default function CButton({
  title = 'Button',
  children,
  colorScheme = 'secondary',
  gradientDir = 'to-tr',
  variant = 'solid',
  fontSize = '16px',
  props,
  ...params
}: IButton) {
  const styles = useStyleConfig('Button', { colorScheme });
  const color = useColorModeValue('white', 'white');

  let colrScheme = `linear(${gradientDir}, #f0f0f0 0%, #fff 90%)`
  if (colorScheme === 'primary') colrScheme = `linear(${gradientDir}, primaryColor.main 0%, primaryColor.shadowInset 90%)`;
  if (colorScheme === 'primary-dark') colrScheme = `linear-gradient(to bottom, primaryColor.main, primaryColor.shadowInset 90%)`;
  if (colorScheme === 'secondary') colrScheme = `linear(${gradientDir}, secondaryColor.shadowInset, secondaryColor.main)`;

  return (
    <BtnStyle
      sx={styles}
      onClick={params.onClick}
      variant={variant}
      size={params.size}
      colorScheme={colorScheme}
      rightIcon={params.rightIcon}
      leftIcon={params.leftIcon}
      isLoading={params.isLoading}
      width={params.width}
      className={params.className}
      id={params.id}
      height={params.height}
      loadingText={params.loadingText}
      css={params.css}
      fontSize={fontSize}
      textColor={colorScheme === 'wht' ? 'primaryColor.main' : color}
      style={params.style}
      bgGradient={colrScheme}
      {...props}
    >
      {children ?? title}
    </BtnStyle>
  );
}
