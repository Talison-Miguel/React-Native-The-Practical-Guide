import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export function GoalInput({ onAddGoal, visible, onCancel }) {
    const [ enteredGoalText, setEnteredGoalText ] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your Gols' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Add Gol' onPress={addGoalHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={onCancel}/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        height: 40
    },
    textInput: {
        borderWidth: 1,
        borderColor:'#cccccc',
        width: '100%',
        height: 40,
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})