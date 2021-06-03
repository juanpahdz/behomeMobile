import React, {useState, useEffect} from 'react';
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

import Styles from './SimpleBoxStyle';

const SimpleBox = (props) => {

  return (
    <View style={Styles.recentSearchBox}>
        <View style={Styles.recentSearchImageBox}>
        <Image
            style={Styles.recentSearchImage}
            source={require('../../homepage/img/frontbaner1.png')}
        />
        </View>
        <Layout style={Styles.recentSearchContent}>
        <Text style={Styles.recentSearchTitle}>
            {props.titulo}
        </Text>
        <Text style={Styles.recentSearchLocation}>
            {props.location}
        </Text>
        <View style={Styles.recentSearchStars}>
            <Text style={{marginTop: 10, color: "#FF595D"}}>
                ${props.precio}
            </Text>
        </View>
        </Layout>
    </View>
  );
};
export default SimpleBox;