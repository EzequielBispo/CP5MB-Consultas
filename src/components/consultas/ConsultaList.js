import React from 'react';
import { Box, Text, Button, FlatList } from 'native-base';

const ConsultaList = () => {
  const consultas = []; // Listagem de consultas (substituir com dados reais)
  
  return (
    <Box>
      <FlatList 
        data={consultas}
        renderItem={({ item }) => (
          <Box mb={4} p={4} borderWidth={1} borderRadius={8}>
            <Text>Consulta com: {item.medico}</Text>
            <Text>Data: {item.data}</Text>
            <Button onPress={() => alert('Editando consulta')}>Editar</Button>
            <Button onPress={() => alert('Removendo consulta')}>Remover</Button>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default ConsultaList;