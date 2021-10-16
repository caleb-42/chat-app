import { Image } from '@chakra-ui/image';
import React from 'react';
import Assets from '../../../utils/assets';

export default function Logo() {
  return (
    <Image height="2.2rem" mb="1rem" src={Assets.LOGO} />
  );
}
