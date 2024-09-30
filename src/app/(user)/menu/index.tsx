import ProductListItem from '@/components/ProductListItem';
import products from '@assets/data/products';
import { View, FlatList } from 'react-native';



export default function MenuScreen() {
  return (
    <View>
      <FlatList

        data={products}
        renderItem={({ item }) => <ProductListItem product={item}/>
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
      />
    </View>

  );
}







