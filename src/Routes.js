import { StackNavigator } from 'react-navigation';

import FormLogin from './componentes/FormLogin.js';
import FormCadastro from './componentes/FormCadastro.js';

export default Routes = StackNavigator(
  {
    Login: { 
        screen: FormLogin,
        navigationOptions: ({ navigation }) => ({
            header: false,
        }),
    },
    Cadastro: {
        screen: FormCadastro,
        navigationOptions: ({ navigation }) => ({
            title: 'Cadastro',
        }),
    },
  },
  {
    initialRouteName: 'Login',
  }
);