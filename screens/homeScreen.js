import React from 'react';
import { View, Text,Image, Button,TouchableOpacity, StyleSheet, Dimensions } from "react-native";

var HomeScreen =({navigation}) =>{
  var handleLogginScreen =()=>{
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

       <TouchableOpacity style={styles.button} onPress={handleLogginScreen}>
          <Text style={styles.Text}>SALIR </Text>
        </TouchableOpacity>
      </view>
      
    );
};

export default  HomeScreen;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'green'
 }, 
 color:{
    
    color: '#black',
    width: "20%",
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '37%',
    padding: "3%",
    fontSize:  30,
    marginTop: '40%'
    
 },
  body: {
    flex: 1,
    backgroundColor: '#009387'
  },
  button: {
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:40,
    marginLeft:600,
    width: 100,
    backgroundColor: '#808080',
    fontSize:23,
    fontWeight: 'bold',
  },
  Text: {
    height: 40,
  
    fontSize: 19,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop:10,
    with:"auto",
    fontWeight: 'bold',
    justifyContent:'center',
  }

})

