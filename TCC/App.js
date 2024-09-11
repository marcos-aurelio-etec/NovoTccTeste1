import { Image, StyleSheet, View } from 'react-native';
import React from 'react'
import Home from './components/pages/home.js'
import Sobre from './components/pages/sobre.js'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Home/>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
   flex: 1,
  },
  
});
