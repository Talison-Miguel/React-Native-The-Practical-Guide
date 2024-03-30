import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
    const [ courseGols, setCourseGols ] = useState([])    
    const [ modalIsVisible, setModalIsVisible ] = useState(false)    

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGols(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
        endAddGoalHandler()
    }

    function deleteGoalHandler(id) {
        setCourseGols(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <Button title='Add new Goal' color={"#5e0acc"} onPress={startAddGoalHandler}/>
            { modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/> }
            <View style={styles.goalsContainer}>
                <FlatList data={courseGols} renderItem={itemData => {
                    return (
                        <GoalItem text = {itemData.item.text} onDeleteGoal={deleteGoalHandler} id={itemData.item.id}/>
                    )
                }} keyExtractor={(item, index) => item.id} alwaysBounceHorizontal={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        paddingHorizontal: 16,
        marginTop: 10,
        flex: 1,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center', 
    },
    goalsContainer: {
        flex: 4,
    },
    
});
