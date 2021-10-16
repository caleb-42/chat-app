import { Box, Text, useColorMode, useColorModeValue, useStyleConfig } from '@chakra-ui/react';
import { InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/input';
import React from 'react';
import ITextField, { InputStyle } from './TextField';

export default function CTextField({
  variant = 'solid',
  borderRadius = '2rem',
  hasShadow = true,
  fontSize = '14px',
  height = '3rem',
  props,
  name,
  keepHelperTextSpace = false,
  isError,
  helperText,
  switchTheme,
  rightAdornment,
  leftAdornment,
  ...params
}: ITextField) {
  const styles = useStyleConfig('Input', {});
  const color = useColorModeValue('red.400', 'white');
  const { colorMode } = useColorMode();
  const wht = hasShadow ? '#fdfdfd' : '#fff';
  const bg = colorMode === 'light' ? wht : 'primaryColor.reallyDark';
  const whtShadow = hasShadow
    ? '3px 3px 4px 2px #f1f1f1 inset, -3px -5px 6px 3px #fff inset'
    : '0 0 5px 1px #f6f6f6';
  const bgShadow = colorMode === 'light' ? whtShadow : '';

  const textColor = colorMode === 'light' ? '#7e7e7e' : '#fff';

  const inputMain = <InputStyle
    sx={styles}
    onChange={params.onChange}
    variant={variant}
    size={params.size}
    width={params.width}
    height={height}
    name={name}
    borderRadius={borderRadius}
    css={params.css}
    color={textColor}
    fontSize={fontSize}
    style={params.style}
    background={bg}
    boxShadow={bgShadow}
    placeholder={params.placeholder}
    value={params.value}
    {...props}
  />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      mb={params.mb}
      mt={params.mt}
      ml={params.ml}
      mr={params.mr}
      m={params.margin}
    >
      {(leftAdornment || rightAdornment) ? <InputGroup>
        {leftAdornment && <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={leftAdornment}
        />}
        {inputMain}
        {rightAdornment && <InputRightElement children={rightAdornment} />}
      </InputGroup> : inputMain}
      {(helperText || keepHelperTextSpace) && (
        <Box mt=".3rem" height="1rem" pl="1rem">
          <Text color={isError ? color : ''} fontSize=".75rem">
            {helperText}
          </Text>
        </Box>
      )}
    </Box>
  );
}
