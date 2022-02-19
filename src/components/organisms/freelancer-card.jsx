import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../assets/global-styles";
import ColorPalette from "../../config/color.config";
import AppRatingDisplayer from "../molecules/app-rating-displayer";
import AppSpecializationStack from "../molecules/app-specialization-stack";

const FreelancerCard = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.infoSection}>
                        <Text style={GlobalStyles.typography.heading}>{props.data.first_name} {props.data.last_name}</Text>
                        <View style={[GlobalStyles.row, styles.chip]}>
                            <Text style={GlobalStyles.typography.main}>projects_completed : </Text>
                            <Text style={GlobalStyles.typography.body}>{props.data.projects_completed}</Text>
                        </View>
                        <Text style={GlobalStyles.typography.linkText}>{props.data.email} </Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Image style={GlobalStyles.profileAvatar(65)} source={{ uri: props.data.image }} />
                    </View>
                </View>
                <View style={GlobalStyles.divider} />
                <View style={styles.cardFooter}>
                    <View style={styles.footerItem}>
                        <AppSpecializationStack items={props.data.specializations} />
                    </View>
                    <View style={styles.footerItem}>
                        <AppRatingDisplayer value={props.data.avg_ratings} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5
    },
    cardContent: {
        ...GlobalStyles.row,
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoSection: {
        margin: 10
    },
    cardFooter: {
        ...GlobalStyles.row,
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    footerItem: {
        marginHorizontal: 10
    },

    chip: {
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginLeft: -10,
        marginVertical: 8
    },


});

Object.freeze(styles);

export default FreelancerCard;