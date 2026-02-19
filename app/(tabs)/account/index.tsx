import React from "react";
import {View, Text} from "react-native";
import {Link} from "expo-router"; 

export default function AccountScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Account</Text>
      <Link href={'/(tabs)/account/edit-account'}>Edit account</Link>
    </View>
  );
}