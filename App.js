import React, { useState, useEffect } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList  } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

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
        <Stack.Screen name="Api" component={Api} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  const [button, setButton] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inicio de la aplicación</Text>
      <Text>Cambiar color:</Text>
      <TouchableOpacity 
        style={[styles.button, button ? styles.buttonPressed : styles.buttonNotPressed]} 
        onPress={() => setButton(!button)}
      >
        <Text style={styles.buttonText}>Botón de color</Text>
      </TouchableOpacity>
      <Button title="Ir a Api" onPress={() => navigation.navigate('Api')} />
      <Button title="Ir a Detalle" onPress={() => navigation.navigate('Detalle')} />
    </View>
  )
}

const Api = ({ navigation }) => {
  const [chiste, setChiste] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,explicit&format=txt')
      .then((response) => response.text())
      .then((text) => setChiste(text))
      .catch((error) => console.error(error))
      .finally(() => setCargando(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pantalla de visualizacion de la Api</Text>
      <Text style={styles.text}>API sobre chistes de programación</Text>
      {cargando ? (
        <Text>Cargando...</Text>
      ) : (
        <Text>{chiste}</Text>
      )}
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
    marginTop: verticalScale(20),
    padding: moderateScale(20),
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: moderateScale(10),
    marginVertical: verticalScale(8),
    marginHorizontal: scale(16),
  },
  title: {
    fontSize: scale(14),
  },
  body: {
    fontSize: scale(12),
  },
  text: {
    fontSize: scale(14),
  },
});