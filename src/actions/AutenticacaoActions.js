//ActionCreator é a função e a Action é o retorno dessa função
//cada ActionCreator precisa retornar um objeto literal de forma clara
//a estrutura envolve uma estrutura com uma chave com o nome type
//payload: envio da informação da informação que sera utilizada dentro do reducer para evoluir o estado da aplicação
//payload nao é o nome obrigatorio mas esta como sugestão na doc

import firebase from 'firebase';

export const modificaEmail = (texto) => {
    return  {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = ({nome, email, senha}) => {
    return dispatch => {
        /*dispatch é um objeto literal bem definido que quando for executado, será devolvido para store */
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => cadastroUsuarioSucesso(dispatch))
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'sucesso' });
}

const cadastroUsuarioErro = (erro, dispatch) => {
    console.log(erro);
    dispatch ({ type: 'cadastro_usuario_erro', payload: erro.code });
}