import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import Titulo from '../../assets/components/Titulo';

const SubCabecalho = props => {
  return(
    <View 
    style={{...styles.cabPadrao,
    ...Platform.select({
      ios: styles.cabIOS,
      android: styles.cabAndroid
    })
    }}>

    <Text style={styles.titulo}>{props.title}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  cabPadrao:{
    width:'100%',
    height: 90,
    paddingTop: 10,
  },

cabIOS: {},
cabAndroid:{},
titulo:{
  color: Platform.OS === 'ios'? 'grey':'white',
},
});