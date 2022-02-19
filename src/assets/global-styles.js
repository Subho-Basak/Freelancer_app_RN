import { StatusBar } from "react-native";
import ColorPalette from "../config/color.config";

const GlobalStyles = {
    row: {
        flexDirection: 'row'
    },
    flexItem: (flex) => ({
        flex,
    }),
    profileAvatar: (size) => ({
        width: size,
        height: size,
        borderRadius: size / 2
    }),
    alignCenter: {
        textAlign: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#EFEFEF'
    },
    primaryButton: {
        width: '100%',
        height: 50,
        borderRadius: 6,
        backgroundColor: ColorPalette.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButtonText: {
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        lineHeight: 16,
        fontSize: 16
    },
    typography: {
        title:{
            fontFamily: 'Roboto-Bold',
            fontSize: 36,
            color: '#000',
            lineHeight: 38
        },
        heading: {
            fontFamily: 'Roboto-Bold',
            fontSize: 17,
            color: '#000',
            lineHeight: 22
        },
        main: {
            fontFamily: 'Roboto-Bold',
            color: '#535353',
            lineHeight: 16,
            fontSize: 14
        },
        subHeading: {
            fontFamily: 'Roboto-Medium',
            color: '#000',
            lineHeight: 16,
            fontSize: 14
        },
        body: {
            fontFamily: 'Montserrat-Regular',
            color: '#000',
            lineHeight: 18,
            fontSize: 14
        },
        caption: {
            fontFamily: 'Montserrat-Regular',
            color: '#000',
            lineHeight: 13,
            fontSize: 13
        },
        linkText: {
            fontFamily: 'Roboto-Regular',
            fontSize: 14,
            color: ColorPalette.primary,
            lineHeight: 16
        }
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
   
    rightSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    }
}

export default GlobalStyles;