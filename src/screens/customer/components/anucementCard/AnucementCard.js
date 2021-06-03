import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

import {Layout, Input, Text, Button, Icon, MenuItem, OverflowMenu } from '@ui-kitten/components';

import Styles from './AnuncementCardStyles';
import MainStyles from '../../../../shared/styles/mainStyles'

const AnuncementCard = props => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

       const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
      };
    
      const renderToggleButton = () => (
         <View
        style={Styles.adsLayout1Preview}>
        <TouchableWithoutFeedback 
            onPress={() => setVisible(true)}
        >
        <Image
          style={Styles.adsLayout1PrImage}
          source={{ uri: props.imagenes }}
        />
        </TouchableWithoutFeedback>
      </View>
      );
  
return (
    <Layout style={Styles.adsLayout1Box} level="4">
        <OverflowMenu
            anchor={renderToggleButton}
            visible={visible}
            selectedIndex={selectedIndex}
            onSelect={onItemSelect}s
            onBackdropPress={() => setVisible(false)}>
            <MenuItem onPress={() => {props.funedit(props.id)}} title='Editar'/>
            <MenuItem onPress={() => {props.fundelete(props.id)}} title='Eliminar'/>

        </OverflowMenu>
      <View style={Styles.adsLayout1Content}>
        <View style={Styles.adsLayout1TitleContent}>
          <Text style={Styles.adsLayout1TextTitle}>
            {props.title}
          </Text>
          <Text style={Styles.adsLayout1Textlocation}>{props.ubicacion}</Text>
        </View>
        <View style={Styles.adsLayout1Options}>
          <ScrollView style={Styles.featureBoxScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Layout style={Styles.featureBox}>
              <Image
                style={Styles.featureBoxIcon}
                source={require('../../homepage/img/Vector-Price.png')}
              />
              <Text style={Styles.featureBoxText}>${props.pricenight}</Text>
            </Layout>
            <Layout style={Styles.featureBox}>
              <Image
                style={Styles.featureBoxIcon}
                source={require('../../homepage/img/Vector-Door.png')}
              />
              <Text style={Styles.featureBoxText}>{props.numrooms} Habitaciones</Text>
            </Layout>
            <Layout style={Styles.featureBox}>
              <Image
                style={Styles.featureBoxIcon}
                source={require('../../homepage/img/Vector-Meters.png')}
              />
              <Text style={Styles.featureBoxText}>{props.meters}</Text>
            </Layout>
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
};
export default AnuncementCard;
