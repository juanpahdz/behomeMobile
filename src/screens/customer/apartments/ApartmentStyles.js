import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const ApartmentStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal:20,
        backgroundColor: "transparent",
        padding:5
    },
      searchbar: { 
        borderRadius: 50,
        textAlign: "center",
        fontFamily: Variables.secFontM,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
      
});

export default ApartmentStyles