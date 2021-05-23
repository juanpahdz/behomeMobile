import React, {useState} from 'react';
import {
  View,Image,ScrollView
} from 'react-native';

import { 
    Layout, 
    Input,
    Text,
    Button,
    Icon,

} from '@ui-kitten/components';

import styles from './EditStyles';
import MainStyles from '../../../../shared/styles/mainStyles'

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};



const EditScreen = ({navigation}) => {

    const RightIcon = (props) => (
        <Icon {...props} name='arrow-ios-forward-outline'/>
      );

const TituloInputState = useInputState();
const precioInputState = useInputState();
const habitacionesInputState = useInputState();
const metrosInputState = useInputState();
const googleMapsInputState = useInputState();

  return (
    <ScrollView 
        style={{paddingVertical: 0}}
        showsVerticalScrollIndicator={false}>
        <Layout style={styles.container}>
            <Layout style={styles.layout} level='4'>
                <Layout style={styles.headerHorizontalBaner}>
                    <Image
                        style={styles.headerHorizontalBanerImage}
                        source={require('../../homepage/img/frontbaner1.png')}
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
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Modifica el Titulo</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Titulo'
                    {...TituloInputState}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Precio por Noche</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='$1500'
                    {...precioInputState}

                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Numero de Habitaciones</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='4'
                    {...habitacionesInputState}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Cantidad de Metros</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Numero de Metros'
                    {...metrosInputState}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Link Google Maps</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Link de google Maps'
                    {...googleMapsInputState}
                />
                <Button style={MainStyles.primaryButton} accessoryRight={RightIcon}>
                    Enviar
                </Button>
            </Layout>
    </Layout>
    </ScrollView>
  );
};
export default EditScreen;
