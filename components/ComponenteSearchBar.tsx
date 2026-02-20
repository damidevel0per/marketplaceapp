import React from "react";
import { View, TextInput, StyleSheet, TextInputProps, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { spacing } from "@/styles";
import { useTheme } from "react-native-paper";
import ComponenteTexto from "./ComponenteTexto";
import { ComponenteTextoFontFamily } from "../components/ComponenteTexto";

interface ComponenteSearchBarProps extends TextInputProps {
    readonly?: boolean;
}

export default function ComponenteSearchBar({ readOnly, ...props }: ComponenteSearchBarProps) {

    const { onPress } = props;
    const theme = useTheme();

    let WrappedComponent;

    if (readOnly) {
        WrappedComponent = Pressable;
    } else {
        WrappedComponent = View;
    }

    return (
        <WrappedComponent style={styles.container} onPress={readOnly ? onPress : undefined}>
            <Ionicons name="search"
                size={24}
                color={theme.colors.onSurface}
                style={styles.icon} />
            <TextInput
                onPress={readOnly ? onPress : undefined}
                editable={!readOnly}
                style={styles.input}
                placeholderTextColor={theme.colors.onSurface}
                {...props}
            />
        </WrappedComponent>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: 30,
        paddingHorizontal: spacing.m,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: ComponenteTextoFontFamily.OPENS_SANS_MEDIUM,
    },
});