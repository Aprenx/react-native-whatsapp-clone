const INITIAL_STATE = {
    nome: 'lucca',
    email: 'lucca@teste.com.br',
    senha: '123456'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_email': return { ...state, email: action.payload  };
        case 'modifica_senha': return { ...state, senha: action.payload  };
        case 'modifica_nome': return { ...state, nome: action.payload  };
        default: return state;
    }
}

/*
* SPREAD: ...state esta sendo usado pois ele retorna todo o estado anterior e 
com o segundo parametro sobrepoe de acordo com a KEY 
*/