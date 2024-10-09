import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import SearchBar from "@/components/search-bar";

export default function home() {
  const user = useUser();
  return (
    <View style={{ backgroundColor: "#5078ce", padding: 20, paddingTop: 60 }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={{ uri: user?.user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 24, padding: 8 }}
        />
        <View style={{ padding: 8, marginBottom: 8 }}>
          <Text>Welcome </Text>
          <Text>{user.user?.fullName}</Text>
        </View>
      </View>
      <View >
        <SearchBar />
      </View>
    </View>
  );
}
