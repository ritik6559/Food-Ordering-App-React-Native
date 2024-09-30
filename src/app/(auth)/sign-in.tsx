import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignIn = () => {






    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "SignIn", headerShown: false }} />
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
            <Button text="SignIn" />
            <Link href="/sign-up" style={styles.textButton}>
                Create an account
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


export default SignIn;