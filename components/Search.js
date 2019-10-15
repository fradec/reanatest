import React from 'react'
import { TextInput } from 'react-native'

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
      <TextInput
        onChangeText={(text) => this.setCity(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        value={this.state.city}
      />
    )
  }
}
