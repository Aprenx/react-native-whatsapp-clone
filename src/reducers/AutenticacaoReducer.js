const INITIAL_STATE = {
    nome: 'lucca',
    email: 'lucca@teste.com.br',
    senha: '123456'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    if (action.type === 'modifica_email') {
        return { ...state, email: action.payload  }
    }

    if (action.type === 'modifica_senha') {
        return { ...state, senha: action.payload }
    }
    return state;
}