
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // The styles all button have in common
  baseStyle: (props: any) => {
    return {
      fontWeight: '600',
      color: '#fff',
      background: 'transparent',
      boxShadow: 'md',
    };
  },
  colorSchemes: {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    white: 'wht',
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
