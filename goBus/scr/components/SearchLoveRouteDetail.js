import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';

const SearchLoveRouteDetail = props => {
    let { busRoute } = props;
    const navigation = useNavigation();


    if (busRoute.favoriteSotp === 1) {
        return (
            <View style={styles.container}>
                <View style={styles.context}>
                    <Text>{busRoute.busNum}</Text>
                    <Text>往{busRoute.detail[0].startEndStation}</Text>
                </View>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="cards-heart" color={'#000000'} size={20} style={styles.icon} />
                    <Pressable onPress={() => navigation.navigate('DetailRoute')}>
                        <MaterialCommunityIcons name="chevron-right" color={'#000000'} size={30} style={styles.icon} />
                    </Pressable>
                </View>

            </View>
        )
    } else null;

};
const styles = StyleSheet.create({
    container: {
        width: 350,
        margin: 10,
        marginLeft: 20,
        fontSize: 22,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    context: {
        margin: 10,
        marginLeft: 20,
        fontSize: 22,
        textAlign: 'right',
        flexDirection: 'column'
    },
    icon: {
        margin: 10,
        marginLeft: 20,
        fontSize: 22,
        textAlign: 'right',
        flexDirection: 'row'
    },
});
export default SearchLoveRouteDetail;