import React from "react";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../assets/global-styles";

const AppButton = (props) => {
    return (
        <Pressable style={GlobalStyles.primaryButton} onPress={props.onPress}>
            <Text style={GlobalStyles.primaryButtonText}>{props.title}</Text>
        </Pressable>

    );
}

export default AppButton;