import React from "react";
import {View, Text} from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-paper";
import ComponenteTexto from "@/components/ComponenteTexto";


export default function ExploreScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ComponenteTexto type={'title'}>Explore</ComponenteTexto>
      <Link href={'/(tabs)/(explore)/store/1'}>Ir a Store 1</Link>
      <Link href={'/(tabs)/(explore)/store/100'}>Ir a Store 100</Link>

      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}