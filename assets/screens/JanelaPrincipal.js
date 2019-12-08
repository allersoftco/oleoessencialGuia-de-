import React from 'react';
import {Text, View, StyleSheet, Image , TouchableOpacity, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';

export default class JanelaPrincipal extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
  }

 static navigationOptions = {
    headerTitle: '',
    height: 0,
  };
   
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} 
        source = {{uri: 'http://www.aller.com.br/oleosessenciais/assets/images/oleos-essenciais-504x504.jpg'}}
         />
         <Text style={styles.title}>Guia dos Óleos Essenciais</Text>
         
         <View style={styles.menuAcesso}>
         
         <TouchableOpacity style={styles.botaoImpar,styles.botao, styles.btnAzul}
                  onPress={() => this.props.navigation.navigate('Aroma')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Aromas
         </Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.botaoPar, styles.botao, styles.btnVerde}
                  onPress={() => this.props.navigation.navigate('Oleo')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Óleos Essenciais
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoImpar, styles.botao, styles.btnLaranja}
         onPress={() => this.props.navigation.navigate('Tratamento')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Tratamentos
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoPar,styles.botao, styles.btnVioleta}
         onPress={() => this.props.navigation.navigate('Diluicao')}
         >
         <Text style={styles.textoDoBotao}>
         Calcular Diluição de Óleos
         </Text>
         </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    padding: 24,
    backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
            alignItems: 'center',
    justifyContent: 'center',
  },

  menuAcesso: {
    alignItems: 'center',
    justifyContent: 'center',
  },
   
   
  logo: {
    height: 200,
    width: 200,
    borderRadius: 150,
  },
  
  title:{
  marginTop: 20,
  marginBottom: 20,
  fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
  
    botao: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    padding: 10, 
      marginTop: 20,
  marginBottom: 20,
    },
    
  btnVerde: {
      backgroundColor:"#9ACD32",
  },
  
    btnAzul: {
        backgroundColor:"#79A3E7",
    },
    
      btnLaranja: {
          backgroundColor:"#FFA500",
      },      
      
      btnVioleta: {
      backgroundColor: "#C71585",
      },


  botaoImpar: {
  },

  botaoPar: {
  }, 

  textoDoBotao:{
    textAlign:"center",
    padding:20,
    fontSize:16,
    fontWeight:'none',
    color:"white",
  },      
      
});