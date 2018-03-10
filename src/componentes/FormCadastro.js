import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail } from '../actions/AutenticacaoActions';

const formCadastro = props => {
    console.log(props);
    return(
        <View style={estilo.container}>
            <View style={estilo.containerInputs}>
                <TextInput 
                    value={props.nome}
                    underlineColorAndroid="#08563c" 
                    selectionColor="#08563c" 
                    style={estilo.inputs} 
                    placeholder="Nome" 
                /> 
                <TextInput 
                    onChangeText={texto => props.modificaEmail(texto)}
                    value={props.email}
                    underlineColorAndroid="#08563c" 
                    selectionColor="#08563c" 
                    style={estilo.inputs} 
                    placeholder="E-mail
                "/> 
                <TextInput 
                    value={props.senha}
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
    );
}

const mapStateToProps = state => { 
    console.log(state);
    return(
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }
    )
}

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

export default connect(mapStateToProps, { modificaEmail })(formCadastro);
