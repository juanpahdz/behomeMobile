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

import styles from './ApartmentStyles';
import MainStyles from '../../../shared/styles/mainStyles'

import AnucementCard from '../components/anucementCard/AnucementCard'

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const ApartmentsScreen = ({navigation}) => {
    let [apartments, setApartments] = useState([]);
    const searchbar = useInputState();
    
    const renderIcon = props => (
        <Icon {...props} fill="#FF595D" name="search-outline" />
      );
      
        
      const getApartments = async () => {
        const res = await fetch(`http://behomemobileapi.us-east-2.elasticbeanstalk.com/readallapartments`);
        const data = await res.json()
        .then((data) => setApartments(data))
      };

      const goToEdit = (id) =>{
        navigation.navigate('EditScreen', {
            id: id,
            getApart: getApartments
        });
      }

      const goToDelete = async (id) =>{
        const res = await fetch(`http://behomemobileapi.us-east-2.elasticbeanstalk.com/delete/${id}`)
        .then(() => getApartments())
      }

      useEffect(() => {
        getApartments();
      }, []);
  return (
    <ScrollView style={{paddingTop: 60}} vertical={true} >
      <Text style={MainStyles.textLogo} category="h4">
        beHome.com
      </Text>
      <Layout style={styles.container}>
        <Input
          style={styles.searchbar}
          placeholder="Encontremos tu próximo hogar"
          accessoryRight={renderIcon}
          {...searchbar}
        />
      </Layout>

      <Layout 
        style={{paddingHorizontal: 20, backgroundColor: "transparent", marginTop: 40}}>
        {apartments.map((apartment) => (
            <AnucementCard
                style={{marginVertical: 10}}
                key={apartment._id}
                id={apartment._id}
                imagenes={apartment.imagenes}
                meters={apartment.meters}
                numrooms={apartment.numrooms}
                pricenight={apartment.pricenight}
                title={apartment.title}
                ubicacion={apartment.ubicacion}
                funedit={goToEdit}
                fundelete={goToDelete}
                />
            ))}
      </Layout>
    </ScrollView>
  );
};
export default ApartmentsScreen;