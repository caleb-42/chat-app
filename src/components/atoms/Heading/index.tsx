import React from 'react';
import {
  Heading
} from '@chakra-ui/react';
import IHeading from './Heading';

export default function CHeading({
  value = 'Text',
  props,
  color = '#757575',
  children,
  ...params
}: IHeading) {

  return (
    <Heading
      size={params.size}
      fontWeight={params.fontWeight}
      variant={params.variant}
      textAlign={params.align}
      color={color}
      id={params.id}
      className={params.className}
      as={params.type}
      isTruncated={params.isTruncated}
      //sx={styles}
      {...props}
    >
      {children ?? value}
    </Heading>
  );
}
