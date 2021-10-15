// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // The styles all button have in common
  baseStyle: (props: any) => {
    return {
      fontWeight: '600',
      //borderRadius: '20px',
      //color: '#7e7e7e',
      padding: '20px 23px',
      _placeholder: {
        fontWeight: 'normal',
        color: '#bbb',
      },
    };
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    //variant: 'outline',
  },
};
