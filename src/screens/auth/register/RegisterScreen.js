import React, {useState} from 'react';
import { View, Image, Alert, ScrollView} from 'react-native';

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

const TituloInputState = useInputState();
const precioInputState = useInputState();
const habitacionesInputState = useInputState();
const metrosInputState = useInputState();
const passwordInputState = useInputState();
const googleMapsInputState = useInputState();

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
                {...TituloInputState}
            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Correo Electronico</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='juanphadz@sdas.com'
                {...precioInputState}

            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Pais de Residencia</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='Colombia'
                {...habitacionesInputState}
            />
            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Ciudad de Residencia</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='Medellin'
                {...metrosInputState}
            />

            <Input
                textStyle={MainStyles.textInputStyle}
                label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Contraseña</Text>}
                style={MainStyles.input}
                size='medium'
                placeholder='********'
                secureTextEntry={true}
                {...passwordInputState}
            />

            <Button style={MainStyles.primaryButton}>
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