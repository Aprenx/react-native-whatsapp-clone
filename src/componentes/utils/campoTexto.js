import React from 'react';
import { TextInput } from 'react-native';

export default props => (
    <TextInput
        onChangeText={texto => props.modifica(texto)}
        value={props.valor}
        underlineColorAndroid="#FFF" 
        selectionColor="#FFF"
        placeholderTextColor={props.pHolderColor}
        style={estilo.inputs} 
        placeholder={props.pHolder}
        secureTextEntry={ props.secure ? true : false }
    /> 
);

const estilo = {
    inputs: {
        fontSize: 20,
        color: "#FFF",
        height: 50,
    }
}