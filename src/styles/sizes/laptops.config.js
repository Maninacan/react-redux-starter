/* @flow */

export default {
  laptopNonRetina: {
    screen: true,
    'min-device-width': '1200px',
    'max-device-width': '1600px',
    '-webkit-min-device-pixel-ratio': 1
  },
  laptopRetina: {
    screen: true,
    'min-device-width': '1200px',
    'max-device-width': '1600px',
    '-webkit-min-device-pixel-ratio': 2,
    'min-resolution': '192dpi'
  }
}
