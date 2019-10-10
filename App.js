/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import ProductScreen from './components/ProductScreen';
import ProductDetailsScreen from './components/ProductDetailsScreen';
import ProductAddScreen from './components/ProductAddScreen';
import ProductEditScreen from './components/ProductEditScreen';
import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Product: ProductScreen,
    ProductDetails: ProductDetailsScreen,
    AddProduct: ProductAddScreen,
    EditProduct: ProductEditScreen,
  },
  {
    initialRouteName: 'Product',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

class App extends React.Component {
  render(){
  return (
      <RootContainer />
  );

    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
