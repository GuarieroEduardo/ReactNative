import { Image, Text, View, Button, TouchableOpacity, TextInput } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="bg-blue-500 font-bold text-white pl-2 pr-2 pb-2 pt-2">Detalhe do produto</Text>

      <View className="flex-1 items-center  pt-4">
        <Image
          className=" w-56 h-56 mb-6"
          source={{uri: "https://http2.mlstatic.com/camisa-social-masculina-slim-fit-manga-longa-cor-jeans-D_NQ_NP_636622-MLB31206242433_062019-F.jpg",}}
        />

      </View>
      <Text className="text-3xl text-dark-200 font-bold ml-4 mr-4 pb-2 pt-2">Produto Excepcional</Text>
      <Text className="text-1xl text-dark-200 ml-4 mr-4 pb-2 pt-2">Camisa de algodão confortável e versátil, ideal para qualquer ocasião. Design clássico, fácil de combinar com outras peças do guarda-roupa. Disponível em várias cores e tamanhos, perfeita para um visual elegante e descomplicado.</Text>
      <Text className="text-2xl text-green-500 font-bold ml-4 mr-4 pb-2 pt-2">R$ 200,00</Text>
      
      <TouchableOpacity className="rounded-full bg-blue-500 p-2 mt-4 ml-4 mr-4 items-center">
        <Text className="text-white">Comprar agora</Text>
      </TouchableOpacity>

    </View>
  );
}
