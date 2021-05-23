import React, {useState} from 'react';
import {View, Image, ScrollView} from 'react-native';

import styles from './LoginStyles';
import MainStyles from '../../../shared/styles/mainStyles';

import {Layout, Input, Text, Button, Icon} from '@ui-kitten/components';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

const LoginScreen = ({navigation}) => {

  const TituloInputState = useInputState();
  const precioInputState = useInputState();
  const habitacionesInputState = useInputState();
  const metrosInputState = useInputState();
  const googleMapsInputState = useInputState();

  return (
    <Layout style={styles.container}>
      <Button style={MainStyles.closeButton} Text="X"/>
      <Layout style={styles.content}>

      </Layout>
      <Image />
    </Layout>
  );
};
export default LoginScreen;
