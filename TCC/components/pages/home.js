import React from "react";
import {Image, Text, View , StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
//import Sobre from "./sobre";


export default function App() {
    const [page, setPage] = React.useState('home');


    const renderPage = () => {
        if (page === 'home') {
            return (
                <ImageBackground

                 source={require('../img/fotofundo.png')} // Atualize o caminho da imagem
                style={styles.backgroundImage} >     



                <View style={styles.container}>

                <Image style={styles.logo}source={require("../img/foto2.png")}/>
                

                <Text style={styles.title}></Text>
                                

                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Começar</Text> 
                </TouchableOpacity>

                
                </View>
                </ImageBackground>
                
                
            );
        } else if (page === 'sobre')  {
            return <Sobre />;
        }
    };
    return <View style = {styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#f2f0dd',
        flex: 1,
     
      
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 150, // Margem abaixo do texto superior
        

        
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginBottom: 50, // Margem abaixo do texto superior
        marginTop: 0,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 120,
        marginRight: 120,
    },
    img:{
        marginBottom: 20,
        marginTop: -200,
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
    

    },
    
    logo: {
        width: 500, // Largura da imagem
        height: 500, // Altura da imagem
        marginTop: -80, // Margem acima da imagem
        marginBottom: 0,
    },

    backgroundImage: {
        flex: 1, // Faz com que a imagem cubra toda a tela
        width: '100%',
        padding: 117,
        

    }

   
  });