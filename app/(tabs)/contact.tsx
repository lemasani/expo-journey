import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Startbucks Tz</Text>
      <Text style={styles.subTitle}>Mikocheni, Dar es salaam</Text>
      <Text style={styles.text}>Price : Tsh 5,000</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24
  },
  subTitle: {
    color: 'gray',
    fontSize: 18
  },
  text: {
    color: 'black',
    fontSize: 16  
  }
})