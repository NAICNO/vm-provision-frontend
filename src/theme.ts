import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import {
  themeQuartz,
} from 'ag-grid-community'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        orange: {
          50: {value: '#FFF0DF'},
          100: {value: '#FDE3BE'},
          200: {value: '#FFC067'},
          500: {value: '#E6610F'},
          700: {value: '#C25A00'},
        },
        green: {
          50: {value: '#EDFFF5'},
          100: {value: '#C2F4D0'},
          200: {value: '#67C786'},
          400: {value: '#22C34D'},
          600: {value: '#199038'},
          800: {value: '#005518'},
        },
        cyan: {
          50: {value: '#D0FFFE'},
          900: {value: '#2A3C3F'},
        },
        purple: {
          900: {value: '#322835'},
        },
        blue: {
          50: {value: '#F4F7FF'},
          100: {value: '#CCD8FF'},
          200: {value: '#A8C7FF'},
          300: {value: '#6B9AFF'},
          500: {value: '#3264FF'},
          600: {value: '#0747E9'},
          700: {value: '#093AB3'},
          900: {value: '#2E3650'},
        },
        gray: {
          50: {value: '#F7F7F7'},
          100: {value: '#ECECEC'},
          300: {value: '#9C9C9C'},
          600: {value: '#484848'},
          700: {value: '#343434'},
          800: {value: '#292929'},
          900: {value: '#1F1F1F'},
          950: {value: '#191919'},
        },
        red: {
          50: {value: '#F7E3E3'},
          100: {value: '#FBD3D0'},
          300: {value: '#F24644'},
          500: {value: '#D31809'},
          800: {value: '#7F0000'},
        },
      },
      fonts: {
        heading: {
          value: '\'IBM Plex Sans\', sans-serif',
        },
        body: {
          value: '\'IBM Plex Sans\', sans-serif',
        },
      }
    },
    semanticTokens: {
      colors: {
        error: {
          value: {base: 'red.500', _dark: 'red.800'},
        },
        info: {
          value: {base: 'blue.100', _dark: 'blue.700'},
        },
        warning: {
          value: {base: 'orange.500', _dark: 'orange.700'},
        },
        success: {
          value: {base: 'green.600', _dark: 'green.800'},
        },
      },
    },
  }
})


/** AG Grid Theme Configuration */
export const agGridTheme = themeQuartz
  .withParams(
    {
      fontFamily: '"IBM Plex Sans", sans-serif',
    }
  )
  .withParams({
    browserColorScheme: 'light',
  }, 'light')
  .withParams({
    browserColorScheme: 'dark',
  }, 'dark')

export const system = createSystem(defaultConfig, config)
