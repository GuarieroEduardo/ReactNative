import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Contador de Tarefas</Text>

      <TextInput
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />

      <TouchableOpacity
          onPress={() => {
            // setLista([...lista, tarefa]);
            setTarefa('');
          }}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5
          }}
        >
        <Text style={{ color: 'white' }}>Adicionar</Text>
      </TouchableOpacity>

      <Text>Total de Tarefas: {lista.length}</Text>

      {lista.map((item, index) => (
        <Text key={index}>- {item}</Text>
      ))}
    </View>
  );
}
