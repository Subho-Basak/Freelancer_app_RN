import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../assets/global-styles";
import AppIcon from "../atoms/app-icon";
import menuIcon from '../../assets/images/icons/menu.png';
import searchIcon from '../../assets/images/icons/search.png';
import filterIcon from '../../assets/images/icons/filter.png';
import AppIconButton from "../molecules/app-icon-button";

const AppHeader = (props) => {
    return (
        <View style={GlobalStyles.header}>
            <View style={GlobalStyles.flexItem(1)}>
                <AppIconButton icon={menuIcon} size={20} onPress={props.onMenuPress} />
            </View>
            <View style={GlobalStyles.flexItem(1)}>
                <Text style={[GlobalStyles.typography.heading,GlobalStyles.alignCenter]}>{props?.title}</Text>
            </View>
            <View style={GlobalStyles.rightSection}>
                <AppIconButton icon={searchIcon} size={20} onPress={props.onSearchPress} />
                <AppIconButton icon={filterIcon} size={20} onPress={props.onFilterPress} />
            </View>
        </View>
    );
}

export default AppHeader;