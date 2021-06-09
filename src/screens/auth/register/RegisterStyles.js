import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -20,
        height: Dimensions.get("screen").height + 150,
      },
      layout: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
      },

      headerHorizontalBaner: {
          width:Dimensions.get("screen").width,
          height: 200,
      },

      headerHorizontalBanerImage:{
          flex: 1,
          height: 200,
          resizeMode: "cover",
      },
      LastSettignsText:{
        marginTop: -10,
        color: "white",
        textAlign:"center",
        fontFamily: Variables.secFontR,
        fontSize: 13,
    },
    LastSettignsText:{
        marginTop: -10,
        textAlign:"center",
        fontFamily: Variables.secFontR,
        fontSize: 13,
    },

});

export default RegisterStyles