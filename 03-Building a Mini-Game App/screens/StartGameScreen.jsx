import { Alert, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";

export function StartGameScreen({ onPickNumber }) {
    const [ enteredNumber, setEnteredNumber ] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')    
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return
        } 

        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" autoCapitalize="none" 
                autoCorrect={false} 
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton> 
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100, 
        marginHorizontal: 24,
        backgroundColor: Colors.primaryColor800,
        borderRadius: 8,

        //Android
        elevation: 4,
        
        //IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height:  2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})