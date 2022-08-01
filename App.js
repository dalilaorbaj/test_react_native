import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Modal from "react-native-modal";
import React, { useState } from "react";



export default function App() {

const [visible, setVisible] = useState(false);

const toggleModal = () => {
  setVisible(!visible);
  
};

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Boton' onPress={()=>toggleModal()}></Button>
      <Modal isVisible={visible}>
        <Text style={styles.text}>Jeje modal</Text>
        <Button title='Chau modal' onPress={()=>toggleModal()}></Button>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ffff', 
  
  }
});
