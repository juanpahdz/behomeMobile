import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get("screen").width,
        position: "relative",
        backgroundColor: "red",
        alignItems: "center"
    },
    content:{
        position: "absolute",
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        maxHeight: Dimensions.get("screen").height,
        backgroundColor: "rgba(0, 0, 0, 0.60)",
        zIndex: 10,
        alignItems:"center",
        display: "flex"
    },

    titleLayout:{
        width: Dimensions.get("screen").width - 40,
        backgroundColor:"transparent",
        margin: "auto",
        justifyContent: "center",
        alignItems:"center"
    },

    textLogo :{
        color: Variables.primarycolor,
        fontFamily: Variables.primaryFont,
        textAlign:"center",
        marginTop: 20,
        fontSize:48,
    },

    textSubLogo:{
        color: "white",
        fontFamily: Variables.secFontR,
        marginTop: 5,
        fontSize: 20,
        textAlign:"center",
        marginBottom:6,
    },

    loginformbox:{
        width: Dimensions.get("screen").width - 40,
        backgroundColor:"transparent",
        marginTop: 100
    },

    LastSettigns:{
        marginTop: "auto",
        backgroundColor: "transparent",
        width: Dimensions.get("screen").width - 40,
        paddingVertical: 50,
    },
    LastSettignsText:{
        marginTop: -10,
        color: "white",
        textAlign:"center",
        fontFamily: Variables.secFontR,
        fontSize: 13,
    },

    logininputstyle:{
        marginVertical: 8,
        borderWidth: 1,
        borderColor: Variables.primarycolor,
        borderRadius: 5,
        backgroundColor: "rgba(255, 89, 93, 0.17)",
        color: "white",
        fontFamily: Variables.secFontM
    },

    loginTextStyle:{
        color: "white",
        fontFamily: Variables.secFontR,
        fontSize: 14
    }

}); 

export default LoginStyles