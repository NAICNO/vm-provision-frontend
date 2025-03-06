import { createIcon } from '@chakra-ui/react'

const FeideIcon = createIcon({
  displayName: 'FeideIcon',
  viewBox: '0 0 32.23 39', // Use the viewBox that fully contains the icon
  path: (
    <>
      <rect
        x="27.99"
        y="20.34"
        width="4.24"
        height="10.18"
        fill="currentColor"
      />
      <polygon
        points="18.23 23.31 13.99 23.31 13.99 34.76 4.24 34.76 4.24 20.34 0 20.34 0 35.61 0.02 35.61 0.02 39 32.23 39 32.23 34.76 18.23 34.76 18.23 23.31"
        fill="currentColor"
      />
      <circle cx="16.11" cy="16.53" r="2.54" fill="currentColor"/>
      <path
        d="M16.11,4.24A11.87,11.87,0,0,1,28,16.1h4.25A16.11,16.11,0,0,0,0,16.1H4.25A11.87,11.87,0,0,1,16.11,4.24Z"
        fill="currentColor"
      />
    </>
  ),
})

export default FeideIcon
