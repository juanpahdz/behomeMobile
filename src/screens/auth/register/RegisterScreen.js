import React, {useState, useEffect} from 'react';
import { View, Image, Alert, ScrollView, ToastAndroid} from 'react-native';

import Toast from 'react-native-toast-message';

import { 
    Layout, 
    Input,
    Text,
    Button,
    Icon,

} from '@ui-kitten/components';

import MainStyles from '../../../shared/styles/mainStyles';
import styles from './RegisterStyles';

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const RegisterScreen = ({navigation}) => {

const name = useInputState();
const email = useInputState();
const country = useInputState();
const city = useInputState();
const password = useInputState();

    const handleSubmit = async () => {
        if (name.value == '' || email.value == '' || country.value == ''|| city.value == '' || password.value == '') {
            Toast.show({
              type: 'error',
              text1: 'Debes ingresar todos los datos para registrarte',
              visibilityTime: 3000,
              autoHide: true,
            });
          } 
      else{
        const res = await fetch(`http://behomemobileapi.us-east-2.elasticbeanstalk.com/createusers`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: name.value,
          email: email.value,
          city: city.value,
          country: country.value,
          password: password.value,
        }),
      });
      await res
      .json()
      .then(data => {
        console.log(data);
        if (typeof data['error'] != 'undefined') {
          Toast.show({
            type: 'error',
            text1: data.error,
            visibilityTime: 3000,
            autoHide: true,
          });
        } else {
          navigation.navigate('ApartmentsScreen');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    };

    const goToLogin = () =>{
      navigation.navigate('LoginScreen');
    }

    return <ScrollView 
    style={{paddingVertical: 0}}
    showsVerticalScrollIndicator={false}>
    <Layout style={styles.container}>
        <Layout style={styles.layout} level='4'>
            <Layout style={styles.headerHorizontalBaner}>
                <Image
                    style={styles.headerHorizontalBanerImage}
                    source={require('../../customer/homepage/img/frontbaner1.png')}
                />
            </Layout>
            <Layout style={MainStyles.titleLayout}>
                <Text style={MainStyles.subTextLogo}>
                    Bienvenido a
                </Text>
                <Text style={MainStyles.bigTextLogo} category='h2'>
                    beHome
                </Text>
            </Layout>

            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Nombre Completo</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='Jhon Alejandro Medic'
                {...name}
            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Correo Electronico</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='juanphadz@sdas.com'
                {...email}

            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Pais de Residencia</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='Colombia'
                {...country}
            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Ciudad de Residencia</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='Medellin'
                {...city}
            />

            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Contraseña</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='********'
                secureTextEntry={true}
                {...password}
            />

            <Button 
                onPress={() => handleSubmit()}
                style={MainStyles.primaryButton}>
                Registrarse
            </Button>
            <Text onPress={() => goToLogin()} style={styles.LastSettignsText}>
                Tienes ya una cuenta? Inicia Sesion Aqui
            </Text>
        </Layout>
</Layout>
</ScrollView>
}
export default RegisterScreen;