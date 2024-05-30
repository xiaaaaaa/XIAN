import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SetGoDestinationSetRouteDetail = props => {
    let { busRoute } = props;
    let thisBusStop = 100;
    let nowBusStop = 100;

    const findthisStopNum = () => {
        for (let i = 0; i < busRoute.detail[0].stationNum; i++) {
            if (busRoute.routes[0].data[i].station === '國立臺北教育大學') {
                thisBusStop = i;
            }
        }
    }
    findthisStopNum();

    const findnowStopNum = (num) => {
        for (let i = 0; i < busRoute.detail[0].stationNum; i++) {
            if (busRoute.routes[0].data[i].station === num) {
                nowBusStop = i;
            }
        }
        return (nowBusStop);
    }

    if (busRoute.busNum === "18" && busRoute.routes[0].busRoute === "萬華") {
        return (
            <Center>
                <VStack style={styles.setDestinationCard}>
                    {busRoute.routes[0].data.map((item, index) => (
                        <>
                            {findnowStopNum(item.station) <= thisBusStop ? (
                                null
                            ) : (
                                <View key={index} style={styles.context}>
                                    {findnowStopNum(item.station) === thisBusStop + 1 ? (
                                        <View style={styles.stationTextBox}>
                                            <Text style={styles.stationText}>{item.station}</Text>
                                        </View>
                                    ) : (
                                        <Text style={[styles.stationText, { backgroundColor: '#FFF' }]}>{item.station}</Text>
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
        marginBottom: 10,
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