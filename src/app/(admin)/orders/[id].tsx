import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, Pressable } from "react-native";
import orders from "@assets/data/orders";
import OrderItemList from "@/components/OrderItemList";
import OrderItemListItem from "@/components/OrderItemListItem";
import { OrderStatusList } from "@/types";
import Colors from "@/constants/Colors";


const OrderDetails = () => {

    const { id } = useLocalSearchParams();
    const order = orders.find((order) => order.id.toString() === id);

    if (!order) {
        <Text>Order not found</Text>
        return;
    }


    const updateStatus = (status: string) => {
        console.log(status);
    }



    return (
        <View>
            <Stack.Screen options={{ title: `Order #${order.id}` }} />
            <FlatList
                data={order.order_items}
                renderItem={({ item }) => <OrderItemListItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
                ListHeaderComponent={() => <OrderItemList order={order} />}
                ListFooterComponent={() => (
                    <>
                      <Text style={{ fontWeight: 'bold' }}>Status</Text>
                      <View style={{ flexDirection: 'row', gap: 5 }}>
                        {OrderStatusList.map((status) => (
                          <Pressable
                            key={status}
                            onPress={() => updateStatus(status)}
                            style={{
                              borderColor: Colors.light.tint,
                              borderWidth: 1,
                              padding: 10,
                              borderRadius: 5,
                              marginVertical: 10,
                              backgroundColor:
                                order.status === status
                                  ? Colors.light.tint
                                  : 'transparent',
                            }}
                          >
                            <Text
                              style={{
                                color:
                                  order.status === status ? 'white' : Colors.light.tint,
                              }}
                            >
                              {status}
                            </Text>
                          </Pressable>
                        ))}
                      </View>
                    </>
                  )}
            />
        </View>
    )
}

export default OrderDetails;    