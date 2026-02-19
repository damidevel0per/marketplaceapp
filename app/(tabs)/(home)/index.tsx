
import ComponenteTexto from "@/components/ComponenteTexto";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "@/styles";
import ComponenteHeader from "@/components/ComponenteHeader";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ComponenteHeader title={"Inicio"}/>
      
      <Link href={'/(tabs)/(home)/store/2'}>Ir a Store 2</Link>
      <Link href={'/(tabs)/(home)/store/200'}>Ir a Store 200</Link>
      <Link href={'/(tabs)/(home)/search'}>Busqueda</Link>
      <Link href={'/(tabs)/(home)/stores/pizzas'}>Ir a Pizzas</Link>
    </SafeAreaView>
  );
}