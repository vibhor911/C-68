import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'


export default class Search extends React.Component {
 constructor(){
   super();
   this.state={
     hasCameraPermissions:null,
     scanned:false,
     scannedData:''
   }
 }

getCameraPermissions=async()=>{
  
}


  render() {
    return (
      <View style={{ flex: 1 }}>
<TouchableOpacity style={styles.searchButton}>
        <Text> SearchItems </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  searchButton:{
   margin:10,
    padding:10,
    backgroundColor:'#2190F3'
  }
})