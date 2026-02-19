
import React from "react";
import {View, Text} from "react-native";
import { Link } from "expo-router";

export default function SearchScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Search</Text>
      <Link href={'/(tabs)/(home)/store/1000'}>Ir a Store desde busqueda</Link>
    </View>
  );
}