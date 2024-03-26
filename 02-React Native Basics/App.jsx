import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
    const [ courseGols, setCourseGols ] = useState([])    

    function addGoalHandler(enteredGoalText) {
        setCourseGols(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    }

    function deleteGoalHandler(id) {
        setCourseGols(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
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
