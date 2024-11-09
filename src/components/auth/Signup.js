import React from 'react';
import { VStack, Input, Button } from 'native-base';

const Signup = () => {
  return (
    <VStack space={4} alignItems="center" justifyContent="center" flex={1} px={4}>
      <Input placeholder="Nome" w="100%" />
      <Input placeholder="Email" w="100%" />
      <Input placeholder="Senha" type="password" w="100%" />
      <Button onPress={() => alert('Cadastro realizado')} w="100%">Cadastrar</Button>
    </VStack>
  );
};

export default Signup;