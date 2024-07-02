import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider , useDispatch, useSelector } from "react-redux";
import { selectDestination } from "../redux/Slice";
import { setbusInfoDestination } from "../redux/Slice";


const SetGoDestinationSetRouteDetail = props => {
    let { busRoute } = props;
    let thisBusStop = 100;
    let nowBusStop = 100;

    // state ---------
    const destination = useSelector(selectDestination);
    //const busNum = [bus.busNum];
    const dispatch = useDispatch();
    const [destinationState, setDestinationState] = useState(destination);

    useEffect(()=>{
        dispatch(setbusInfoDestination(destinationState))
    }, [destinationState]);

    const findthisStopNum = () => {
        for (let i = 0; i < busRoute.stationNum; i++) {
            if (busRoute.data[i].station === '國立臺北教育大學') {
                thisBusStop = i;
            }
        }
    }
    findthisStopNum();

    const findnowStopNum = (num) => {
        for (let i = 0; i < busRoute.stationNum; i++) {
            if (busRoute.data[i].station === num) {
                nowBusStop = i;
            }
        }
        return (nowBusStop);
    }
    
    if (true) {
        return (
            <Center>
                <Text>{busRoute.busRoute}</Text>
                <VStack style={styles.setDestinationCard}>
                    {busRoute.data.map((item, index) => (
                        <>
                            {findnowStopNum(item.station) <= thisBusStop ? (
                                null
                            ) : (
                                <View key={index} style={styles.context}>
                                    {destination === item.station ? (
                                        <Pressable onPress={() => setDestinationState(item.station)}>
                                            <View style={styles.stationTextBox}>
                                                <Text style={styles.stationText}>{item.station}</Text>
                                            </View>
                                        </Pressable>
                                    ) : (
                                        // <Text style={[styles.stationText, { backgroundColor: '#FFF' }]}>{item.station}</Text>
                                        <Pressable onPress={() => setDestinationState(item.station)}>
                                            <View style={[styles.stationTextBox, {backgroundColor:'#fff'}]}>
                                                <Text style={styles.stationText}>{item.station}</Text>
                                            </View>
                                        </Pressable>
                                    )}
                                </View>
                            )}
                        </>
                    ))}

                </VStack>
                <Text style={{ paddingBottom: 10, backgroundColor: '#fff' }}></Text>
            </Center>
        )
    } else null;

}

const styles = StyleSheet.create({
    setDestinationCard: {
        width: 287,
        borderWidth: 0,
        backgroundColor: '#fff',

    },
    context: {
        flexDirection: 'row',
        height: 39,
        marginHorizontal: 35,
        marginBottom: 8,
        marginTop: 0,
        borderWidth: 0,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center'
    },
    // station: {
    //     fontSize: 16,
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     alignItems: 'center',
    //     width: 215,
    //     margin: 3,
    //     borderRadius: 18
    // },
    stationTextBox:{
        width: 215,
        height: 39,
        backgroundColor: '#F3DB56', 
        borderRadius: 12,
    },
    stationText: {
        fontSize: 16,
        paddingLeft: 10,
        display: 'flex',
        paddingTop: 8,
        paddingBottom: 5,
        width: 215,
        // margin: 3,
        borderRadius: 12,

        height: 39,
        borderWidth: 0,
    },
});


export default SetGoDestinationSetRouteDetail;