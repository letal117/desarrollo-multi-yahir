import React from 'react';
import { View, Text,Image, Button,TouchableOpacity, StyleSheet, Dimensions } from "react-native";

var Preguntas=({navigation}) =>{
    var handlelogginScreen =()=>{
      navigation.navigate('Loggin')
      
    }
      return (
        <view style={styles.container}>
          <Text style={styles.color}>Bienvenido al sistema</Text>
          <Image
          source={{
           uri: 'https://img.freepik.com/iconos-gratis/usuario_318-526757.jpg',  
          }}
          style={{width: 600, height: 360, borderRadius: 50,marginLeft:300,marginTop:47,}}
          />
  
          <TouchableOpacity style={styles.button} onPress={handlelogginScreen}>
            <Text style={styles.Text}>SALIR </Text>
          </TouchableOpacity>
        </view>
        
      );
  };
  
  export default  Preguntas;
