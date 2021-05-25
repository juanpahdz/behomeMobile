import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableWithoutFeedback, Link} from 'react-native';

import styles from './LoginStyles';
import MainStyles from '../../../shared/styles/mainStyles';

import {Layout, Input, Text, Button, Icon} from '@ui-kitten/components';

const LoginScreen = ({navigation}) => {

const [value, setValue] = React.useState('');
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

  const usernameInputState = useInputState();
  const passwordInputState = useInputState();
  const habitacionesInputState = useInputState();
  const metrosInputState = useInputState();
  const googleMapsInputState = useInputState();

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
            {...usernameInputState}
          />
         <Input
            value={value}
            style={styles.logininputstyle}
            textStyle={styles.loginTextStyle}
            placeholder='Ingresa tu Contraseña'
            placeholderStyle={styles.loginTextStyle}
            placeholderTextColor="white"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setValue(nextValue)}
            />
        </Layout>
        <Layout style={styles.LastSettigns}>
            <Button onPress={() => goToRegister()} style={[MainStyles.primaryButton, {marginVertical:0}]}>
                Iniciar Session
            </Button>
            <Text style={styles.LastSettignsText}>
                No estas registrado? Regístrate aquí
            </Text>
        </Layout>
      </Layout>
      <Image source={require('./img/loginscreen.jpg')} />
    </Layout>
  );
};
export default LoginScreen;
