import { Image, Text, View, Button, TouchableOpacity, TextInput } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        className="rounded-full w-36 h-36 mb-6"
        source={{uri: "https://th.bing.com/th/id/OIP.MSUT7ZG8wk9gcfxYhznLrwHaJ-?cb=iwc2&rs=1&pid=ImgDetMain",}}
      />
      <Text className="text-5xl text-dark-200 font-bold">Mario</Text>
      <Text className="text-base text-dark-200 font-bold">Idade: 25 anos</Text>
      <Text className="text-base text-dark-200 font-bold">Localização: Nintendo</Text>
      
      <TouchableOpacity className="rounded-full bg-blue-500 p-2 mt-4">
        <Text className="text-white">Editar Perfil</Text>
      </TouchableOpacity>

    </View>
  );
}
