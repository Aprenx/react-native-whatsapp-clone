import React from 'React';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import CampoTexto from './utils/campoTexto';
import { BtnDefault, BtnLink } from './utils/botoes';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => {
    console.log(props);
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
                        modifica={props.modificaEmail}
                        pHolderColor="#FFF"
                        valor={props.email} 
                        pHolder='E-mail' 
                    />
                    <CampoTexto 
                        modifica={props.modificaSenha}
                        pHolderColor="#FFF"
                        secure={true}
                        valor={props.senha}
                        pHolder='Senha' 
                    />
                    <BtnLink 
                        action={() => props.navigation.navigate('Cadastro')} 
                        label="Ainda não tem cadastro? Cadastre-se"
                    />    
                </View>
                <View style={estilo.containerBotao}>
                    <BtnDefault label="ACESSAR" />
                </View>    
            </View>
        </ImageBackground >
    )
};

//faz o mapeamento dos estados do redux que desejo pegar do reducer para passar para props
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
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
        flex: 2,
    },
    containerBotao: {
        flex: 2,
    },
    textoTitulo: {
        fontSize: 25,
        color: "#FFF"
    },
    inputs: {
        fontSize: 20,
        color: "#707070",
        height: 50,
    }
}

//o connect junta o mapeamento dos estados e passa como props para o formLogin em tempo de execução
export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
