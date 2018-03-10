import React from 'React';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

const formLogin = props => {
    console.log(props);
    return(
        <View style={estilo.container}>
            <View style={estilo.containerTitulo}>
                <Text style={estilo.textoTitulo}> WhatsApp Clone </Text>
            </View>
            <View style={estilo.containerInputs}>
                <TextInput 
                    value={props.email}
                    underlineColorAndroid="#08563c"
                    selectionColor="#08563c" 
                    style={estilo.inputs} 
                    placeholder='E-mail' 
                />
                <TextInput 
                    value={props.senha}
                    underlineColorAndroid="#08563c" 
                    selectionColor="#08563c" 
                    style={estilo.inputs} 
                    placeholder='Senha' 
                />
                <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')} >
                    <Text style={estilo.textCadastrar}>Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={estilo.containerBotao}>
                <TouchableOpacity style={estilo.botao} onPress={() => false}> 
                    <Text style={estilo.textoBotao}>ACESSAR</Text>
                </TouchableOpacity >
            </View>    
        </View>
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
    textoTitulo: {
        fontSize: 25,
    },
    textCadastrar: {
        fontSize: 20,
    },
    inputs: {
        fontSize: 20,
        color: "#707070",
        height: 50,
    }
}

//o connect junta o mapeamento dos estados e passa como props para o formLogin
export default connect(mapStateToProps, null)(formLogin);
