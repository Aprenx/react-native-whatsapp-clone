import React from 'react';
import { TextInput } from 'react-native';

export default props => (
    <TextInput
        onChangeText={texto => props.modifica(texto)}
        value={props.valor}
        underlineColorAndroid="#08563c" 
        selectionColor="#08563c" 
        style={estilo.inputs} 
        placeholder={props.pHolder}
        secureTextEntry={ props.secure ? true : false }
    /> 
);

const estilo = {
    inputs: {
        fontSize: 20,
        color: "#707070",
        height: 50,
    }
}