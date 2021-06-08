import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../../shared/variables/variables'

const SimpleBoxStyles = StyleSheet.create({
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

export default SimpleBoxStyles;