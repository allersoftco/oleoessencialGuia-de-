import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import JanelaPrincipal from './assets/screens/JanelaPrincipal';
import ListaAplicacao from './assets/screens/ListaAplicacao';
import ListaAroma from './assets/screens/ListaAroma';
import ListaClassificacao from './assets/screens/ListaClassificacao';
import ListaFamilia from './assets/screens/ListaFamilia';
import ListaOleo from './assets/screens/ListaOleo';
import ListaTratamento from './assets/screens/ListaTratamento';
import CalcularDiluicao from './assets/screens/CalcularDiluicao';

const RootStack = createStackNavigator(
  {
    Home: JanelaPrincipal,
    Aplicacao: ListaAplicacao,
    Aroma: ListaAroma,
    Classificacao: ListaClassificacao,
    Familia: ListaFamilia,
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
