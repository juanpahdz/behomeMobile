import React, {useState, useEffect} from 'react';
import {
  View,Image,ScrollView
} from 'react-native';

import Toast from 'react-native-toast-message';

import { 
    Layout, 
    Input,
    Text,
    Button,
    Icon,

} from '@ui-kitten/components';

import styles from './EditStyles';
import MainStyles from '../../../../shared/styles/mainStyles'

const EditScreen = ({ route, navigation:{ goBack} }) => {

    const { id, getApart} = route.params;

    const [tituloInputValue, setTituloInputValue] = React.useState('');
    const [priceInputValue, setPriceInputValue] = React.useState('');
    const [roomsInputValue, setRoomsInputValue] = React.useState('');
    const [metersInputValue, setMetersInputValue] = React.useState('');
    const [locationInputValue, setLocationInputValue] = React.useState('');

    const getData = async () => {
        console.log(id)
        const res = await fetch(`http://behomemobileapi.us-east-2.elasticbeanstalk.com/readapartment/${id}`);
        const data = await res.json();

        setTituloInputValue(data.title)
        setPriceInputValue(data.pricenight)
        setLocationInputValue(data.ubicacion)
        setRoomsInputValue(data.numrooms)
        setMetersInputValue(data.meters)
      };

    useEffect(() => {
        getData();
      }, []);
    
      const handleUpdate = async e => {
          const res = await fetch(
            `http://behomemobileapi.us-east-2.elasticbeanstalk.com/updateapartments/${id}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: tituloInputValue,
                pricenight: priceInputValue,
                numrooms: roomsInputValue,
                meters: metersInputValue,
                googlemaps: locationInputValue,
              }),
            },
          );
    
          await res
            .json()
            .then(data => {
              if (typeof data['error'] != 'undefined') {
                Toast.show({
                  type: 'error',
                  text1: data.error,
                  visibilityTime: 3000,
                  autoHide: true,
                });
              } else {
                getApart()
                goBack();
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
      };  

    const RightIcon = (props) => (
        <Icon {...props} name='arrow-ios-forward-outline'/>
      );
      

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
                        Comineza a
                    </Text>
                    <Text style={MainStyles.bigTextLogo} category='h2'>
                        Editar
                    </Text>
                </Layout>
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Modifica el Titulo</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Titulo'
                    onChangeText={text => setTituloInputValue(text)}
                    value={tituloInputValue}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Precio por Noche</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='$1500'
                    onChangeText={text => setPriceInputValue(text)}
                    value={priceInputValue}

                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Numero de Habitaciones</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='4'
                    onChangeText={text => setRoomsInputValue(text)}
                    value={roomsInputValue}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Cantidad de Metros</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Numero de Metros'
                    onChangeText={text => setMetersInputValue(text)}
                    value={metersInputValue}
                />
                <Input
                    textStyle={MainStyles.textInputStyle}
                    label={evaProps => <Text {...evaProps} style={MainStyles.Label}>Link Google Maps</Text>}
                    style={MainStyles.input}
                    size='medium'
                    placeholder='Localizacion'
                    onChangeText={text => setLocationInputValue(text)}
                    value={locationInputValue}
                />
                <Button onPress={() => handleUpdate()} style={MainStyles.primaryButton} accessoryRight={RightIcon}>
                    Enviar
                </Button>
            </Layout>
    </Layout>
    </ScrollView>
  );
};
export default EditScreen;
