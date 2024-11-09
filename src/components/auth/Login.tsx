import React, {useState} from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { RootStackParamList } from '../../navigation/type';
import { ImageBackground, TextInput, View, Text, Button, StyleSheet } from 'react-native';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          role: 'user'
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const { token } = await response.json();
      await AsyncStorage.setItem('token', token);
      setError(null);
      navigation.navigate('LoginScreen');
    } catch (error) {
      setError('Erro de autenticação. Verifique suas credenciais.');
    }
  };

  return (
    <ImageBackground
      source={require('/Users/EzequielBispo/Workspace/CP5MB-Consultas/assets/icon.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela inteira
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco com transparência
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;