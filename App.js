import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logginScreen from './screens/logginScreen';
import homeScreen from './screens/homeScreen';
import Preguntas from './screens/PreguntasScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Loggin" component={logginScreen}/>
        <Stack.Screen name="home" component={homeScreen}/>
        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

    


export default App;

