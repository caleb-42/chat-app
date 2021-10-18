import { Image } from '@chakra-ui/image';
import React from 'react';
import Assets from '../../../utils/assets';

export default function Logo({ mb = "1rem" }) {
  return (
    <Image alt="logo" width="3.8rem" height="2.2rem" mb={mb} src={Assets.LOGO} />
  );
}
