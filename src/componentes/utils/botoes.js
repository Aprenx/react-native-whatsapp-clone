import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const BtnDefault = props => (
    <TouchableOpacity style={estilo.botao} onPress={ props.action ? () => props.action() : () => false}> 
        <Text style={estilo.textoBotao}>{props.label}</Text>
    </TouchableOpacity >
)

export const BtnLink = props => (
    <TouchableOpacity onPress={() => props.action()} >
        <Text style={estilo.textLink}>{props.label}</Text>
    </TouchableOpacity>
)

const estilo = {
    botao: {
        backgroundColor: "#08563c",
        padding: 8,
        borderRadius: 5,
    },
    textoBotao: {
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: '600'
    },
    textLink: {
        fontSize: 20,
        color: '#FFF'
    },
}