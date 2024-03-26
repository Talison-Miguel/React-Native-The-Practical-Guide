import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export function GoalInput({ onAddGoal }) {
    const [ enteredGoalText, setEnteredGoalText ] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Gols' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <Button title='Add Gol' onPress={addGoalHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        height: 40
    },
    textInput: {
        borderWidth: 1,
        borderColor:'#cccccc',
        width: '80%',
        height: 40,
        marginRight: 8,
        padding: 8
    },
})