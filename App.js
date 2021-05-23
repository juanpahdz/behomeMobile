import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import HomePage from './src/screens/customer/homepage/HomePageScreen'
import LoginPage from './src/screens/auth/login/LoginScreen'
import RegisterPage from './src/screens/auth/register/RegisterScreen'
import EditPage from './src/screens/customer/apartments/edit/EditScreen'

const Stack = createStackNavigator(); //inicializa la navegación

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditScreen"
          component={EditPage}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <App />
    </ApplicationProvider>
  </>
);
