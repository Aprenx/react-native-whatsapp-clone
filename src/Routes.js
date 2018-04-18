import { StackNavigator } from 'react-navigation';

import FormLogin from './componentes/FormLogin.js';
import FormCadastro from './componentes/FormCadastro.js';
import BoasVindas from './componentes/BoasVindas.js';
import Principal from './componentes/Principal.js';

export default Routes = StackNavigator(
  {
    Login: { 
        screen: FormLogin,
        navigationOptions: ({ navigation }) => ({
            header: false,
        }),
    },
    Principal: { 
        screen: Principal,
        navigationOptions: ({ navigation }) => ({
            header: false,
        }),
    },
    BoasVindas: { 
        screen: BoasVindas,
        navigationOptions: ({ navigation }) => ({
            header: false,
        }),
    },
    Cadastro: {
        screen: FormCadastro,
        navigationOptions: ({ navigation }) => ({
            title: 'Cadastro',
            headerStyle: {
                backgroundColor: '#08563c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }),
    },
  },
  {
    initialRouteName: 'Login',
  }
);