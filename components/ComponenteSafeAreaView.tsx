import React from "react";
import { StyleSheet } from "react-native";
import {
    SafeAreaView,
    SafeAreaViewProps
} from "react-native-safe-area-context";

interface ComponenteSafeAreaViewProps extends SafeAreaViewProps { }

/**
 * A functional component that wraps its children inside a `SafeAreaView`.
 * This ensures that the content is displayed within the safe area boundaries
 * of a device, avoiding areas like notches, status bars, and rounded corners.
 *
 * @param {ComponenteSafeAreaViewProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components or elements to be rendered inside the `SafeAreaView`.
 * @returns {JSX.Element} A `SafeAreaView` component containing the provided children.
 */
export default function ComponenteSafeAreaView({ children }: ComponenteSafeAreaViewProps) {
    return <SafeAreaView style= {styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});