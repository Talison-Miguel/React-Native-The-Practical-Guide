import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}r</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
})