import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get("screen").width,
        position: "relative",
        backgroundColor: "red"
    },
    content:{
        position: "absolute",
        flex: 1,
        
    }

});

export default LoginStyles