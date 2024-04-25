import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        // fontWeight: 'bold',
        color: Colors.whiteColor,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.whiteColor,
        padding: 12
    }
})