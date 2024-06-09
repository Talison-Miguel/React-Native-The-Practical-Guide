import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { useState } from 'react';

export function CategoriesScreen({ navigation }) {
    const [numColumns, setNumColumns] = useState(2);

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverviewScreen', {
                categoryId: itemData.item.id,
            });
        }

        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={numColumns}
        />
    )
}