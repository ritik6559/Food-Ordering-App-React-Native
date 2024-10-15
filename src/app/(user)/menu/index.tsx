import ProductListItem from '@/components/ProductListItem';
import { supabase } from '@/lib/supabase';
import products from '@assets/data/products';
import { useEffect } from 'react';
import { View, FlatList } from 'react-native';



export default function MenuScreen() {


  useEffect(() => {
    const fetchProducts = async () => {
      const { data , error } = await supabase.from('products').select('*');
      console.log(error);
      console.log(data);
    } 
    fetchProducts();
  }, []);


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







