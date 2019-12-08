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

export default class ListaOleo extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  static navigationOptions = {
    headerTitle: 'Óleos Essenciais',
    headerTintColor: '#F44336'
  };


  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
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
      <Titulo>Óleos Essenciais</Titulo>   
          <ActivityIndicator/>  
        </SafeAreaView>
      )
    }

    return(
      <SafeAreaView style={styles.container}>      
      <Titulo>Óleos Essenciais</Titulo>

      <ScrollView>
      <View style={styles.listaWrapper}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={styles.listItem}>
          <Text style={styles.listaItem}>{item.title}</Text>
          <Text style={styles.listaDescription}>{item.releaseYear}</Text>
          </View>
          }
          keyExtractor={({id}, index) => id}
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
    padding: 24,
    backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
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
  listaDescription:{
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  }
});