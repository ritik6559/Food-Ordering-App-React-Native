import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PizzaSize } from "@/types";
import { useCart } from "@/providers/CartProvider";
import products from "@assets/data/products";



const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];


//dynamic routes has [] in their name
const ProductDetailsScreen = () => {

    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const { id } = useLocalSearchParams();


    const { addItem } = useCart();


    const addToCart = () => {

        if (!product) {
            return;
        }


        addItem(product, selectedSize);
        router.push('/cart');
    }


    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return <Text>
            Product not found
        </Text>;
    }


    return (
        <View style={style.container}>
            <Stack.Screen
                options={{
                    title: 'Menu', 
                    headerRight: () => (
                        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="pencil"
                                        size={25}
                                        color={Colors.light.tint}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }} />
            <Image source={{ uri: product.image }} style={style.image} />
            <Text style={style.text}>
                {product.name}
            </Text>
            <Text style={style.price}>{product.price}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1, // telling the container take up all the space.
        padding: 10
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
    }

});



export default ProductDetailsScreen;