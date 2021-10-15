import { mode } from '@chakra-ui/theme-tools';

export const global = (props: any) => ({
  'html, body': {
    fontFamily: 'body',
    height: '100%',
    color: mode('#757575', 'whiteAlpha.900')(props),
    bg: mode('#f6f6f6', '#001b1c')(props),
    lineHeight: 'base',
  },
  '#app': {
    width: '100%',
    height: '100%',
    overflow: 'visible',
    display: 'flex',
    'flex-direction': 'column',
  },
});
