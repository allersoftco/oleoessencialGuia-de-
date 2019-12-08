import React from 'react';
import {
 Alert,
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';
import Constants from 'expo-constants';

import Titulo from '../components/Titulo';

export default class CalcularDiluicao extends React.Component {
  constructor(props){
    super(props)
    this.state = {quantidadeOleoVegetal:0.00,percentagemDiluicao: 0.00,resultado:0.00,resultadoText:"ml"}
    this.calcular = this.calcular.bind(this);
  }
  
  static navigationOptions = {
    headerTitle: 'Calcular Diluição',
    headerTintColor: '#F44336'
  };

  calcular(){
    if((this.state.quantidadeOleoVegetal>0.00) && (this.state.percentagemDiluicao>0.00)){
       let calcDiluicao = (this.state.quantidadeOleoVegetal * this.state.percentagemDiluicao)/100;
   let s = this.state;
   s.resultado = calcDiluicao;

    this.setState(s);
  }else{
 Alert.alert("Os valores informados parecem inválidos. Favor verificar");
  }
  }

  render() {
    return (
      
      <View style={styles.container}>
      
      <Titulo>Calcular Diluição</Titulo>
      
      <View>
        <Text style={styles.textoGrande}>Quantos ml de óleo vegetal que será utilizada?</Text>
      </View>

        <View style={styles.entrada}>            
          <TextInput 
          autoCapitalize="none" 
          placeholder="exemplo: 30" 
          keyboardType="numeric" style={styles.input} 
          onChangeText={(quantidadeOleoVegetal)=>{this.setState({quantidadeOleoVegetal})}}/>
                  </View>

      <View>
<Text style={styles.textoGrande}>Qual a porcentagem de diluição do óleo essencial desejada?</Text>
      </View>

        <View style={styles.entrada}>                  
        
          <TextInput 
          autoCapitalize="none" 
          placeholder="exemplo: 5" 
          keyboardType="numeric" 
          style={styles.input} 
          onChangeText={(percentagemDiluicao)=>{this.setState({percentagemDiluicao})}}/>
        </View>
                
        
        <TouchableOpacity 
        style={styles.button} 
        onPress={this.calcular}
        >
        <Text style={styles.buttontext}>Calcular Diluição</Text>
        </TouchableOpacity>
        
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:35,
    textAlign:"center",
    width:"100%",
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    borderColor: 'grey',
    borderWidth:1,
  },
  textoGrande:{
    textAlign:"center",
    fontSize:20,
    color: 'grey',
  },
  button:{
    top: 25,
   backgroundColor:"#9ACD32",
   borderRadius: 20,
  },
  buttontext:{
    textAlign:"center",
    padding:20,
    fontSize:25,
    fontWeight:'bold',
    color:"green",
  },
  resultado:{
    top: 25,
    marginTop: 25,
    alignSelf:"center",
    color:"lightgray",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});