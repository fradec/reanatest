import React from 'react';
import { View } from 'react-native';
import About from './components/About.js'
import Search from './components/Search.js'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
})

export default class App() {
  return (
    <View style={{marginVertical: 40, marginHorizontal: 15}}>
      <Tabs />
    </View>
  );
}
