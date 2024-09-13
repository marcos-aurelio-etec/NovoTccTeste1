import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import Sobre from "./sobre";
import Home from "./home";

export default function Principal() {

    const [page, setPage] = React.useState('principal');


    const renderPage = () => {
        if (page === 'principal') {
            return (

                <><><View style={styles.header}>
                    <Image 
                                source={{ uri: 'https://picsum.photos/200/300' }}
                                style={{ width: 100, height: 100, borderRadius: 100 }} />
                    <Text style={styles.headerText}>Barbearia Franco</Text>
                    
                    

                </View><View style={styles.container}>
                        <View style={styles.container}>
                            <View style={styles.content}>
                            </View>
                        </View>
                        <View style={styles.fotos}>
                            <Image
                                source={{ uri: 'https://picsum.photos/200/300' }}
                                style={{ width: 100, height: 100, borderRadius: 100 }} />
                            <Image
                                source={{ uri: 'https://picsum.photos/200/301' }}
                                style={{ width: 100, height: 100, borderRadius: 100}} />
                            <Image
                                source={{ uri: 'https://picsum.photos/200/302' }}
                                style={{ width: 100, height: 100, borderRadius: 100 }} />

                        </View> 

                        <TouchableOpacity style={styles.button} onPress={() => setPage('barbearia1')}>
                             <Text style={styles.buttonText2}>Entrar</Text>
                             </TouchableOpacity>

                    </View></><><View style={styles.header}>
                        <Text style={styles.headerText}>Barbearia Franco</Text>

                    </View><View style={styles.container}>
                            <View style={styles.container}>
                                <View style={styles.content}>
                                </View>
                            </View>
                            <View style={styles.fotos}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/200/300' }}
                                    style={{ width: 100, height: 100 }} />
                                <Image
                                    source={{ uri: 'https://picsum.photos/200/301' }}
                                    style={{ width: 100, height: 100 }} />
                                <Image
                                    source={{ uri: 'https://picsum.photos/200/302' }}
                                    style={{ width: 100, height: 100 }} />
                            </View>

                            

                        </View></></>
                    

            );
        } else if (page === 'home') {
            return <Home />;
        }
    };
    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f0dd',
        flex: 1,
        marginBottom: 200,
        borderColor: 'black',
       

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 150, // Margem abaixo do texto superior



    },
    button: {
        backgroundColor: '#003818',
        padding: 10,
        borderRadius: 5,
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
        color: 'black',
        marginLeft: 120,
        marginRight: 120,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'red',


    },

    header: {
        backgroundColor: 'red',
        padding: 16,
        width: 390,
        marginTop: 50,
        


    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    content: {
        flex: 1,
        padding: 16,
    },
    fotos: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#f2f2f2',
        padding: 45,
        marginTop: 100,
    },
});