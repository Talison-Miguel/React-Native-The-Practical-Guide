import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton> 
            <PrimaryButton>Confirm</PrimaryButton> 
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100, 
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,

        //Android
        elevation: 4,
        
        //IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height:  2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})