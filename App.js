import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  //(const [contador, setContador] = useState(0);
  //const [load, setLoad] = useState(false);

  //useEffect(() => {
    //if (load) {
      //console.log('El contador aumentó: ' + contador)
    //} else {
      //setLoad(true)
    //}
  //}, [contador])

  /* <View style={styles.container}>
        <Text>{contador}</Text>
          <Button 
          title="aumentar"
          onPress={() => setContador(contador + 1)}/>
          <Button 
          title="disminuir"
          onPress={() => setContador(contador - 1)}/>
        <StatusBar style="auto" />
      </View> */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Prueba" component={Prueba} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  const [button, setButton] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Inicio de la aplicación</Text>
      <Text>Cambiar color:</Text>
      <TouchableOpacity 
        style={[styles.button, button ? styles.buttonPressed : styles.buttonNotPressed]} 
        onPress={() => setButton(!button)}
      >
        <Text style={styles.buttonText}>Botón de color</Text>
      </TouchableOpacity>
      <Button title="Ir a Prueba" onPress={() => navigation.navigate('Prueba')} />
      <Button title="Ir a Detalle" onPress={() => navigation.navigate('Detalle')} />
    </View>
  )
}

const Prueba = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de prueba de la aplicación</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate('Inicio')} />
    </View>
  )
}

const Detalle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de detalle de la aplicación</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate('Inicio')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonNotPressed: {
    backgroundColor: '#007BFF',
  },
  buttonPressed: {
    backgroundColor: '#ff007b',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});