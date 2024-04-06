import { Text, View } from "react-native";

export function PrimaryButton({ children }) {
    return (
        <View>
            <Text>
                {children}
            </Text>
        </View>
    )
}