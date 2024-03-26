import { Pressable, StyleSheet, Text, View } from "react-native"

export function GoalItem({ text, onDeleteGoal, id }) {
    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple={{ color: '#5e0acc' }} onPress={onDeleteGoal.bind(this, id)} style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})