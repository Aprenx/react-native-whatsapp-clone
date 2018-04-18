import React, { Component } from 'React';
import { View, Text, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import CampoTexto from './utils/campoTexto';
import { BtnWhiteWithRadius, BtnLink } from './utils/botoes';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {
    
    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
        this.renderBtnAcessar = this.renderBtnAcessar.bind(this)
    }

    renderBtnAcessar() {

        if(this.props.loading_login) {
            return (
                <ActivityIndicator size="large" color="#FFFFFF" />
            );
        }

        return (
            <BtnWhiteWithRadius action={() => this._autenticarUsuario()} label="ACESSAR" />
        )
         
    }

    render() {
        return(
            <ImageBackground  style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <StatusBar
                    backgroundColor="#08563c"
                    barStyle="light-content"
                />
                <View style={estilo.container}>
                    <View style={estilo.containerTitulo}>
                        <Text style={estilo.textoTitulo}> WhatsApp Clone </Text>
                    </View>
                    <View style={estilo.containerInputs}>
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
                        <Text style={[estilo.erroText, (this.props.erroLogin ? {} : estilo.hidden)]}>{this.props.erroLogin}</Text>
                        <BtnLink 
                            action={() => this.props.navigation.navigate('Cadastro')} 
                            label="Ainda não tem cadastro? Cadastre-se"
                        />    
                    </View>
                    <View style={estilo.containerBotao}>
                        {this.renderBtnAcessar()}
                    </View>    
                </View>
            </ImageBackground >
        )
    }
};

//faz o mapeamento dos estados do redux que desejo pegar do reducer para passar para props
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

const estilo = {
    container: {
        flex: 1,
        padding: 10,
    },
    containerTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputs: {
        flex: 3,
    },
    containerBotao: {
        flex: 1,
    },
    textoTitulo: {
        fontSize: 25,
        color: "#FFF",
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#c1c1c1'
    },
    inputs: {
        fontSize: 20,
        color: "#707070",
        height: 50,
    },
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

//o connect junta o mapeamento dos estados e passa como props para o formLogin em tempo de execução
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);
