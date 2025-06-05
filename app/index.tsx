import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Image, ScrollView } from 'react-native';

export default function App() {
  interface Produto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProdutos(data);
        setLoading(false);

      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        
      }
    };

    fetchProdutos();
    }, []);

    if (loading) {
      return (
        <View className='flex-1 justify-center items-center'>
          
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <ScrollView className="p-4">
        
        {produtos.map((item) => (
          <View key={item.id} className="bg-white rounded-xl shadow-md p-4 mb-4">
            <Image
              source={{ uri: item.image }}
              className="w-full h-40 object-contain mb-2"
              resizeMode="contain"
            />
            <Text className="text-base font-semibold mb-1">{item.title}</Text>
            <Text className="text-sm text-gray-500 mb-1">{item.category}</Text>
            <Text className="text-green-600 font-bold">${item.price}</Text>
          </View>
        ))}
      </ScrollView>

      // <FlatList
      //   data={produtos}
      //   keyExtractor={(item) => item.id.toString()}
      //   renderItem={({ item }) => (
      //     <View className="bg-white rounded-xl shadow-md p-4 m-2">
      //       <Image
      //         source={{ uri: item.image }}
      //         className="w-full h-40 object-contain mb-2"
      //         resizeMode="contain"
      //       />
      //       <Text className="text-base font-semibold mb-1">{item.title}</Text>
      //       <Text className="text-sm text-gray-500 mb-1">{item.category}</Text>
      //       <Text className="text-green-600 font-bold">${item.price}</Text>
      //     </View>
      //   )}
      // />
    );
    
  
}
