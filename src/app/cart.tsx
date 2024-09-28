import {FlatList, Platform, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../providers/CartProvider';

 


const CartScreen = () => {

    const { items } = useCart();

    return (
        <View>
            <FlatList data={items}/>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}


export default CartScreen;