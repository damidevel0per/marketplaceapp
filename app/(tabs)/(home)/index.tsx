
import React from "react";
import {View, Text} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home</Text>
      <Link href={'/(tabs)/(home)/store/2'}>Ir a Store 2</Link>
      <Link href={'/(tabs)/(home)/store/200'}>Ir a Store 200</Link>
    </View>
  );
}