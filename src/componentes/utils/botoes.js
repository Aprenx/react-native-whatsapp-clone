import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const BtnDefault = props => (
    <TouchableOpacity style={estilo.botao} onPress={ props.action }> 
        <Text style={estilo.textoBotao}>{props.label}</Text>
    </TouchableOpacity >
)

export const BtnWhiteWithRadius = props => (
    <TouchableOpacity style={estilo.botaoWhiteWithRadius} onPress={ props.action }> 
        <Text style={estilo.textoBotaoWhite}>{props.label}</Text>
    </TouchableOpacity >
)

export const BtnLink = props => (
    <TouchableOpacity onPress={ props.action } >
        <Text style={estilo.textLink}>{props.label}</Text>
    </TouchableOpacity>
)

const estilo = {
    botao: {
        backgroundColor: "#08563c",
        padding: 10,
        borderRadius: 25,
    },
    textoBotao: {
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: '400'
    },
    botaoWhiteWithRadius: {
        backgroundColor: "#FFF",
        borderRadius: 50,
        padding: 10,
    },
    textoBotaoWhite: {
        fontSize: 18,
        color: "#08563c",
        textAlign: "center",
        fontWeight: '600',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#c1c1c1'
    },
    textLink: {
        fontSize: 20,
        color: '#FFF'
    },
}