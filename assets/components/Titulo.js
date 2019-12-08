import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';

const Titulo = props =>(
  
  <Text style={styles.titulo}>{props.children}</Text>
);

const styles=StyleSheet.create({
  titulo:{  
    padding: 20,
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    backgroundColor: '#C71585',
    color:'white',
    textAlign: 'center',
  }
});

export default Titulo;