import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../../shared/variables/variables'

const AnunncementCardStyles = StyleSheet.create({
    adsLayout1Box:{
        flexDirection: "column",
        backgroundColor: "#fff",
        height: 300,
        borderWidth: 0.3,
        borderRadius: 20,
        overflow: 'hidden',
        position: "relative",
        shadowColor: "#C4C4C4",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
        flex: 1,
        marginRight:0,
        marginBottom:20,
    },

    adsLayout1Preview:{
        height: 200,
        flex: 1,
        position: "relative",
    },

    adsLayout1PrImage:{
        flex: 1,
        width: Dimensions.get("screen").width - 40,
        height: 200,
        position: "absolute",
        resizeMode:"cover",
    },


    adsLayout1Content:{
        height:140,
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "column"
    },

    adsLayout1TitleContent:{
        fontFamily: Variables.secFontR,
        fontSize: 16,
        color: Variables.blackColor,
    },
    adsLayout1TextTitle:{
        fontFamily: Variables.secFontM,
        fontSize: 16,
        color: Variables.blackColor,
    },

    adsLayout1Textlocation:{
        fontFamily: Variables.secFontR,
        fontSize: 14,
        color: "#C4C4C4",
    },

    adsLayout1Options:{
        flexDirection: "row",
        justifyContent:"center"
    },
    // Feature Box
    featureBox:{
        marginTop: 10,
        borderWidth: 0.8,
        borderRadius: 5,
        borderColor: Variables.primarycolor,
        paddingHorizontal:10,
        paddingVertical: 5,
        flexDirection: "row",
        marginRight: 6
    },

    featureBoxIcon:{
        width: 15,
        height: 15,
        marginRight:5,
        resizeMode:"contain",
    },

    featureBoxText:{
        fontFamily: Variables.secFontR,
        fontSize: 12,
    },
});

export default AnunncementCardStyles;