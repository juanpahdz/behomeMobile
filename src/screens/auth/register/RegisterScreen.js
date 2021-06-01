import React, {useState, useEffect} from 'react';
import { View, Image, Alert, ScrollView, ToastAndroid} from 'react-native';

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
        console.log("working")
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
      data = await res.json();
      console.log(data)
    };

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
            <Text style={styles.LastSettignsText}>
                Tienes ya una cuenta? Inicia Sesion Aqui
            </Text>
        </Layout>
</Layout>
</ScrollView>
}
export default RegisterScreen;