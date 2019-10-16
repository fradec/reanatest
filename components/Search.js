import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      city: 'Paris'
    }
  }

  setCity (city) {
    this.setState({
      city: city
    })
  }

  render () {
    return (
      <View style={style.view}>
        <TextInput
          onChangeText={(text) => this.setCity(text)}
          style={style.search}
          value={this.state.city}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  search: {
    marginVertical: 25,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  view: {
    margin: 15
  }
})
