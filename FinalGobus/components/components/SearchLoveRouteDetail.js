import React ,{useState}from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SearchLoveRouteDetail = props => {
    let { busRoute } = props;
    const navigation = useNavigation();
    let [flag, setFlag] =useState(true);
    const changeHeart=()=>setFlag(previousState => !previousState);
    let heartShape = flag ?"cards-heart":"cards-heart-outline"

    if (busRoute.favoriteSotp === 1) {
        return (
            <View style={styles.container}>
                <View style={styles.context}>
                    <Text>{busRoute.busNum}</Text>
                    <Text>往{busRoute.detail[0].startEndStation}</Text>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => changeHeart()}>
                        <MaterialCommunityIcons name={heartShape} color={'#EBAFA3'} size={20} style={styles.icon} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('DetailRoute')}>
                        <MaterialCommunityIcons name="chevron-right" color={'#C4D7F3'} size={30} style={styles.icon} />
                    </Pressable>
                </View>

            </View>
        )
    } else null;

};
const styles = StyleSheet.create({
    container: {
        width: 380,
        margin: 5,
        marginBottom: 0,
        marginLeft: 0,
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