import React from "react";
import {Link} from "expo-router"; 
import ComponenteSafeAreaView from "@/components/ComponenteSafeAreaView";
import ComponenteHeader from "@/components/ComponenteHeader";

export default function AccountScreen() {
  return (
    <ComponenteSafeAreaView>
      <ComponenteHeader title="Cuenta"/>
      <Link href={'/(tabs)/account/edit-account'}>Edit account</Link>
    </ComponenteSafeAreaView>
  );
}