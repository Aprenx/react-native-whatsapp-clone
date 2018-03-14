import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import CampoTexto from './utils/campoTexto';
import { BtnDefault } from './utils/botoes';

import { 
    modificaEmail, 
    modificaNome, 
    modificaSenha, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
    
    _cadastraUsuario(){
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({nome, email, senha});
    }

    render(){
        return(
            <ImageBackground  style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <StatusBar
                    backgroundColor="#08563c"
                    barStyle="light-content"
                />
                <View style={estilo.container}>
                    <View style={estilo.containerInputs}>
                        <CampoTexto 
                            modifica={this.props.modificaNome}
                            pHolderColor="#FFF"
                            valor={this.props.nome} 
                            pHolder='Nome' 
                        />
                        <CampoTexto 
                            modifica={this.props.modificaEmail}
                            pHolderColor="#FFF"
                            valor={this.props.email} 
                            pHolder='E-mail' 
                        />
                        <CampoTexto 
                            modifica={this.props.modificaSenha}
                            pHolderColor="#FFF"
                            secure={true}
                            valor={this.props.senha}
                            pHolder='Senha' 
                        />
                    </View>
                    <View style={estilo.containerBotao}>
                        <BtnDefault action={() => this._cadastraUsuario()} label="CADASTRAR" />
                    </View>
                </View>
            </ImageBackground>
        );
    }
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

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaNome, 
        modificaSenha,
        cadastraUsuario
    }
)(FormCadastro);
