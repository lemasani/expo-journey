import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'

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
        <Link href="/contact"  asChild style={{ marginHorizontal: 'auto' }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </Pressable>
        </Link>

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
  },
  button: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 6,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 15,
    padding: 4
  }
  

})
