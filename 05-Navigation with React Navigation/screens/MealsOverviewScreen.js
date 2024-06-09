import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'

import { useRoute } from '@react-navigation/native'

export function MealsOverviewScreen({ route }) {
    const routeHook = useRoute()
    const cardId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen {cardId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})