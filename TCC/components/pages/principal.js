import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Home from "./barbearia1";

export default function Principal() {
    const [page, setPage] = React.useState('principal');

    const renderPage = () => {
        if (page === 'principal') {
            return (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={styles.headerImage}
                        />
                        <Text style={styles.headerText}>Barbearia Franco</Text>
                    </View>

                    <View style={styles.container}>

                        <View style={styles.content} />
                        <View style={styles.fotos}>
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/4625631/pexels-photo-4625631.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                                style={styles.fotoImage}
                            />
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/4625624/pexels-photo-4625624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                style={styles.fotoImage}
                            />
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                                style={styles.fotoImage}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => setPage('barbearia1')}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        
                        <Text style={styles.text}>
                            {'\n'}
                          {'\n'}
                            
                            
                        </Text>

                    </View>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: 'https://picsum.photos/200/300' }}
                            style={styles.headerImage}
                        />
                        <Text style={styles.headerText}>Barbearia DoHenrique</Text>
                    </View>

                    <View style={styles.container}>

                        <View style={styles.content} />
                        <View style={styles.fotos}>
                            <Image
                                source={{ uri: 'https://picsum.photos/200/300' }}
                                style={styles.fotoImage}
                            />
                            <Image
                                source={{ uri: 'https://picsum.photos/200/301' }}
                                style={styles.fotoImage}
                            />
                            <Image
                                source={{ uri: 'https://picsum.photos/200/302' }}
                                style={styles.fotoImage}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => setPage('barbearia1')}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>


                    </View>

                </ScrollView>
            );
        } else if (page === 'home') {
            return <Home />;
        } else if (page === 'barbearia1') {
            return <barbearia1 />;
        }
    };

    return (
        <View style={styles.container}>
            {renderPage()}
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'red',
        padding: 16,
        width: '100%',
        alignItems: 'center',
    },
    headerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        color: 'black',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
    },
    section: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    fotos: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginTop: 20,
        justifyContent: 'space-around',
    },
    fotoImage: {
        width: 100,
        height: 200,
        marginLeft: 30,
        borderRadius: 50,

    },
    button: {
        backgroundColor: '#003818',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    boxSpacing: {
        marginTop: 20, // Adiciona 20 unidades de espaçamento acima
    },
});
