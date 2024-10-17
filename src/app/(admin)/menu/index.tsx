import { useProductList } from '@/api/products';
import ProductListItem from '@/components/ProductListItem';
import products from '@assets/data/products';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';



export default function MenuScreen() {

  const { data: products, error, isLoading } = useProductList();

  if(error){
    return <Text>
      Failed to fetch posts.
    </Text>
  }

  if(isLoading){
    return <ActivityIndicator/>
  }


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







