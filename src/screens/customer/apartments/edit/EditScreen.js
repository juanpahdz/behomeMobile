import React, {useState} from 'react';
import {
  View,
} from 'react-native';

import { 
    Layout, 
    Input,
    Text 

} from '@ui-kitten/components';

import styles from './EditStyles';

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const EditScreen = ({navigation}) => {

const TituloInputState = useInputState();
const precioInputState = useInputState();
const habitacionesInputState = useInputState();
const metrosInputState = useInputState();
const googleMapsInputState = useInputState();

  return (
    <Layout style={styles.container}>
        <Layout style={styles.layout} level='4'>
            <Text style={{marginBottom: 10}} category='h3'>
                EDITAR EL ANUNCIO
            </Text>
            <Input
                style={styles.input}
                size='medium'
                placeholder='Titulo'
                {...TituloInputState}
            />
            <Input
                style={styles.input}
                size='medium'
                placeholder='Precio'
                {...precioInputState}
            />
            <Input
                style={styles.input}
                size='medium'
                placeholder='Numero de Habitaciones'
                {...habitacionesInputState}
            />
            <Input
                style={styles.input}
                size='medium'
                placeholder='Numero de Metros'
                {...metrosInputState}
            />
            <Input
                style={styles.input}
                size='medium'
                placeholder='Link de google Maps'
                {...googleMapsInputState}
            />
        </Layout>
  </Layout>
  );
};
export default EditScreen;
