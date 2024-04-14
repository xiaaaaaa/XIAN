import React ,{useState} from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { HStack } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';

const SearchRecordRouteDetail = props => {
    let {busRoute} = props;
    const navigation = useNavigation();
    let [flag, setFlag] =useState(true);
    const changeHeart=()=>setFlag(previousState => !previousState);
    let heartShape = flag ?"cards-heart":"cards-heart-outline"
    let OtherheartShape = flag ?"cards-heart-outline":"cards-heart"

    if(busRoute.recordSotp === 1 && busRoute.favoriteSotp === 1){
        return(
            <View style={styles.container}>
                <View style={styles.context}>
                    <Text>{busRoute.busNum}</Text>
                    <Text>往{busRoute.detail[0].startEndStation}</Text>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => changeHeart()}>
                        <MaterialCommunityIcons name={heartShape} color={'#000000'} size={20} style={styles.icon} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('DetailRoute')}>
                        <MaterialCommunityIcons name="chevron-right" color={'#000000'} size={30} style={styles.icon} />
                    </Pressable>
                </View>
            </View>

        )
    }
    else if(busRoute.recordSotp === 1 && busRoute.favoriteSotp === 0){
        return(
            <View style={styles.container}>
                <View style={styles.context}>
                    <Text>{busRoute.busNum}</Text>
                    <Text>往{busRoute.detail[0].startEndStation}</Text>
                </View>
                <View style={styles.icon}>
                <Pressable onPress={() => changeHeart()}>
                        <MaterialCommunityIcons name={OtherheartShape} color={'#000000'} size={20} style={styles.icon} />
                    </Pressable>
                    <MaterialCommunityIcons name="chevron-right" color={'#000000'} size={30} style={styles.icon} />
                </View>
            </View>

        )
    }

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
export default SearchRecordRouteDetail;