import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Button } from "./button";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.image}
      ></Image>
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>
          Your Ultimate{" "}
          <Text style={styles.highlight}>Community Business Directory</Text> App
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textDescription}>
          Find your favorite business near your and post your own business to
          your community
        </Text>

        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 18,
            backgroundColor: "#6a94ee",
            marginVertical: 15,
            padding: 12,
          }}
        >
           <Button title="Let's get started"/>
            
           
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
    marginTop: -20,
    marginBottom: 5,
    backgroundColor: "white",
  },
  textContainer: {
    alignContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  textDescription: {
    textAlign: "center",
    fontSize: 12,
  },
  image: {
    width: 200,
    height: 450,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 5,
  },
  mainText: {
    fontSize: 25,
    color: Colors.TEXT,
    textAlign: "center",
    fontFamily: "outfit-bold",

    justifyContent: "space-around",
    width: "100%",
  },

  highlight: {
    color: "purple",
    marginHorizontal: 5,
  },
});
