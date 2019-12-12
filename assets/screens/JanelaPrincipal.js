import React from 'react';
import {Text, View, StyleSheet, Image , TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';

export default class JanelaPrincipal extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
  }

 static navigationOptions = {
    headerTitle: 'Guia dos Óleos Essenciais',
    headerTintColor: '#000'    
  };
   
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} 
        source = {{uri: 'http://www.aller.com.br/oleosessenciais/assets/images/oleos-essenciais-504x504.jpg'}}
         />
         
      <ScrollView>
      <View style={styles.menuAcesso}>
         <TouchableOpacity style={styles.botaoImpar,styles.botao, styles.btnOrchid}
                  onPress={() => this.props.navigation.navigate('Aplicacao')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Aplicações
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoPar,styles.botao, styles.btnAzul}
                  onPress={() => this.props.navigation.navigate('Aroma')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Aromas
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoImpar,styles.botao, styles.btnCianoEscuro}
                  onPress={() => this.props.navigation.navigate('Classificacao')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Classificações
         </Text>
         </TouchableOpacity>    

         <TouchableOpacity style={styles.botaoPar,styles.botao, styles.btnCoral}
                  onPress={() => this.props.navigation.navigate('Familia')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Famílias
         </Text>
         </TouchableOpacity>         
         
         <TouchableOpacity style={styles.botaoImpar, styles.botao, styles.btnVerde}
                  onPress={() => this.props.navigation.navigate('Oleo')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Óleos Essenciais
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoPar, styles.botao, styles.btnLaranja}
         onPress={() => this.props.navigation.navigate('Tratamento')}
         >
         <Text style={styles.textoDoBotao}>
         Lista de Tratamentos
         </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.botaoImpar,styles.botao, styles.btnVioleta}
         onPress={() => this.props.navigation.navigate('Diluicao')}
         >
         <Text style={styles.textoDoBotao}>
         Calcular Diluição de Óleos
         </Text>
         </TouchableOpacity>

         </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  top: 10,
    padding: 3,
    backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
            alignItems: 'center',
    justifyContent: 'center',
  },

  menuAcesso: {
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 30,
        alignItems: 'center',
  },
   
  logo: {
    height: 200,
    width: 200,
    borderRadius: 150,
  },
  
    botao: {
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

btnCianoEscuro:{
  backgroundColor: "#008B8B",
},
    btnCoral: {
        backgroundColor:"#FF7F50",
    },  

      btnLaranja: {
          backgroundColor:"#FFA500",
      },      
      
btnOrchid: {
backgroundColor: "#BA55D3",
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