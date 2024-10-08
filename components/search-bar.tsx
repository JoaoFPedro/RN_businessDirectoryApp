import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
    <View>
      
        <TextInput placeholder='Search...' style={{backgroundColor:'white', padding: 4}}></TextInput>
     
    </View>
  )
}