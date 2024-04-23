import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { Ionicons } from '@expo/vector-icons'

import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver()
        }   
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
          ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
          }

        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
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
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})