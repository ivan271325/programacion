import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

function ListadoPantalla({ navigation }) {
    
    return (
  
      <View style={styles.view}>
        <Text style={styles.letra} //cada texto al pulsar manda a la pantalla
          onPress={() => navigation.navigate('Detalles', { nombre: 'Antonio Morlanes', edad: 34, sexo: 'Varón' })}>Antonio Morlanes</Text>
        <Text style={styles.letra}
          onPress={() => navigation.navigate('Detalles', { nombre: 'Margarita Fuentes', edad: 32, sexo: 'Mujer' })}>Margarita Fuentes</Text>
        <Text style={styles.letra}
          onPress={() => navigation.navigate('Detalles', { nombre: 'Manuel Machado', edad: 28, sexo: 'Varón' })}>Manuel Machado</Text>
      </View>
    );
}

export default ListadoPantalla;