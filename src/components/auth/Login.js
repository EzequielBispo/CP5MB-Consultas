import React from 'react';
import { VStack, Input, Button } from 'native-base';

const Login = () => {
  return (
    <VStack space={4} alignItems="center" justifyContent="center" flex={1} px={4}>
      <Input placeholder="Email" w="100%" />
      <Input placeholder="Senha" type="password" w="100%" />
      <Button onPress={() => alert('Login')} w="100%">Login</Button>
    </VStack>
  );
};

export default Login;