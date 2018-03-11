import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import CampoTexto from './utils/campoTexto';
import { BtnDefault } from './utils/botoes';

import { modificaEmail, modificaNome, modificaSenha } from '../actions/AutenticacaoActions';

const formCadastro = props => {
    console.log(props);
    return(
        <View style={estilo.container}>
            <View style={estilo.containerInputs}>
                <CampoTexto 
                    modifica={props.modificaNome}
                    valor={props.nome} 
                    pHolder='Nome' 
                />
                <CampoTexto 
                    modifica={props.modificaEmail}
                    valor={props.email} 
                    pHolder='E-mail' 
                />
                <CampoTexto 
                    modifica={props.modificaSenha}
                    secure={true}
                    valor={props.senha}
                    pHolder='Senha' 
                />
            </View>
            <View style={estilo.containerBotao}>
                <BtnDefault label="CADASTRAR" />
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
}

export default connect(mapStateToProps, { modificaEmail, modificaNome, modificaSenha })(formCadastro);
