import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import ColorPalette from "../../config/color.config";


const AppIcon = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.logo(props.size,props.tintColor)}
                source={props.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
       padding:3
    },
    logo: (size,tintColor) => ({
        width: size || 20,
        height: size || 20,
        resizeMode:'contain',
        tintColor: tintColor || null
    })
});

Object.freeze(styles);

export default AppIcon;