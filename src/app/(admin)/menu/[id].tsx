import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import { useState } from "react";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { useRoute } from "@react-navigation/native";



const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];


//dynamic routes has [] in their name
const ProductDetailsScreen = () => {

    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const { id } = useLocalSearchParams();


    const { addItem } = useCart();


    const addToCart = ()  => {

        if(!product){
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
            <Stack.Screen options={{ title: product.name }} />
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