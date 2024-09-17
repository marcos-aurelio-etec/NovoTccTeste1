import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Principal from './principal';

const App = () => {
    const [page, setPage] = React.useState('barbearia1');
  const showAlert = () => {
    Alert.alert("Olá!", "Você clicou no botão.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao React Native!</Text>
      <Button title="Clique aqui" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
});

export default App;
