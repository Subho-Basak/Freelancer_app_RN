import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../assets/global-styles";
import AppButton from "../atoms/app-button";
import AppIcon from "../atoms/app-icon";
import starIcon from '../../assets/images/icons/star.png';
import halfStarIcon from '../../assets/images/icons/half-star.png';
import AppCheckbox from "../atoms/app-checkbox";


const FreelancerFilter = (props) => {

    const [filterConfig, setFilterConfig] = useState();

    const renderRatingStars = (rating) => {
        const iconArr = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            iconArr.push(<AppIcon icon={starIcon} size={14} tintColor="#000" />)
        }
        if (rating - Math.floor(rating)) {
            iconArr.push(<AppIcon icon={halfStarIcon} size={14} />)
        }
        return (
            <View style={[GlobalStyles.row, { marginHorizontal: 15 }]}>
                {iconArr}
            </View>
        );
    };

    const handleFilterChange = (item) => () => {
        const tempFilter = JSON.parse(JSON.stringify(filterConfig));
        const _obj = tempFilter?.find(each => each.id === item.id);
        _obj.selected = !_obj.selected;
        setFilterConfig(tempFilter);
    }

    useEffect(() => {
        setFilterConfig(props.data);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                {filterConfig?.map((item, index) => (
                    <View key={item?.id}>
                        <View style={styles.listItem}>
                            <View>
                                <Text style={[GlobalStyles.typography.heading, { marginVertical: 2 }]} >{item.title}</Text>
                                <Text style={[GlobalStyles.typography.caption, { color: 'grey', marginVertical: 2 }]}>{item.subTitle}</Text>
                            </View>
                            <View style={styles.rightAlign}>
                                {renderRatingStars(item.rating)}
                                <AppCheckbox checked={item.selected} onChange={handleFilterChange(item)} />
                            </View>
                        </View>
                        {index < filterConfig?.length - 1 ? (
                            <View style={GlobalStyles.divider} />
                        ) : null}
                    </View>
                ))}
            </View>
            <AppButton title="Save" onPress={() => props.onSave(filterConfig)} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 25,
    },
    list: {
        flex: 1,
        marginBottom: 35,
    },
    listItem: {
        ...GlobalStyles.row,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70
    },
    rightAlign: {
        ...GlobalStyles.row,
        alignItems: 'center'
    }
});

Object.freeze(styles);

export default FreelancerFilter;