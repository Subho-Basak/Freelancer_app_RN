import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import check from '../../assets/images/icons/check.png';
import ColorPalette from "../../config/color.config";

const AppCheckbox = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onChange}
            underlayColor="transparent"
        >
            <View style={styles.checkbox(props.checked)}>
                <View >
                    <Image source={check}  />
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    checkbox: (active) => ({
        width: 25,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: active ? ColorPalette.checkboxActive : ColorPalette.checkboxInactive
    })
});

Object.freeze(styles);

export default AppCheckbox;