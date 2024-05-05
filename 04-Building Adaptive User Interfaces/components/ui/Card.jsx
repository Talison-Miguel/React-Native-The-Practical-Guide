import { Dimensions, StyleSheet, View } from "react-native"
import { Colors } from "../../constants/colors"

export function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
} 

const deviceWidht = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidht < 380 ? 18 : 36, 
        marginHorizontal: 24,
        backgroundColor: Colors.primaryColor800,
        borderRadius: 8,

        //Android
        elevation: 4,
        
        //IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height:  2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})