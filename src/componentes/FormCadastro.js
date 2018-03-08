import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

export default props => (
    <View style={estilo.container}>
        <View style={estilo.containerInputs}>
            <TextInput 
                underlineColorAndroid="#08563c" 
                selectionColor="#08563c" 
                style={estilo.inputs} 
                placeholder="Nome" 
            /> 
            <TextInput 
                underlineColorAndroid="#08563c" 
                selectionColor="#08563c" 
                style={estilo.inputs} 
                placeholder="E-mail
            "/> 
            <TextInput 
                underlineColorAndroid="#08563c" 
                selectionColor="#08563c" 
                style={estilo.inputs} 
                placeholder="Senha"
            /> 
        </View>
        <View style={estilo.containerBotao}>
            <TouchableOpacity style={estilo.botao} onPress={() => false}>
                <Text style={estilo.textoBotao}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const estilo = {
    container: {
        flex: 1,
        padding: 10,
    },
    containerInputs: { 
        flex: 4,
        justifyContent: 'center',
    },
    containerBotao: { flex: 1 },
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
    textCadastrar: { fontSize: 20 },
    inputs: {
        fontSize: 20,
        color: "#707070",
        height: 50,
    }
}
