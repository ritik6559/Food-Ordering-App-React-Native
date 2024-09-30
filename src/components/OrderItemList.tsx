import { Order } from "../types";
import { Link, useSegments } from "expo-router";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { View, Text, StyleSheet, Pressable } from "react-native";

dayjs.extend(relativeTime);

type OrderListItemProps = {
    order: Order;
  };
  

const OrderItemList = ({order}: OrderListItemProps) => {

    const segments = useSegments();
    return (
        <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
            <Pressable style={styles.container}>
                <View>
                    <Text style={styles.title}>Order #{order.id}</Text>
                    <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
                </View>

                <Text style={styles.status}>{order.status}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    time: {
        color: 'gray',
    },
    status: {
        fontWeight: '500',
    },
});

export default OrderItemList;