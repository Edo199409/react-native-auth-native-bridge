import { Dimensions, PixelRatio, Platform } from 'react-native'



const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')
export const RatioH = SCREEN_HEIGHT / 976
export const RatioW = SCREEN_WIDTH / 428

export const normalizePixel = (size) => {
  const newSize = size * RatioW

  if (Platform.OS==='ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }

  if (size > 12) return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export const RW = (value) => RatioW * value
export const RH = (value) => RatioH * value
