import {
  Text, useStyleConfig
} from '@chakra-ui/react';
import React from 'react';
import IText from './Text';

export default function CText({ value = 'Text', props, color = '#757575', ...params }: IText) {
  const styles = useStyleConfig('Text', {});

  return (
    <Text
      fontSize={params.fontSize}
      fontWeight={params.fontWeight}
      variant={params.variant}
      textAlign={params.align}
      color={color}
      className={params.className}
      as={params.type}
      id={params.id}
      isTruncated={params.isTruncated}
      sx={styles}
      {...props}
    >
      {value}
    </Text>
  );
}
