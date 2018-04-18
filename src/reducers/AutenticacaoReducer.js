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
} from '../actions/types'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MODIFICA_EMAIL: 
            return { ...state, email: action.payload  };
        case MODIFICA_SENHA: 
            return { ...state, senha: action.payload  };
        case MODIFICA_NOME: 
            return { ...state, nome: action.payload  };
        case CADASTRO_USUARIO_SUCESSO: 
            return { ...state, nome: '', senha: '', loading_cadastro: false};
        case CADASTRO_USUARIO_ERRO: 
            return { ...state, erroCadastro: msgErro(action.payload), loading_cadastro: false };
        case LOGIN_USUARIO_ERRO:  
            return { ...state, erroLogin: msgErro(action.payload), loading_login: false };
        case LOGIN_EM_ANDAMENTO: 
            return { ...state, loading_login: true };
        case CADASTRO_EM_ANDAMENTO: 
            return { ...state, loading_cadastro: true };
        default: 
            return state;
    }
}

function msgErro(codigo) {
    let erro = '';
    switch(codigo){
        case 'auth/user-disabled': 
            erro = 'Usuário está desabilitado.'; break;
        case 'auth/user-not-found': 
            erro = 'O email não consta na base de dados!'; break;
        case 'auth/wrong-password': 
            erro = 'A senha está incorreta!'; break;
        case 'auth/email-already-in-use': 
            erro = 'O email já está sendo usado em outra conta!'; break;
        case 'auth/invalid-email': 
            erro = 'O formato do email é inválido!'; break;
        case 'auth/operation-not-allowed': 
            erro = 'O usuário está desabilitado!'; break;
        case 'auth/weak-password': 
            erro = 'A senha precisa ter no mínimo 6 digitos!'; break;
        default: erro = 'Erro desconhecido'; break;
    }
    return erro;
}

/*
* SPREAD: ...state esta sendo usado pois ele retorna todo o estado anterior e 
com o segundo parametro sobrepoe de acordo com a KEY 
*/