import { Alert, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/ui/Title";
import { useState } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";

function generateRamdomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude) {
        return generateRamdomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1;
let maxBoundary = 1;

export function GameScreen({ userNumber }) {
    const initialGuess = generateRamdomBetween(minBoundary, maxBoundary, userNumber)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)

    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'Cancel' }])
            return
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRamdomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>-</PrimaryButton>
                </View>
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