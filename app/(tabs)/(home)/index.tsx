
import { Link } from "expo-router";
import React from "react";
import ComponenteSafeAreaView from "@/components/ComponenteSafeAreaView";
import ComponenteHeader from "@/components/ComponenteHeader";

export default function HomeScreen() {
  return (
    <ComponenteSafeAreaView>
      <ComponenteHeader title={"Inicio"}/>

    {/*
      <Link href={'/(tabs)/(home)/store/2'}>Ir a Store 2</Link>
      <Link href={'/(tabs)/(home)/store/200'}>Ir a Store 200</Link>
      <Link href={'/(tabs)/(home)/search'}>Busqueda</Link>
      <Link href={'/(tabs)/(home)/stores/pizzas'}>Ir a Pizzas</Link>
      */}
    </ComponenteSafeAreaView>
  );
}