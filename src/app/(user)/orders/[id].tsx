import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import orders from "@assets/data/orders";
import OrderItemList from "@/components/OrderItemList";
import OrderItemListItem from "@/components/OrderItemListItem";


const OrderDetails = () => {

    const { id } = useLocalSearchParams();
    const order = orders.find((order) => order.id.toString() === id);

    if (!order) {
        <Text>Order not found</Text>
        return;
    }



    return (
        <View>
            <Stack.Screen options={{ title: `Order #${order.id}` }} />
            <FlatList
                data={order.order_items}
                renderItem={({ item }) => <OrderItemListItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
                ListHeaderComponent={() => <OrderItemList order={order} />}
            />
        </View>
    )
}

export default OrderDetails;    