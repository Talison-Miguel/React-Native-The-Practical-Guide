import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from './constants/colors';
import { useCallback, useState } from 'react';

import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true)

    const [ fontsLoaded, fontError ] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }
    
    function gameOverHandler() {
        setGameIsOver(true)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if(userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if(gameIsOver && userNumber) { 
        screen = <GameOverScreen />
    } 


    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen} onLayout={onLayoutRootView}>
            <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
