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

    bigTextLogo :{
        color: Variables.primarycolor,
        fontFamily: Variables.primaryFont,
        textAlign:"left",
        fontSize:60,
        lineHeight: 60
    },

    subTextLogo :{
        color: Variables.blackColor,
        fontFamily: Variables.secFontM,
        textAlign:"left",
        fontSize:23
    },
    
    titleLayout:{
        paddingHorizontal: 20,
        backgroundColor: "transparent",
        width:Dimensions.get("screen").width,
        textAlign:"left",
        marginVertical: 20,
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

    Label:{
        color: Variables.blackColor,
        fontFamily: Variables.secFontR,
        fontSize: 16,
        letterSpacing: -1,
        marginBottom: 8
    },

    textInputStyle: {
        color: Variables.blackColor,
        fontFamily: Variables.secFontM,
        letterSpacing: 0.1
    },

    input: {
        marginVertical: 4,
        borderWidth: 1,
        borderColor: Variables.primarycolor,
        backgroundColor: "white",
        color: Variables.blackColor,
        fontFamily: Variables.secFontM
      },

      primaryButton:{
          height: 30,
          width: Dimensions.get("screen").width - 40,
          marginVertical: 10,
        paddingVertical: 5,
        backgroundColor: Variables.primarycolor,
        borderWidth: 0,
        borderColor: "transparent",
        marginBottom: 20
      },

      closeButton:{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex:20,
          backgroundColor: "#fff",
          opacity: 1,
          borderColor: "white",
          padding:20
      },

      closeButtonText:{
          color: Variables.blackColor,
          fontSize: 40,
          lineHeight: 15,
          backgroundColor: "transparent",
          opacity: 1,
      }


});

export default MainStyles