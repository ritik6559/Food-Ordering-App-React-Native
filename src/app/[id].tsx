import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";



//dynamic routes has [] in their name
const ProductDetailsScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Product :- {id}</Text>
        </View>
    );
}

export default ProductDetailsScreen;