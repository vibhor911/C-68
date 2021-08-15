import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TransactionScreen from './screens/BookTransactionScren';
import SearchScreen from './screens/SearchScreen';



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>
        <AppContainer />
    //   </Text>
    // </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen },
  Search: { screen: SearchScreen },
});

const AppContainer = createAppContainer(TabNavigator);
