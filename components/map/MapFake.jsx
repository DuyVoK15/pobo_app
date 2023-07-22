import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapFake = () => {
  return (
    <View style={styles.container}>
      <Text>Đây là màn hình Map</Text>
    </View>
  )
}

export default MapFake

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})