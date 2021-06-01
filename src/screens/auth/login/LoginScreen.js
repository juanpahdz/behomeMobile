import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableWithoutFeedback, Link} from 'react-native';

const API = process.env.REACT_APP_API;

import styles from './LoginStyles';
import MainStyles from '../../../shared/styles/mainStyles';

import {Layout, Input, Text, Button, Icon} from '@ui-kitten/components';

const LoginScreen = ({navigation}) => {

const [secureTextEntry, setSecureTextEntry] = React.useState(true);

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};


const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const goToRegister = () =>{
    navigation.navigate('RegisterScreen');
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const userIcon = (props) => (
    <Icon {...props} name="person-outline"/>
  );

  const username = useInputState();
  const password = useInputState();

  const handleSubmit = async (e) => {
  const res = await fetch(`http://behomemobileapi.us-east-2.elasticbeanstalk.com/login`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username.value,
        password: password.value,
      }),
    });
    data = await res.json();
    console.log(data)
  };

  return (
    <Layout style={styles.container}>
      {/* <Button style={MainStyles.closeButton}>
        <Text style={MainStyles.closeButton}>X</Text>
      </Button> */}
      <Layout style={styles.content}>
        <Layout style={styles.titleLayout}>
          <Text style={styles.textLogo} category="h1">
            beHome
          </Text>
          <Text style={styles.textSubLogo}>
            Descubre lugares maravillosos para vivir
          </Text>
        </Layout>

        <Layout style={styles.loginformbox}>
          <Input
            textStyle={styles.loginTextStyle}
            style={styles.logininputstyle}
            accessoryRight={userIcon}
            placeholderTextColor="white"
            placeholderStyle={styles.loginTextStyle}
            size="medium"
            placeholder="Ingresa tu correo electronico"
            {...username}
          />
         <Input
            style={styles.logininputstyle}
            textStyle={styles.loginTextStyle}
            placeholder='Ingresa tu Contraseña'
            placeholderStyle={styles.loginTextStyle}
            placeholderTextColor="white"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            {...password}
            />
        </Layout>
        <Layout style={styles.LastSettigns}>
            <Button onPress={() => handleSubmit()} style={[MainStyles.primaryButton, {marginVertical:0}]}>
                Iniciar Session
            </Button>
            <Text onPress={() => goToRegister()} style={styles.LastSettignsText}>
                No estas registrado? Regístrate aquí
            </Text>
        </Layout>
      </Layout>
      <Image source={require('./img/loginscreen.jpg')} />
    </Layout>
  );
};
export default LoginScreen;
