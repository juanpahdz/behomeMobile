import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../variables/variables'

const MainStyles = StyleSheet.create({
    textLogo :{
        color: Variables.primarycolor,
        fontFamily: Variables.primaryFont,
        textAlign:"center",
        marginTop: 10,
    },

    titleText:{
        color: Variables.blackColor,
        fontFamily: Variables.primaryFont,
        fontSize: 24,
        textAlign:"left",
        marginTop:50,
        marginBottom:6
    },
    
    titlebar:{
        width: 100,
        height: 5,
        backgroundColor: Variables.primarycolor,
        borderRadius: 20,
        marginBottom: 20
    },

    specifyContent:{
        paddingLeft: 20,
        paddingTop: 10,
    },


    container: {
        flex: 1,
        flexDirection: 'row',
    },

      layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainStyles