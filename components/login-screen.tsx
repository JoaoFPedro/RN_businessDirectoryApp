import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Button } from "./button";
import * as WebBrowser from  'expo-web-browser'
import { useOAuth } from "@clerk/clerk-expo";



WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {

 

  const [isLoading, setIsLoading] = useState(false)
  const googleOAuth = useOAuth({strategy:'oauth_google'})
  
  async function onGoogleSignIn() {
    console.log('ENTROU')
    try {
      
      setIsLoading(true)
      const oAuthFlow = await googleOAuth.startOAuthFlow()

      if(oAuthFlow.authSessionResult?.type === 'success'){
       if(oAuthFlow.setActive){
        await oAuthFlow.setActive({session: oAuthFlow.createdSessionId})
       }
       else{
        setIsLoading(false)
       }
      }
    } catch (error) {
      console.log(error)
      
    }
    finally{
      setIsLoading(false)
    }
  }
  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  },[])
  
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
          onPress={onGoogleSignIn}
        >
           <Button title="Let's get started" isLoading={isLoading}/>
            
           
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
