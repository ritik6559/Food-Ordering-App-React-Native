import { Link, Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import Button from "../components/Button";
import { useAuth } from "@/providers/AuthProvider";

const index = () => {

    const { session, loading } = useAuth();

    if(loading){
        return <ActivityIndicator/>
    }


    if( !session ){
        return <Redirect href={'/sign-in'}/>
    }


    return (
        <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
            <Link href={'/(user)'} asChild>
                <Button text="User"/>
            </Link>
            <Link href={'/(admin)'} asChild>
                <Button text="Admin"/>
            </Link>
            <Link href={'/(auth)/sign-in'} asChild>
                <Button text="SignIn"/>
            </Link>
        </View>  
    );
}


export default index;