import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default class About extends React.Component {

  render () {
    return (
      <View style={style.view}>
        <Text style={style.title}>
          À propos de l'application
        </Text>
        <Text>
          Cette première application en ReactNative est dédiée à connaître la météo par ville.
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    margin: 15
  },
  title: {
    fontSize: 22,
    marginVertical: 25,
  }
})
