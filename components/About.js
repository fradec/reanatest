import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends React.Component {
  render () {
    return (
      <View style={style.view}>
        <Text style={style.title}>
          À propos de moi
        </Text>
        <Text>
          Lorem gjqevbz zhut zmm zmkaqb
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
    marginBottom: 20,
    marginTop: 20
  }
})
