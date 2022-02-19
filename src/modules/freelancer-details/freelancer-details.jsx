import React, { useContext, useEffect } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FreelancerProfileContext } from "../../../App";
import GlobalStyles from "../../assets/global-styles";
import AppHeader from "../../components/organisms/app-header";
import backIcon from "../../assets/images/icons/Back.png";
import locationIcon from "../../assets/images/icons/location.png";
import AppIconButton from "../../components/molecules/app-icon-button";
import AppRatingDisplayer from "../../components/molecules/app-rating-displayer";
import ColorPalette from "../../config/color.config";
import AppSpecializationStack from "../../components/molecules/app-specialization-stack";
import AppButton from "../../components/atoms/app-button";
import AppIcon from "../../components/atoms/app-icon";
import Toast from 'react-native-toast-message';
import LinearGradient from "react-native-linear-gradient";

const FreelancerDetailsScreen = (props) => {
    const { freelancer, setFreelancer } = useContext(FreelancerProfileContext);

    const goBack = () => {
        props.navigation.goBack();
    };

    const handleProceed = () => {
        Toast.show({
            text1: 'Comming soon!',
            text2: 'This feature will be available soon.'
        })
    };

    useEffect(() => {
        props.navigation.addListener('blur', () => {
            setFreelancer(null);
        })
    }, []);

    return (
        <>
            <View style={styles.main}>
                <View style={styles.stickyBackground}>
                    <ImageBackground
                        source={{ uri: freelancer?.image }}
                        style={styles.profileImage}
                        resizeMode="cover"
                    >
                        <View style={styles.stickyHeader}>
                            <View style={GlobalStyles.flexItem(1)}>
                                <AppIconButton icon={backIcon} size={20} onPress={goBack} />
                            </View>
                            <View style={GlobalStyles.rightSection}>
                                <View style={styles.ratingChip}>
                                    <AppRatingDisplayer iconColor="#000" value={freelancer?.avg_ratings} />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, marginHorizontal: -15 }}>
                    <View style={{ flex: 1, position: 'relative' }}>
                        <ScrollView style={styles.scrollableContainer}
                            contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={styles.detailsContainer}>
                                <View style={styles.infoSection}>
                                    <Text style={GlobalStyles.typography.title}>{freelancer?.first_name} {freelancer?.last_name}</Text>
                                    <View style={[GlobalStyles.row, styles.emailChip]}>
                                        <Text style={styles.emailText}>{freelancer?.email}</Text>
                                    </View>
                                    <Text style={[GlobalStyles.typography.body, { color: 'grey', marginVertical: 10 }]}>projects_completed : {freelancer?.projects_completed}</Text>
                                    <Text style={GlobalStyles.typography.body}>{freelancer?.about}</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <LinearGradient
                            style={styles.bottomGradiant}
                            colors={['transparent',  '#fff']} />
                    </View>
                    <View style={styles.sectionFooter}>
                        <View style={styles.footerItem}>
                            <AppSpecializationStack items={freelancer?.specializations} />
                        </View>
                        <View style={styles.addressDisplayer}>
                            <AppIcon icon={locationIcon} size={15} />
                            <Text style={[GlobalStyles.typography.linkText, { textTransform: 'capitalize' }]}>{freelancer?.address}</Text>
                        </View>
                        <AppButton title="Proceed" onPress={handleProceed} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 15,
        position: 'relative',
    },
    stickyBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    stickyHeader: {
        ...GlobalStyles.header,
        zIndex: 3,
        marginHorizontal: 10
    },
    profileImage: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: '100%',
    },
    scrollableContainer: {
        flex: 1,
        zIndex: 2,
    },
    detailsContainer: {
        marginTop: Dimensions.get('window').height / 2.2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        position: 'relative'
    },
    ratingChip: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 25,
        borderRadius: 25
    },
    infoSection: {
        padding: 25,
    },
    emailChip: {
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginLeft: -10,
        marginVertical: 5,
        alignSelf: 'flex-start'
    },
    emailText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: '#007AFF',
        lineHeight: 22
    },
    sectionFooter: {
        backgroundColor: '#fff',
        padding: 25,
        borderWidth: 1,
        borderColor: 'transparent',
        borderTopColor: ColorPalette.primaryBackground
    },
    addressDisplayer: {
        ...GlobalStyles.row,
        alignItems: 'center',
        marginVertical: 15
    },
    bottomGradiant:{
        position: 'absolute', 
        height: 30, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 5
    }
});

Object.freeze(styles);

export default FreelancerDetailsScreen;