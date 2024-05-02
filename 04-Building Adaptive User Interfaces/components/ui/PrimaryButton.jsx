import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
                onPress={onPress} 
                android_ripple={{ color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,

        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height:  1},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    buttonText: {
        color: Colors.whiteColor,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})