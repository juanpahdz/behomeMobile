import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const HomePageStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal:20,
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
    headerSlider:{
        marginTop: 20,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: (Dimensions.get("screen").width * 0.8)*3 + 15,
    },

    frontBaner:{
        position: "relative",
        height: 370,
        width: Dimensions.get("screen").width * 0.8,
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection:"row",
    },

    frontBanerOverlay:{
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get("screen").width * 0.8,
        height: 370,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        zIndex:20,
        borderRadius: 10,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },

    frontBanerSubtitle:{
        textAlign:"center",
        color: "white",
        fontFamily: Variables.secFontM
    }, 

    frontBanerTitle:{
        textAlign:"center",
        color: "white",
        fontFamily: Variables.primaryFont,
        letterSpacing: -1
        
    },

    frontBanerImage:{
        resizeMode:"cover",
        width: Dimensions.get("screen").width * 0.8,
        height: 370,
        borderRadius: 10,
    }
    


});

export default HomePageStyles;