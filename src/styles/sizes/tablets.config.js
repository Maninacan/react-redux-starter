/* @flow */

const iPad_1_2_Mini_Air = {
  onlyScreen: true,
  'min-device-width': '768px',
  'max-device-width': '1024px',
  '-webkit-min-device-pixel-ratio': 1
}

const iPad_3_4_Pro9point7inch = {
  onlyScreen: true,
  'min-device-width': '768px',
  'max-device-width': '1024px',
  '-webkit-min-device-pixel-ratio': 2
}

const iPad_Pro10point5inch = {
  onlyScreen: true,
  'min-device-width': '834px',
  'max-device-width': '1112px',
  '-webkit-min-device-pixel-ratio': 2
}

const iPad_Pro12point9inch = {
  onlyScreen: true,
  'min-device-width': '1024px',
  'max-device-width': '1366px',
  '-webkit-min-device-pixel-ratio': 2
}

const galaxyTabS = {
  'max-device-width': '1280px',
  '-webkit-min-device-pixel-ratio': 2
}

const nexus7 = {
  screen: true,
  'device-width': '601px',
  'device-height': '906px',
  '-webkit-min-device-pixel-ratio': 1.331,
  '-webkit-max-device-pixel-ratio': 1.332,
}

const nexus9 = {
  screen: true,
  'device-width': '1536px',
  'device-height': '2048px',
  '-webkit-min-device-pixel-ratio': 1.331,
  '-webkit-max-device-pixel-ratio': 1.332,
}

const kindleFireHD7inch  = {
  onlyScreen: true,
  'min-device-width': '800px',
  'max-device-width': '1280px',
  '-webkit-min-device-pixel-ratio': 1.5
}

const kindleFireHD8point9inch  = {
  onlyScreen: true,
  'min-device-width': '1200px',
  'max-device-width': '1600px',
  '-webkit-min-device-pixel-ratio': 1.5
}

export default {
  iPad_1_2_Mini_Air,
  iPad_1_2_Mini_Air_portrait: {...iPad_1_2_Mini_Air, orientation: 'portrait'},
  iPad_1_2_Mini_Air_landscape: {...iPad_1_2_Mini_Air, orientation: 'landscape'},
  iPad_3_4_Pro9point7inch,
  iPad_3_4_Pro9point7inch_portrait: {...iPad_3_4_Pro9point7inch, orientation: 'portrait'},
  iPad_3_4_Pro9point7inch_landscape: {...iPad_3_4_Pro9point7inch, orientation: 'landscape'},
  iPad_Pro10point5inch,
  iPad_Pro10point5inch_portrait: {...iPad_Pro10point5inch, 'max-device-width': '834px', orientation: 'portrait'},
  iPad_Pro10point5inch_landscape: {...iPad_Pro10point5inch, 'max-device-width': '1112px', orientation: 'landscape'},
  iPad_Pro12point9inch,
  iPad_Pro12point9inch_portrait: {...iPad_Pro12point9inch, 'max-device-width': '1024px', orientation: 'portrait'},
  iPad_Pro12point9inch_landscape: {...iPad_Pro12point9inch, 'max-device-width': '1366px', orientation: 'landscape'},
  galaxyTab2: {'min-device-width': '800px', 'max-device-width': '1280px'},
  galaxyTab2_portrait: {'max-device-width': '800px', orientation: 'portrait'},
  galaxyTab2_landscape: {'max-device-width': '1280px', orientation: 'landscape'},
  galaxyTabS: {...galaxyTabS, 'min-device-width': '800px'},
  galaxyTabS_portrait: {...galaxyTabS, 'max-device-width': '800px', 'orientation': 'portrait'},
  galaxyTabS_landscape: {...galaxyTabS, 'orientation': 'landscape'},
  nexus7,
  nexus7_portrait: {...nexus7, orientation: 'portrait'},
  nexus7_landscape: {...nexus7, orientation: 'landscape'},
  nexus9,
  nexus9_portrait: {...nexus9, orientation: 'portrait'},
  nexus9_landscape: {...nexus9, orientation: 'landscape'},
  kindleFireHD7inch,
  kindleFireHD7inch_portrait: {...kindleFireHD7inch, orientation: 'portrait'},
  kindleFireHD7inch_landscape: {...kindleFireHD7inch, orientation: 'landscape'},
  kindleFireHD8point9inch,
  kindleFireHD8point9inch_portrait: {...kindleFireHD8point9inch, orientation: 'portrait'},
  kindleFireHD8point9inch_landscape: {...kindleFireHD8point9inch, orientation: 'landscape'},
}
