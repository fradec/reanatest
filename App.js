import React from 'react';
import { View } from 'react-native';
import About from './components/About.js'
import Search from './components/Search.js'

export default function App() {
  return (
    <View style={{marginVertical: 40, marginHorizontal: 15}}>
      <Search />
    </View>
  );
}
