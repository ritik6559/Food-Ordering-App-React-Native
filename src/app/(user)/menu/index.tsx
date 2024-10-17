import ProductListItem from '@/components/ProductListItem';
import { View, FlatList, Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useProductList } from '@/api/products';


export default function MenuScreen() {


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data , error } = await supabase.from('products').select('*');
  //     console.log(error);
  //     console.log(data);
  //   } 
  //   fetchProducts();
  // }, []);

  //another method ot fetch products

  const {data: products, error, isLoading} = useProductList();

  if(isLoading){
    return <ActivityIndicator/>
  }

  if(error){
    return <Text>
      Failed to fetch products
    </Text>
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







