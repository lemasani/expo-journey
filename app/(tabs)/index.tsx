import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import icedCofferImg from './../../assets/images/iced-coffee.png'

export default function app() {
  return (
    <View style={styles.container}>

      <ImageBackground
      source={icedCofferImg}
      resizeMode='cover'
      style={styles.image}
      >
        <Text style={styles.text}>Iced coffee</Text>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
