import { Alert, Dimensions, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";

import { Ionicons } from '@expo/vector-icons'

import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { GuessLogItem } from "../components/game/GuessLogItem";

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
    const [ guessRounds, setGuessRounds ] = useState([])
    const   { width, height } = useWindowDimensions()

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }   
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds ])
    }

    const guessRoundsListLengths = guessRounds.length;

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-outline" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-outline" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if(width > 500) {
        content = <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-outline" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
            <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-outline" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
            </View>
        </> 
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds} 
                    renderItem={({ itemData, index }) => <GuessLogItem roundNumber={guessRoundsListLengths - index} guess={itemData}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 52,
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16 
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})