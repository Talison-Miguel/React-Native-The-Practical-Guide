import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export function NumberContainer({ children }){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const deviceWidht = Dimensions.get('screen').width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidht < 380 ? 12 : 24,
        margin: deviceWidht < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidht < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
    }
})