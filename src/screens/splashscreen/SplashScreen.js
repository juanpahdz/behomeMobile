import React, {useEffect} from 'react';
import { View, Image, Alert, ScrollView} from 'react-native';
import { 
    Layout, 
    Input,
    Text,
    Button,
    Icon,
} from '@ui-kitten/components';

import MainStyles from '../../shared/styles/mainStyles';
import Styles from './SplashStyles';


const RegisterScreen = ({navigation}) => {

    const waitingTimeSplash = () =>{
        setTimeout(() =>{
            navigation.navigate('HomePage');
        }, 3000);
    }
    useEffect(()=>{
        waitingTimeSplash();
    }, []);

    return <Layout style={Styles.container}>
        <Image style={Styles.image} source={require('./img/behomelogoanimation.gif')} />
    </Layout>
}
export default RegisterScreen;