import React from "react";
import { TouchableOpacity, View } from "react-native";
import AppIcon from "../atoms/app-icon";
const AppIconButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ padding: 8 }}>
            <AppIcon {...props} />
        </TouchableOpacity>
    );
}

export default AppIconButton;