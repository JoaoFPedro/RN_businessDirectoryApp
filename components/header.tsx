import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import SearchBar from "@/components/search-bar";

export default function Header() {
    const user = useUser();
  return (
    <View style={styles.container}>
    <View
      style={styles.subContainer}
    >
      <Image
        source={{ uri: user?.user?.imageUrl }}
        style={styles.image}
      />
      <View style={styles.nameContainer}>
        <Text style={{ color: "white" }}>Welcome </Text>
        <Text style={{ color: "white" }}>{user.user?.fullName}</Text>
      </View>
    </View>
    <View style={styles.searchBar}>
      <SearchBar />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#5078ce", padding: 20, paddingTop: 60 
    },
    subContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
    },
    image:{
      width: 45, height: 45, borderRadius: 24, padding: 8 
    },
    nameContainer:{
      padding: 8
    },
    searchBar:{
      marginTop: 8
    }
  })
  