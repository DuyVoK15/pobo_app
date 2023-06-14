import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonStyle = StyleSheet.create({
    buttonContainer: {
        marginTop: 30
    },
    buttonSignup: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 350,
        alignSelf: "center",
        backgroundColor: "#FE5D26",
        borderRadius: 10,
        marginTop: 10,
      },
      buttonSignupText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFF"
      },
})

export default ButtonStyle

