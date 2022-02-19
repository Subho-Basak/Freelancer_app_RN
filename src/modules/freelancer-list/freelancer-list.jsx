import React, { useContext, useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StatusBar, StyleSheet, Text, View } from "react-native";
import AppHeader from "../../components/organisms/app-header";
import FreelancerCard from "../../components/organisms/freelancer-card";
import ColorPalette from "../../config/color.config";
import FreelancerListService from "./freelancer-list.service";
import RBSheet from "react-native-raw-bottom-sheet";
import GlobalStyles from "../../assets/global-styles";
import FreelancerFilter from "../../components/organisms/freelancer-filter";
import Toast from 'react-native-toast-message';
import { FreelancerProfileContext } from "../../../App";

const FreelancerListScreen = (props) => {
    const { freelancer, setFreelancer } = useContext(FreelancerProfileContext);
    const filterSheetRef = useRef();
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filterConfig, setFilterConfig] = useState();

    const filterMap = {
        BEGINNER: (item) => item.avg_ratings <= 3,
        MODERATE: (item) => item.avg_ratings > 3 && item.avg_ratings <= 4,
        EXPERT: (item) => item.avg_ratings > 4 && item.avg_ratings <= 5,
    };

    const renderEmptyList = () => {
        return (
            <View style={styles.emptyStateWrapper}>
                <Text style={GlobalStyles.typography.heading}>No data found</Text>
            </View>
        );
    };

    const refreshList = () => {
        setRefreshing(true);
        FreelancerListService.fetchList().then(response => {
            setList(response.data);
            setFilteredList(response.data);
            setRefreshing(false);
            initFilter();
        }).catch(e => {
            setRefreshing(false);
            setIsLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Failed',
                text2: 'Failed to load data. Please try again.'
            })
        })
    };

    const initFilter = () => {
        setFilterConfig([{
            id: 1,
            type: 'BEGINNER',
            title: 'Beginner',
            subTitle: 'Budget : Below Rs 50 K',
            rating: 3,
            selected: false
        },
        {
            id: 2,
            type: 'MODERATE',
            title: 'Moderate',
            subTitle: 'Budget : Below Rs 100 K',
            rating: 4,
            selected: false
        },
        {
            id: 3,
            type: 'EXPERT',
            title: 'Expert',
            subTitle: 'Budget : Below Rs 200 K',
            rating: 4.5,
            selected: false
        }])
    }

    const filterList = (filter) => {
        filterSheetRef.current.close();
        let _arr = [];
        let hasFilter = false;
        filter.forEach(item => {
            if (item.selected) {
                hasFilter = true;
                _arr = [..._arr, ...list.filter(filterMap[item.type])];
            }
        })
        if (!hasFilter) {
            _arr = [...list];
        }
        setFilteredList(_arr);
        setFilterConfig(filter);
    };

    const openMenu = () => {
        Toast.show({
            text1: 'Comming soon!',
            text2: 'This feature will be available soon.'
        })
    };

    const onSearchPress = () => {
        Toast.show({
            text1: 'Comming soon!',
            text2: 'This feature will be available soon.'
        })
    };

    const openFilter = () => {
        filterSheetRef.current.open();
    };

    const navigateToDetailsScreen = profile => () => {
        setFreelancer(profile);
        props.navigation.navigate('FreelancerDetailsScreen')
    }

    useEffect(() => {
        initFilter();

        setIsLoading(true);
        FreelancerListService.fetchList().then(response => {
            setList(response.data);
            setFilteredList(response.data);
            setIsLoading(false);
        }).catch(e => {
            console.log('API data fetch', e);
            setIsLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Failed',
                text2: 'Failed to load data. Please try again.'
            })
        })

        return () => {
            setIsLoading(false);
            setRefreshing(false);
        }
    }, []);

    return (
        <View style={styles.main}>
            <AppHeader
                title="Freelancers"
                onFilterPress={openFilter}
                onMenuPress={openMenu}
                onSearchPress={onSearchPress} />
            <View style={{ flex: 1 }}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" />
                    </View>
                ) : (
                    <FlatList
                        contentContainerStyle={{ paddingVertical: 10, flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}
                        data={filteredList}
                        renderItem={({ item }) => (
                            <FreelancerCard data={item} onPress={navigateToDetailsScreen(item)} />
                        )}
                        extraData={refreshing}
                        refreshControl={<RefreshControl
                            colors={["#9Bd35A", "#689F38"]}
                            refreshing={refreshing}
                            onRefresh={refreshList}
                        />
                        }
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={renderEmptyList()}
                    />
                )}
            </View>

            <RBSheet
                ref={filterSheetRef}
                height={380}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    },
                }}
            >
                <FreelancerFilter data={filterConfig} onSave={filterList} />
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: ColorPalette.primaryBackground,
        flex: 1,
        paddingHorizontal: 15,
    },
    emptyStateWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

Object.freeze(styles);

export default FreelancerListScreen;