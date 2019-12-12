import React from 'react';
import {
 FlatList, 
 ActivityIndicator,
 Alert,
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 SafeAreaView,
 ScrollView
} from 'react-native';
import Constants from 'expo-constants';

import Titulo from '../components/Titulo';

export default class ListaClassificacao extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  static navigationOptions = {
    headerTitle: 'Classificações',
    headerTintColor: '#F44336'
  };


  componentDidMount(){
    return fetch("http://www.aller.com.br/oleoessencial/table_json.php?t=classificacao")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.classificacaos,
        }, function(){
            
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }  

render(){
    if(this.state.isLoading){
      return(
      <SafeAreaView style={styles.container}>      
      <Titulo>Classificações</Titulo>   
          <ActivityIndicator/>  
        </SafeAreaView>
      )
    }

    return(
      <SafeAreaView style={styles.container}>  

      <Titulo>Classificações</Titulo>

      <ScrollView style={styles.rolagem}>
      <View style={styles.listaWrapper}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={styles.listItem}>
          <Text style={styles.listaItem}>{item.classificacao}</Text>          
          </View>
          }
          keyExtractor={({id_classificacao}, index) => id_classificacao}
        />
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
  },
  rolagem:{
    top: 5,
  },
  listaWrapper:{
    top: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: `lightblue`,
    borderTopWidth:3,
    keyboardShouldPersistTaps: 'handled',
  },
  listaItem:{
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'aliceblue',
    borderColor: '#ccc',
    borderEndWidth: 1,    
    fontWeight: 'bold',
  },
});