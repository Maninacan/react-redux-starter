/* @flow */

import { media } from '../mediaQueries.util'

describe('mediaQueries', () => {
  describe('device screen sizes', () => {
    describe('iPhone 4 and 4S', () => {
      test('should return correct media query for Portrait and Landscape', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_4_4S`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Portrait', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_4_4S_portrait`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Landscape', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_4_4S_landscape`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
    })
    describe('iPhone 5, 5S, 5C and 5SE', () => {
      test('should return correct media query for Portrait and Landscape', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_5_5S_5C_5SE`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Portrait', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_5_5S_5C_5SE_portrait`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Landscape', () => {
        const expected = ["@media ", "only screen", "and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) ", " {", "background: dodgerblue;", "}"]
        const actual = media.iPhone_5_5S_5C_5SE_landscape`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
    })
    describe('Galaxy Tab 2', () => {
      test('should return correct media query for Portrait and Landscape', () => {
        const expected = ["@media ", "(min-device-width: 800px) and (max-device-width: 1280px) ", " {", "background: dodgerblue;", "}"]
        const actual = media.galaxyTab2`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Portrait', () => {
        const expected = ["@media ", "(max-device-width: 800px) and (orientation: portrait) ", " {", "background: dodgerblue;", "}"]
        const actual = media.galaxyTab2_portrait`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Landscape', () => {
        const expected = ["@media ", "(max-device-width: 1280px) and (orientation: landscape) ", " {", "background: dodgerblue;", "}"]
        const actual = media.galaxyTab2_landscape`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
    })
    describe('Laptops', () => {
      test('should return correct media query for Non-Retina screen', () => {
        const expected = ["@media ", "screen", "and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) ", " {", "background: dodgerblue;", "}"]
        const actual = media.laptopNonRetina`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
      test('should return correct media query for Retina screen', () => {
        const expected = ["@media ", "screen", "and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) ", " {", "background: dodgerblue;", "}"]
        const actual = media.laptopRetina`background: dodgerblue;`

        expect(actual).toEqual(expected)
      })
    })
  })
})
