import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../shared/variables/variables'

const SpashStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      image:{
        width: Dimensions.get("screen").width,
        resizeMode: "contain"
      }
});

export default SpashStyles