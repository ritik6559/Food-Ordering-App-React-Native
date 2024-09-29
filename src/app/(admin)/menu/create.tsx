import Button from "@/src/components/Button";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { defaultPizza } from "@/src/components/ProductListItem";
import * as ImagePicker from 'expo-image-picker'
import { Stack } from "expo-router";

const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    };

    const resetFields = () => {
        setName(''),
        setPrice('')
    }

    
    
    const validateInput = () => {
        setError('');
        if(!name){
            setError("Name is required.")
            return false;
        } if(!price){
            setError("Price is required.")
            return false;
        } if(isNaN(parseFloat(price))){
            setError("Price should be a number.")
            return false;
        } 
        return true;
    }

    const onCreate = () => {
        if(!validateInput()){
            return;
        }

        console.warn("Creating product", name);

        resetFields();
    }


    return (


        <View style={styles.container}>

            <Stack.Screen options={{title: "Create Product"}}/>

            <Image source={{uri: image ||  defaultPizza}} style={styles.image}/>

            <Text onPress={pickImage}  style={styles.textButton}>
                Select Image
            </Text>

            <Text style={styles.label}>
                Name
            </Text>
            <TextInput onChangeText={(value) => setName(value)}   placeholder="Name" style={styles.input} />
            <Text style={styles.label}>
                Price
            </Text>
            <TextInput onChangeText={(value) => setPrice(value)}   placeholder="$6.9" style={styles.input} keyboardType="numeric"/>
            <Text style={{color: 'red'}}>
                {error}
            </Text>
            <Button onPress={onCreate} text="Create"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    },

    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    label: {
        color: 'gray',
        fontSize: 16,
    },

})


export default CreateProductScreen;