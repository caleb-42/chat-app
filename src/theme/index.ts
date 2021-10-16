// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import Button from './components/button';
import Input from './components/input';
import { global } from './styles';

export default extendTheme({
  fonts: {
    body: "'Nunito Sans', sans-serif",
    heading: "'Nunito Sans', sans-serif",
  },
  styles: {
    global,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors,
  components: {
    Button,
    Input,
  },
});
