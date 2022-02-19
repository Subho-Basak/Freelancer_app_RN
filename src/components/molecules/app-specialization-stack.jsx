import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../assets/global-styles";


const AppSpecializationStack = (props) => {

    const getColorFromSpecifications = (specification) => {
        let color;
        switch (specification) {
            case 'threejs':
                color = '#87C637';
                break;
            case '3d graphics':
                color = '#843C90';
                break;
            case 'google cloud':
                color = '#ddd754';
                break;
            case 'excel':
                color = '#1b64db';
                break;
            case 'clickView':
                color = '#df0808';
                break;
            case 'tableau':
                color = '#FD8031';
                break;
            case 'reactjs':
            case 'angular':
                color = '#db1bb9';
                break;
            case 'nodejs':
            case 'java':
                color = '#67db1b';
                break;
            case 'mongodb':
                color = '#007AFF';
                break;
            default:
                color = 'grey';
                break;
        }
        return color;
    }

    return (
        <View style={GlobalStyles.row}>
            <View style={styles.bulletList}>
                {props.items?.map((item, index) => (
                    <View key={index} style={styles.bullet(getColorFromSpecifications(item))} />
                ))}
            </View>
            {props.items?.map((item, index) => (
                <Text key={index} style={styles.stackItemText}>{item}{index < props?.items?.length - 1 ? ', ' : null}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    stackItemText: {
        ...GlobalStyles.typography.body,
        color: '#979797',
        textTransform: 'capitalize'
    },
    bulletList: {
        ...GlobalStyles.row,
        marginHorizontal: 6
    },
    bullet: (color) => ({
        width: 14,
        height: 14,
        backgroundColor: color,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#fff',
        marginLeft: -6
    }),

});

Object.freeze(styles)

export default AppSpecializationStack;