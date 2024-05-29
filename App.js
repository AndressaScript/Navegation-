import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
export default function App() {

  const stack = createStackNavigator();
  return (
    
      <NavigationContainer>

        <stack.Navigator>
          
          <stack.Screen name='Home' component={Home}></stack.Screen>
                    

        </stack.Navigator>
        
      </NavigationContainer>

  );
}
