import React from 'react';
import {
  Heading
} from '@chakra-ui/react';
import IHeading from './Heading';

export default function CHeading({
  value = 'Text',
  props,
  color = '#757575',
  ...params
}: IHeading) {

  return (
    <Heading
      size={params.size}
      fontWeight={params.fontWeight}
      variant={params.variant}
      textAlign={params.align}
      color={color}
      as={params.type}
      isTruncated={params.isTruncated}
      //sx={styles}
      {...props}
    >
      {value}
    </Heading>
  );
}
