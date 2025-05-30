import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require('../../assets/images/splash.jpg')}
        style={styles.image}
        resizeMode='cover'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
})