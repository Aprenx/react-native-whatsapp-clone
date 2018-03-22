const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_email': return { ...state, email: action.payload  };
        case 'modifica_senha': return { ...state, senha: action.payload  };
        case 'modifica_nome': return { ...state, nome: action.payload  };
        case 'cadastro_usuario_erro':
            let msgErro = '';
            switch(action.payload){
                case 'auth/email-already-in-use': 
                    msgErro = 'O email já está sendo usado em outra conta!'; break;
                case 'auth/invalid-email': 
                    msgErro = 'O formato do email é inválido!'; break;
                case 'auth/operation-not-allowed': 
                    msgErro = 'O usuário está desabilitado!'; break;
                case 'auth/weak-password': 
                    msgErro = 'A senha precisa ter no mínimo 6 digitos!'; break;
                default: msgErro = 'Erro desconhecido'; break;
            }
            return { ...state, erroCadastro: msgErro  };
        default: return state;
    }
}

/*
* SPREAD: ...state esta sendo usado pois ele retorna todo o estado anterior e 
com o segundo parametro sobrepoe de acordo com a KEY 
*/