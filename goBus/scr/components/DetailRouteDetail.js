import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VStack } from "@gluestack-ui/themed";

const DetailRouteCard = props => {
    let { busRoute } = props;
    if (busRoute.busNum === "18" && busRoute.routes[0].busRoute === "萬華") {
        return (
            <VStack>
                {busRoute.routes[0].data.map((item, index) => (
                    <View key={index} style={styles.context}>
                        {item.arrivalTime === "進站中" || item.arrivalTime === "將進站" ? (
                            <View style={[styles.arrivalTime, { backgroundColor: '#F3DB56' }]}>
                                <Text style={[styles.arrivalTimeText, { backgroundColor: '#F3DB56' }]}>{item.arrivalTime}</Text>
                            </View>
                        ) : (
                            <View style={styles.arrivalTime}>
                                <Text style={styles.arrivalTimeText}>{item.arrivalTime} 分</Text>

                            </View>
                        )}

                        <View style={styles.station}>
                            <Text style={styles.stationText}>{item.station}</Text>
                        </View>
                        {item.arrivalTime === "進站中" ? (
                            <View>
                                <View style={[styles.spot, { backgroundColor: '#F3DB56' }]}>
                                    <Text style={[styles.spotText, { backgroundColor: '#F3DB56' }]}></Text>
                                </View>
                            </View>

                        ) : (
                            <View style={styles.spot}>
                                <Text style={styles.spotText}></Text>
                            </View>
                        )}

                    </View>
                ))}

            </VStack>
        )
    } else null;
};

const styles = StyleSheet.create({
    context: {
        flexDirection: 'row',
        height: 39,
        marginLeft: 5,
        marginBottom: 6,
        marginTop: 6
    },
    station: {
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 215,
        margin: 3,
        borderRadius: 18
    },
    stationText: {
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 215,
        margin: 3,
        paddingLeft:10,
        borderRadius: 18
    },
    arrivalTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 87,
        
        backgroundColor: '#C4D7F3',
        borderRadius: 18
    },
    arrivalTimeText: {
        fontSize: 18,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 87,
        margin: 3,
        borderRadius: 18
    },
    spot: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 10,
        margin: 3,
        marginTop: 13,
        marginBottom: 14,
        backgroundColor: '#C4D7F3',
        borderRadius: 18
    },
    spotText: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 10,
        margin: 3,
        backgroundColor: '#C4D7F3',
        borderRadius: 18
    }
});
export default DetailRouteCard;