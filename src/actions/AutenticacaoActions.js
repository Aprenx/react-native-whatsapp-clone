//ActionCreator é a função e a Action é o retorno dessa função
//cada ActionCreator precisa retornar um objeto literal de forma clara
//a estrutura envolve uma estrutura com uma chave com o nome type
//payload: envio da informação da informação que sera utilizada dentro do reducer para evoluir o estado da aplicação
//payload nao é o nome obrigatorio mas esta como sugestão na doc

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
