
import { Link } from "expo-router";
import React from "react";
import ComponenteSafeAreaView from "@/components/ComponenteSafeAreaView";
import ComponenteHeader from "@/components/ComponenteHeader";
import ComponenteSearchBar from "@/components/ComponenteSearchBar";
import { View } from "react-native";
import { spacing } from "@/styles";

export default function HomeScreen() {

  const handleSearch = () => {
    console.log("Buscando...");
  }

  return (
    <ComponenteSafeAreaView>
      <ComponenteHeader title={"Inicio"} />
      <View>
        <View style={
          {
            paddingHorizontal: spacing.m,
            marginTop: spacing.s,
            marginBottom: spacing.m,
          }
        }>
          <ComponenteSearchBar 
          readOnly 
          onPress={handleSearch} 
          placeholder="Buscar en la tienda" />
        </View>
      </View>


      {/*
      <Link href={'/(tabs)/(home)/store/2'}>Ir a Store 2</Link>
      <Link href={'/(tabs)/(home)/store/200'}>Ir a Store 200</Link>
      <Link href={'/(tabs)/(home)/search'}>Busqueda</Link>
      <Link href={'/(tabs)/(home)/stores/pizzas'}>Ir a Pizzas</Link>
      */}
    </ComponenteSafeAreaView>
  );
}