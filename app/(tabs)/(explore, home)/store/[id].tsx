import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function StoreScreen() {

    //recibimos parametro, para mostrar tienda
    const { id } = useLocalSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>STORE {id}</Text>
        </View>
    );
}