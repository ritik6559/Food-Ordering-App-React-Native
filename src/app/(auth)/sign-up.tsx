import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const SignUp = () => {

    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function signUpWithEmail(){
        console.warn('sign up');
        setLoading(true);
        const { error } = await supabase.auth.signUp(
            {
                email, 
                password,
            }
        );
        

        if(error){
            Alert.alert(error.message);
        }
        setLoading(false);
    } 


    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "SignUp", headerShown: false }} />
            <Text style={styles.text}>Email</Text>
            <TextInput 
            onChangeText={setEmail}
            style={styles.input} 
            placeholder="Email" 
            />
            <Text style={styles.text}>Password</Text>
            <TextInput 
            onChangeText={setPassword}
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true}
            />
            <Button 
            onPress={ loading ? () => {}  : signUpWithEmail}
            text={ loading ? "Please wait" : "Create account"} 
            />
            <Link href="/sign-in" style={styles.textButton}>
                <Text style={styles.text}>Sign In</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        fontSize: 16,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
      },
})


export default SignUp;