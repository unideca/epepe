// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'bold',
      },
      sizes: {
        lg: {
          fontSize: '16px',
          px: 8,
          py: 6,
        },
      },
      variants: {
        solid: {
          bg: 'red.500',
          color: 'white',
          _hover: {
            bg: 'red.600',
          },
        },
      },
      defaultProps: {
        size: 'lg',
        variant: 'solid',
      },
    },
  },
});

export default theme;
