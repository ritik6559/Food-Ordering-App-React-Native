import OrderItemList from "@/components/OrderItemList";
import orders from "@assets/data/orders";
import { Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";

const Orders = () => {
    return (
        <FlatList
            data={orders}
            renderItem={({item}) => <OrderItemList order={item}/>}
            contentContainerStyle={{padding: 10, gap: 10}}
        />
    )
}



export default Orders;