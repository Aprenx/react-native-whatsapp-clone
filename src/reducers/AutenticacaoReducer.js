const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_email': return { ...state, email: action.payload  };
        case 'modifica_senha': return { ...state, senha: action.payload  };
        case 'modifica_nome': return { ...state, nome: action.payload  };
        case 'cadastro_usuario_sucesso': return { ...state, nome: '', senha: ''};
        case 'cadastro_usuario_erro':
            let msgErroCad = '';
            switch(action.payload){
                case 'auth/email-already-in-use': 
                    msgErroCad = 'O email já está sendo usado em outra conta!'; break;
                case 'auth/invalid-email': 
                    msgErroCad = 'O formato do email é inválido!'; break;
                case 'auth/operation-not-allowed': 
                    msgErroCad = 'O usuário está desabilitado!'; break;
                case 'auth/weak-password': 
                    msgErroCad = 'A senha precisa ter no mínimo 6 digitos!'; break;
                default: msgErroCad = 'Erro desconhecido'; break;
            }
            return { ...state, erroCadastro: msgErroCad  };
        case 'login_usuario_erro':
            console.log('entrou no reducer');
            let msgErroLogin = '';
            switch(action.payload){
                case 'auth/user-disabled': 
                    msgErroLogin = 'Usuário está desabilitado.'; break;
                case 'auth/invalid-email': 
                    msgErroLogin = 'O formato do email é inválido!'; break;
                case 'auth/user-not-found': 
                    msgErroLogin = 'O email não consta na base de dados!'; break;
                case 'auth/wrong-password': 
                    msgErroLogin = 'A senha está incorreta!'; break;
                default: msgErroLogin = 'Erro desconhecido'; break;
            }
            return { ...state, erroLogin: msgErroLogin  };
        default: return state;
    }
}

/*
* SPREAD: ...state esta sendo usado pois ele retorna todo o estado anterior e 
com o segundo parametro sobrepoe de acordo com a KEY 
*/