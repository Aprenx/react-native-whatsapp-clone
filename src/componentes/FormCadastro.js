import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import CampoTexto from './utils/campoTexto';
import { BtnWhiteWithRadius } from './utils/botoes';

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
        this.renderBtnCadastro = this.renderBtnCadastro.bind(this);
    }

    renderBtnCadastro() {
        if(this.props.loading_cadastro) {
            return ( <ActivityIndicator size="large" color="#FFFFFF" /> )
        }

        return (
            <BtnWhiteWithRadius action={() => this._cadastraUsuario()} label="CADASTRAR" />
        );
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
                        <Text style={[estilo.erroText, (this.props.erroCadastro ? {} : estilo.hidden)]} >{this.props.erroCadastro}</Text>
                    </View>
                    <View style={estilo.containerBotao}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

//estados do redux passados para props para poder usar no componente
const mapStateToProps = state => { 
    console.log(state);
    return(
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
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
    erroText: {
        backgroundColor:'rgba(255,148,148,0.8)',
        padding: 10,
        borderRadius: 5,
        color: '#a50000',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '800',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#c1c1c1',
        marginTop: 5,
        marginBottom: 5
    },
    hidden: {
        width: 0,
        height: 0,
        backgroundColor:'rgba(255,255,255,0)',
    }
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
