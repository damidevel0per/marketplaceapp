import React from "react";
import {View, Text} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function StoresScreen() {

  //recibimos parametro, para ir a categoria
  const { category } = useLocalSearchParams();

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Search tiendas por categoria {category}</Text>
      <Link href={'/(tabs)/(home)/stores/666'}>Ir a Store desde Stores</Link>
    </View>
  );
}