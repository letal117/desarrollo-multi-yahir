import React from 'react';
import {View, Text, Image, ScrollView,TouchableOpacity , TextInput, StyleSheet} from 'react-native';



const logginScreen = ({navigation}) => {
  const handlehomeScreen =()=>{
   navigation.navigate('home')
  }

 

  return (
    <ScrollView>
      
    <View style={styles.container}>
      <Text style={styles.color}>Iniciar Sesion</Text>
       
        <Image
        source={{
         uri: 'https://img.freepik.com/iconos-gratis/usuario_318-526757.jpg',  
        }}
        style={{width: 200, height: 200}}
        />
      
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto"
        }}
        placeholder="usuario"
      
      />
      
       <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto" 
        }}
        placeholder="contraseña"
      />

        <TouchableOpacity style={styles.button} onPress={handlehomeScreen}>
          <Text style={styles.Text}>Entrar</Text>
        </TouchableOpacity>

       

       
        
    </View> 
    </ScrollView>
   
  );
};



 const styles= StyleSheet.create({
  container: {
   marginTop: 5,
   alignItems: "center",
   backgroundColor: '#c3efd',
   height: 'auto'
  }, 
  color:{
    color:'black',
    fontWeight: 'bold',
    fontSize:30,
  },
  button: {
        
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
          alignItems: "center",
          textAlign: "center",
          borderRadius: 5,
          marginTop:10,
          width: "auto",
          backgroundColor: 'gren',
        }
        
});

export default logginScreen;