import React from 'react';
import MainStyles from '../../../shared/styles/mainStyles';
import {View, ScrollView, Dimensions, Image} from 'react-native';
import Styles from './HomePageStyles';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Icon,
} from '@ui-kitten/components';

const HomePage = ({navigation}) => {
  const renderIcon = props => (
    <Icon {...props} fill="#FF595D" name="search-outline" />
  );

  return (
    <Layout>
      <Text style={MainStyles.textLogo} category="h4">
        beHome.com
      </Text>
      <Layout style={Styles.container}>
        <Input
          style={Styles.searchbar}
          placeholder="Encontremos tu próximo hogar"
          value="asdsad"
          accessoryRight={renderIcon}
        />
      </Layout>
      <ScrollView
        horizontal={true}
        contentOffset={{x: Dimensions.get('screen').width - 94, y: 0}}>
        <Layout style={Styles.headerSlider}>
          <View style={Styles.frontBaner}>
            <View style={Styles.frontBanerOverlay}>
              <Text style={Styles.frontBanerSubtitle} category="h7">
                Seleccionado por <Text style={{color: '#FF595D'}}>BeHome</Text>
              </Text>
              <Text style={Styles.frontBanerTitle} category="h5">
                Apartamento Lujoso en Palmas
              </Text>
            </View>
            <Image
              style={Styles.frontBanerImage}
              source={require('./img/frontbaner2.png')}
            />
          </View>
          <View style={Styles.frontBaner}>
            <View style={Styles.frontBanerOverlay}>
              <Text style={Styles.frontBanerSubtitle} category="h7">
                Seleccionado por <Text style={{color: '#FF595D'}}>BeHome</Text>
              </Text>
              <Text style={Styles.frontBanerTitle} category="h5">
                Apartamento Lujoso en Palmas
              </Text>
            </View>
            <Image
              style={Styles.frontBanerImage}
              source={require('./img/frontbaner1.png')}
            />
          </View>
          <View style={Styles.frontBaner}>
            <View style={Styles.frontBanerOverlay}>
              <Text style={Styles.frontBanerSubtitle} category="h7">
                Seleccionado por <Text style={{color: '#FF595D'}}>BeHome</Text>
              </Text>
              <Text style={Styles.frontBanerTitle} category="h5">
                Apartamento Lujoso en Palmas
              </Text>
            </View>
            <Image
              style={Styles.frontBanerImage}
              source={require('./img/frontbaner3.png')}
            />
          </View>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default HomePage;
