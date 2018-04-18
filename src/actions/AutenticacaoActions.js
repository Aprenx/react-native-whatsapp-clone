//ActionCreator é a função e a Action é o retorno dessa função
//cada ActionCreator precisa retornar um objeto literal de forma clara
//a estrutura envolve uma estrutura com uma chave com o nome type
//payload: envio da informação da informação que sera utilizada dentro do reducer para evoluir o estado da aplicação
//payload nao é o nome obrigatorio mas esta como sugestão na doc

import firebase from 'firebase';
import NavigationHelper from '../navigation/NavigationHelper';
import b64 from 'base-64';
import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_LOGIN,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './types'

export const modificaEmail = (texto) => {
    return  {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = ({nome, email, senha}) => {
    return dispatch => {
        dispatch ({ type: CADASTRO_EM_ANDAMENTO });
        /*dispatch é um objeto literal bem definido que quando for executado, será devolvido para store */
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                /*no sucesso do cadastro, eu cadastro o email e nome no database*/
                let emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch))
                
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO });

    NavigationHelper.navigate('BoasVindas');
}

const cadastroUsuarioErro = (erro, dispatch) => {
    console.log(erro);
    dispatch ({ type: CADASTRO_EM_ANDAMENTO })
    dispatch ({ type: CADASTRO_USUARIO_ERRO, payload: erro.code });
}

export const autenticarUsuario = ({ email, senha }) => {
    console.log('entrou no dispatch');
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch ({ type: LOGIN_USUARIO_SUCESSO });

    NavigationHelper.navigate('Principal');
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: LOGIN_USUARIO_ERRO, payload: erro.code });
}