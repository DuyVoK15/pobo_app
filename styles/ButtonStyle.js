import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonStyle = StyleSheet.create({
    buttonContainer: {
        marginTop: 120
    },
    buttonSignup: {
        paddingVertical: 21,
        paddingHorizontal: 20,
        width: 350,
        alignSelf: "center",
        backgroundColor: "#FE5D26",
        textColor: "#0D0D12",
        borderRadius: 10,
        marginTop: 10,
      },
      buttonSignupText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      },
})

export default ButtonStyle

