import React from 'react';
import {
  Heading
} from '@chakra-ui/react';
import IHeading from './Heading';

export default function CHeading({
  value = 'Text',
  props,
  children,
  ...params
}: IHeading) {

  return (
    <Heading
      size={params.size}
      fontWeight={params.fontWeight}
      variant={params.variant}
      textAlign={params.align}
      color={params.color}
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
