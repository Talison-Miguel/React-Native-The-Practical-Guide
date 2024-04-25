import { Image, StyleSheet, View, Text } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/colors";

export function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>
                GAME OVER!
            </Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text>
                Your phone needed X rounds to guess the number Y.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 200,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primaryColor800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
})