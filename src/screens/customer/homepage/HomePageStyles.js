import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../shared/variables/variables'

const HomePageStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal:20,
        backgroundColor: "transparent"
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
    },
    
    cities: {
        width: Dimensions.get("screen").width * 2.4,
        height: 100,
        flex: 1,
        flexDirection: 'row',
    },
    
    scrollCities: {
        backgroundColor: "#fff"
    },

    // Anuncements CSS

    adsLayout:{
        width: Dimensions.get("screen").width * 3.4,
        flex: 1,
        flexDirection: 'row',
    },

    // Landing Close To

    landingsCloseToBox:{
        backgroundColor: "#fff",
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
    },

    landingsCloseToTextContent: {
        marginLeft: 10
    }, 

    landingsCloseToImage: {
        width: 80,
        height: 80,
        resizeMode:"cover",
        borderRadius: 10,
    }, 

    landingsCloseToTextCity:{
        fontSize: 16,
        fontFamily: Variables.secFontM,
        color: Variables.blackColor,  
    },

    landingsCloseToTextDistance:{
        fontSize: 14,
        fontFamily: Variables.secFontR,
        color: Variables.blackColor,  
    },


    // Ads Layouts

    scrollAds:{backgroundColor: "#fff"},

    adsLayout1Box:{
        flexDirection: "column",
        backgroundColor: "#fff",
        height: 300,
        borderWidth: 0.3,
        borderColor: "black",
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
        marginRight:20,
    },

    adsLayout1Preview:{
        height: 200,
        flex: 1,
        position: "relative",
    },

    adsLayout1PrImage:{
        flex: 1,
        height: 200,
        position: "absolute",
        resizeMode:"cover",
    },


    adsLayout1Content:{
        height:120,
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
    // Recent Searches

    recentSearchBox: {
        width: Dimensions.get("screen").width - 40,
        marginVertical: 5,
        padding: 10,
        shadowColor: "#1c1c1c",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.01,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: 13,
        display: "flex",
        flexDirection: "row",
    },

    recentSearchImageBox:{
        width: 100,
        position: "relative",
        flexDirection: 'row',
    },

    recentSearchImage:{
        flex: 1,
        width: 100,
        height: 100,
        resizeMode:"cover",
        borderRadius: 10,
    },

    recentSearchContent:{
        paddingLeft:10,
        justifyContent: 'center',
    },
    recentSearchTitle:{
        maxWidth: 150,
        fontFamily: Variables.secFontR,
        fontSize: 14,
    },
    recentSearchLocation:{
        fontFamily: Variables.secFontR,
        color: "#C4C4C4",
        fontSize: 12,
    },

    recentSearchStarsImage:{
        marginTop: 10,
        width: 89,
        height: 13.52
    }

});

export default HomePageStyles;