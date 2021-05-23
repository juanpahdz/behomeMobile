import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../../shared/variables/variables'

const EditStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -20
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
      }
      
});

export default EditStyles