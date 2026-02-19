import React from "react";
import { View, StyleSheet } from "react-native";
import ComponenteTexto from "./ComponenteTexto";
import { spacing } from "@/styles";

interface ComponenteHeaderProps {
    title: string;
}

/**
 * Un componente funcional que renderiza un encabezado con un título.
 *
 * @param {ComponenteHeaderProps} props - Las propiedades del componente.
 * @param {string} props.title - El texto del título que se mostrará en el encabezado.
 * @returns {JSX.Element} El componente de encabezado renderizado.
 */

export default function ComponenteHeader({
    title,
}: ComponenteHeaderProps) {
    return (
        <View style={styles.container}>
            <ComponenteTexto type={'title'}>{title}</ComponenteTexto>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.m,
    }
});