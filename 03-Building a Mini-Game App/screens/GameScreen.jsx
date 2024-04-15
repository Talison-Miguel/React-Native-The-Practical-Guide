import { StyleSheet, Text, View } from "react-native";
import { Title } from "../components/ui/Title";
import { useState } from "react";
import { NumberContainer } from "../components/game/NumberContainer";

function generateRamdomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude) {
        return generateRamdomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export function GameScreen({ userNumber }) {
    const initialGuess = generateRamdomBetween(1, 100, userNumber)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                {/* <Text>+ -</Text> */}
            </View>
            <View>
                {/* <Text>LOG ROUNDS</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: 52
    }
})