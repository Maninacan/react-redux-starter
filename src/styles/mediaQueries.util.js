/* flow */

import { css } from 'styled-components'
import laptops from './sizes/laptops.config'
import phones from './sizes/phones.config'
import tablets from './sizes/tablets.config'

const sizes = {
  ...laptops,
  ...phones,
  ...tablets
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes)
  .reduce((acc: Object, label: String) => {
    acc[label] = getMediaQuery(sizes[label])
    return acc
  }, {})

function getMediaQuery (device: Object) {
  let screenString = ''

  if (device.screen) screenString = 'screen '
  else if (device.onlyScreen) screenString = 'only screen '

  delete device.screen
  delete device.onlyScreen

  return (...args) => css`@media ${screenString}${
    Object.keys(device)
      .reduce((str, key, index) => {
        return `${str}${screenString || index > 0 ? 'and ' : ''}(${key}: ${device[key]}) `
      }, '')
    } {${css(...args)}}`
}
