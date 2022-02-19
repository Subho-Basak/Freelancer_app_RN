import React from "react";
import AppIcon from "../atoms/app-icon";
import star from '../../assets/images/icons/star.png';
import ColorPalette from "../../config/color.config";
import GlobalStyles from "../../assets/global-styles";
import { Text, View } from "react-native";

const AppRatingDisplayer = (props) => {
    return (
        <View style={[GlobalStyles.row, { alignItems: 'center' }]}>
            <AppIcon icon={star} size={15} tintColor={props.iconColor || ColorPalette.primary} />
            <Text style={[GlobalStyles.typography.subHeading]}>{props.value}</Text>
        </View>
    );
}

export default AppRatingDisplayer;