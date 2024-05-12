import { Platform, StyleSheet, Text } from "react-native";
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
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0 , android: 2 }),
        borderWidth: 2,
        borderColor: Colors.whiteColor,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})