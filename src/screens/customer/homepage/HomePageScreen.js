import React from 'react';
import MainStyles from '../../../shared/styles/mainStyles';
import {View, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import Styles from './HomePageStyles';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Icon,
  Button,
} from '@ui-kitten/components';

const HomePage = ({navigation}) => {
  const renderIcon = props => (
    <Icon {...props} fill="#FF595D" name="search-outline" />
  );

  const goToEdit = () =>{
    navigation.navigate('EditScreen');
  }

  const StarIcon = props => <Icon {...props} name="star" />;

  return (
    <ScrollView vertical={true}>
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

      <Layout style={MainStyles.specifyContent}>
        <Text style={MainStyles.titleText} category="h3">
          Destinos cerca de ti
        </Text>
        <View style={MainStyles.titlebar}></View>

        {/* Destinos Cerca de Ti Fila 1 */}

        <ScrollView
          style={Styles.scrollCities}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Layout style={(MainStyles.container, Styles.cities)}>
            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-medellin.png')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Medellin</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 1Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-envigado.png')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Enbvigado</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 2Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-guatape.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Guatape</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 16Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-jardin.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Jardin</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 23Km</Text>
              </View>
            </Layout>
          </Layout>
        </ScrollView>

        {/* Destinos cerca de ti Fila 2 */}

        <ScrollView
          style={Styles.scrollCities}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Layout style={(MainStyles.container, Styles.cities)}>
            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-guatape.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Guatape</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 4Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-san-andres.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>San andres</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 250Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-guatape.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Guatape</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 16Km</Text>
              </View>
            </Layout>

            <Layout style={Styles.landingsCloseToBox} level="4">
              <View style={Styles.landingsCloseToImageBox}>
                <Image
                  style={Styles.landingsCloseToImage}
                  source={require('./img/Close-to-jardin.jpg')}
                />
              </View>
              <View style={Styles.landingsCloseToTextContent}>
                <Text style={Styles.landingsCloseToTextCity}>Jardin</Text>
                <Text style={Styles.landingsCloseToTextDistance}>a 23Km</Text>
              </View>
            </Layout>
          </Layout>
        </ScrollView>

        <Text style={MainStyles.titleText} category="h3">
          Anuncios Recientes
        </Text>
        <View style={MainStyles.titlebar}></View>

        <ScrollView
          style={Styles.scrollCities}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Layout style={(MainStyles.container, Styles.adsLayout)}>

            {/* Primer Anuncio  */}

            <Layout style={Styles.adsLayout1Box}  level="4">
              <TouchableOpacity  style={Styles.adsLayout1Preview} onPress={() => goToEdit()}>
                <Image
                  style={Styles.adsLayout1PrImage}
                  source={require('./img/frontbaner1.png')}
                />
              </TouchableOpacity >
              <View style={Styles.adsLayout1Content}>
                <View style={Styles.adsLayout1TitleContent}>
                  <Text style={Styles.adsLayout1TextTitle}>
                    Aparta Estudio Amoblado
                  </Text>
                  <Text style={Styles.adsLayout1Textlocation}>
                    Envigado, Colombia
                  </Text>
                </View>
                <View style={Styles.adsLayout1Options}>
                  <ScrollView style={Styles.featureBoxScroll} horizontal={true}>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>4 Habitaciones</Text>
                    </Layout>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>3 Baños</Text>
                    </Layout>

                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>224m2</Text>
                    </Layout>
                  </ScrollView>
                </View>
              </View>
            </Layout>

            {/* Segundo Anuncio */}
            <Layout style={Styles.adsLayout1Box} level="4">
              <View style={Styles.adsLayout1Preview}>
                <Image
                  style={Styles.adsLayout1PrImage}
                  source={require('./img/frontbaner1.png')}
                />
              </View>
              <View style={Styles.adsLayout1Content}>
                <View style={Styles.adsLayout1TitleContent}>
                  <Text style={Styles.adsLayout1TextTitle}>
                    Aparta Estudio Amoblado
                  </Text>
                  <Text style={Styles.adsLayout1Textlocation}>
                    Envigado, Colombia
                  </Text>
                </View>
                <View style={Styles.adsLayout1Options}>
                  <ScrollView style={Styles.featureBoxScroll} horizontal={true}>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>4 Habitaciones</Text>
                    </Layout>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>3 Baños</Text>
                    </Layout>

                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>224m2</Text>
                    </Layout>
                  </ScrollView>
                </View>
              </View>
            </Layout>

            {/* Tercer Anuncio */}
            <Layout style={Styles.adsLayout1Box} level="4">
              <View style={Styles.adsLayout1Preview}>
                <Image
                  style={Styles.adsLayout1PrImage}
                  source={require('./img/frontbaner1.png')}
                />
              </View>
              <View style={Styles.adsLayout1Content}>
                <View style={Styles.adsLayout1TitleContent}>
                  <Text style={Styles.adsLayout1TextTitle}>
                    Aparta Estudio Amoblado
                  </Text>
                  <Text style={Styles.adsLayout1Textlocation}>
                    Envigado, Colombia
                  </Text>
                </View>
                <View style={Styles.adsLayout1Options}>
                  <ScrollView style={Styles.featureBoxScroll} horizontal={true}>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>4 Habitaciones</Text>
                    </Layout>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>3 Baños</Text>
                    </Layout>

                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>224m2</Text>
                    </Layout>
                  </ScrollView>
                </View>
              </View>
            </Layout>

            {/* Cuarto Anuncio */}
            <Layout style={Styles.adsLayout1Box} level="4">
              <View style={Styles.adsLayout1Preview}>
                <Image
                  style={Styles.adsLayout1PrImage}
                  source={require('./img/frontbaner1.png')}
                />
              </View>
              <View style={Styles.adsLayout1Content}>
                <View style={Styles.adsLayout1TitleContent}>
                  <Text style={Styles.adsLayout1TextTitle}>
                    Aparta Estudio Amoblado
                  </Text>
                  <Text style={Styles.adsLayout1Textlocation}>
                    Envigado, Colombia
                  </Text>
                </View>
                <View style={Styles.adsLayout1Options}>
                  <ScrollView style={Styles.featureBoxScroll} horizontal={true}>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>4 Habitaciones</Text>
                    </Layout>
                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>3 Baños</Text>
                    </Layout>

                    <Layout style={Styles.featureBox}>
                      <Image
                        style={Styles.featureBoxIcon}
                        source={require('./img/Vector-Door.png')}
                      />
                      <Text style={Styles.featureBoxText}>224m2</Text>
                    </Layout>
                  </ScrollView>
                </View>
              </View>
            </Layout>
          </Layout>
        </ScrollView>

            {/* Titulo */}
        <Text style={MainStyles.titleText} category="h3">
          Basado en tus búsquedas
        </Text>
        <View style={MainStyles.titlebar}></View>

            {/* Fin del Titulo */}

        <Layout style={{PaddingRight: 20}}>

          {/* Primera Caja de Busqueda */}

          <View style={Styles.recentSearchBox}>
            <View style={Styles.recentSearchImageBox}>
              <Image
                style={Styles.recentSearchImage}
                source={require('./img/frontbaner2.png')}
              />
            </View>
            <Layout style={Styles.recentSearchContent}>
              <Text style={Styles.recentSearchTitle}>
                Aparta Estudio Amoblado
              </Text>
              <Text style={Styles.recentSearchLocation}>
                Envigado, Colombia
              </Text>
              <View style={Styles.recentSearchStars}>
                <Image
                  style={Styles.recentSearchStarsImage}
                  source={require('./img/stars.png')}
                />
              </View>
            </Layout>
          </View>

          {/* Segunda Caja de Busqueda */}

          <View style={Styles.recentSearchBox}>
            <View style={Styles.recentSearchImageBox}>
              <Image
                style={Styles.recentSearchImage}
                source={require('./img/frontbaner3.png')}
              />
            </View>
            <Layout style={Styles.recentSearchContent}>
              <Text style={Styles.recentSearchTitle}>
                Aparta Estudio Amoblado
              </Text>
              <Text style={Styles.recentSearchLocation}>
                Envigado, Colombia
              </Text>
              <View style={Styles.recentSearchStars}>
                <Image
                  style={Styles.recentSearchStarsImage}
                  source={require('./img/stars.png')}
                />
              </View>
            </Layout>
          </View>

          {/* Tercera Caja de busqueda */}

          <View style={Styles.recentSearchBox}>
            <View style={Styles.recentSearchImageBox}>
              <Image
                style={Styles.recentSearchImage}
                source={require('./img/frontbaner1.png')}
              />
            </View>
            <Layout style={Styles.recentSearchContent}>
              <Text style={Styles.recentSearchTitle}>
                Aparta Estudio Amoblado
              </Text>
              <Text style={Styles.recentSearchLocation}>
                Envigado, Colombia
              </Text>
              <View style={Styles.recentSearchStars}>
                <Image
                  style={Styles.recentSearchStarsImage}
                  source={require('./img/stars.png')}
                />
              </View>
            </Layout>
          </View>
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default HomePage;
