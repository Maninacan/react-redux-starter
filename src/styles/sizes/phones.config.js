/* @flow */

const iPhone_4_4S = {
  onlyScreen: true,
  'min-device-width': '320px',
  'max-device-width': '480px',
  '-webkit-min-device-pixel-ratio': 2
}

const iPhone_5_5S_5C_5SE = {
  onlyScreen: true,
  'min-device-width': '320px',
  'max-device-width': '568px',
  '-webkit-min-device-pixel-ratio': 2
}

const iPhone_6_6S_7_8 = {
  onlyScreen: true,
  'min-device-width': '375px',
  'max-device-width': '667px',
  '-webkit-min-device-pixel-ratio': 2
}

const iPhone_6plus_7plus_8plus = {
  onlyScreen: true,
  'min-device-width': '414px',
  'max-device-width': '736px',
  '-webkit-min-device-pixel-ratio': 3
}
const iPhone_X = {
  onlyScreen: true,
  'min-device-width': '414px',
  'max-device-width': '736px',
  '-webkit-min-device-pixel-ratio': 3
}

const galaxy_S3 = {
  screen: true,
  'device-width': '320px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 2
}

const galaxy_S4_S5_Note_3 = {
  screen: true,
  'device-width': '320px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 3
}

const galaxy_S6 = {
  screen: true,
  'device-width': '360px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 4
}

const googlePixel = {
  screen: true,
  'device-width': '360px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 3
}

const googlePixelXL = {
  screen: true,
  'device-width': '360px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 4
}

const htcOne = {
  screen: true,
  'device-width': '360px',
  'device-height': '640px',
  '-webkit-device-pixel-ratio': 3
}

const windowsPhone = {
  screen: true,
  'device-width': '480px',
  'device-height': '800px'
}

export default {
  iPhone_4_4S,
  iPhone_4_4S_portrait: {...iPhone_4_4S, orientation: 'portrait'},
  iPhone_4_4S_landscape: {...iPhone_4_4S, orientation: 'landscape'},
  iPhone_5_5S_5C_5SE,
  iPhone_5_5S_5C_5SE_portrait: {...iPhone_5_5S_5C_5SE, orientation: 'portrait'},
  iPhone_5_5S_5C_5SE_landscape: {...iPhone_5_5S_5C_5SE, orientation: 'landscape'},
  iPhone_6_6S_7_8,
  iPhone_6_6S_7_8_portrait: {...iPhone_6_6S_7_8, orientation: 'portrait'},
  iPhone_6_6S_7_8_landscape: {...iPhone_6_6S_7_8, orientation: 'landscape'},
  iPhone_6plus_7plus_8plus,
  iPhone_6plus_7plus_8plus_portrait: {...iPhone_6plus_7plus_8plus, orientation: 'portrait'},
  iPhone_6plus_7plus_8plus_landscape: {...iPhone_6plus_7plus_8plus, orientation: 'landscape'},
  iPhone_X,
  iPhone_X_portrait: {...iPhone_X, orientation: 'portrait'},
  iPhone_X_landscape: {...iPhone_X, orientation: 'landscape'},
  galaxy_S3,
  galaxy_S3_portrait: {...galaxy_S3, orientation: 'portrait'},
  galaxy_S3_landscape: {...galaxy_S3, orientation: 'landscape'},
  galaxy_S4_S5_Note_3,
  galaxy_S4_S5_Note_3_portrait: {...galaxy_S4_S5_Note_3, orientation: 'portrait'},
  galaxy_S4_S5_Note_3_landscape: {...galaxy_S4_S5_Note_3, orientation: 'landscape'},
  galaxy_S6,
  galaxy_S6_portrait: {...galaxy_S6, orientation: 'portrait'},
  galaxy_S6_landscape: {...galaxy_S6, orientation: 'landscape'},
  googlePixel,
  googlePixel_portrait: {...googlePixel, orientation: 'portrait'},
  googlePixel_landscape: {...googlePixel, orientation: 'landscape'},
  googlePixelXL,
  googlePixelXL_portrait: {...googlePixelXL, orientation: 'portrait'},
  googlePixelXL_landscape: {...googlePixelXL, orientation: 'landscape'},
  htcOne,
  htcOne_portrait: {...htcOne, orientation: 'portrait'},
  htcOne_landscape: {...htcOne, orientation: 'landscape'},
  windowsPhone,
  windowsPhone_portrait: {...windowsPhone, orientation: 'portrait'},
  windowsPhone_landscape: {...windowsPhone, orientation: 'landscape'}
}
