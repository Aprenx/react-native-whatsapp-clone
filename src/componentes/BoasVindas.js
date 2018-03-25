import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import { BtnWhiteWithRadius } from './utils/botoes';

export default props => (
    <ImageBackground source={require('../imgs/bg.png')} style={estilo.container} >
        <View style={estilo.imageView}>
            <Text style={estilo.textBoasVindas}>Seja Bem-Vindo</Text>
            <Image source={require('../imgs/logo.png')} />
        </View>
        <View style={estilo.btnView}>
            <BtnWhiteWithRadius action={() => props.navigation.navigate('Login')}  label="AVANÇAR" />
        </View>
    </ImageBackground>
);

const estilo = {
    container: {
        flex: 1,
        padding: 15,
        width: null,
    },
    textBoasVindas: {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 35,
        fontWeight: '600',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#a0a0a0'
    },
    imageView: { 
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView: { flex: 1, },
}