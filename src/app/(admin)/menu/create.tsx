import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as ImagePicker from 'expo-image-picker'
import { Stack, useLocalSearchParams } from "expo-router";
import { defaultPizza } from "@/components/ProductListItem";
import Button from "@/components/Button";

const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const { id } = useLocalSearchParams();
    const isUpdating = !!id;

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

    const onSubmit = () => {
        if(isUpdating){
            onUpdate();
        } else {
            onCreate();
        }
    }

    const onCreate = () => {
        if(!validateInput()){
            return;
        }

        console.warn("Creating product", name);

        resetFields();
    }


    const onUpdate = () => {
        if(!validateInput()){
            return;
        }

        console.warn("Updating product", name);

        resetFields();
    }

    const onDelete = () => {
        console.warn("delete")
    }

    const confirmDelete = () => {
        Alert.alert("Confirm", "Are you sure you want to delete this product", [
            {
                text: 'Cancel',
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: onDelete,
            }
        ]);
    }


    return (


        <View style={styles.container}>

            <Stack.Screen options={{title: isUpdating ? "Update Product" : "Create Product"}}/>

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
            <Button onPress={onSubmit} text= {isUpdating ? "Updte" :  "Create"}/>
            {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}  > Delete</Text>}
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