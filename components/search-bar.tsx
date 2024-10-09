import { View, Text, TextInput } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
export default function SearchBar() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 2,
        borderRadius: 8,
      }}
    >
      
      <Feather name="search" size={24} color="black" />
      <TextInput placeholder="Search..." style={{ padding: 4, width:'100%' }}></TextInput>
      
    </View>
  );
}
