import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import JanelaPrincipal from './assets/screens/JanelaPrincipal';
import ListaAroma from './assets/screens/ListaAroma';
import ListaOleo from './assets/screens/ListaOleo';
import ListaTratamento from './assets/screens/ListaTratamento';
import CalcularDiluicao from './assets/screens/CalcularDiluicao';

const RootStack = createStackNavigator(
  {
    Home: JanelaPrincipal,
    Aroma: ListaAroma,
    Oleo: ListaOleo,
    Tratamento: ListaTratamento,
    Diluicao: CalcularDiluicao,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
