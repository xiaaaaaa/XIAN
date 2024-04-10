import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box } from "@gluestack-ui/themed";
//import NowStationNum from "../components/NowStationNum.js";
//busRoute.routes[0].data[NowStationNum].arrivalTime

const HomeBusRouteCardDetail = props => {
    let {busRoute} = props;
    

    return(
        <HStack space="none" reversed={false} style>
            <View style={styles.busRouteCard}>
                <Text style={styles.busNum}>{busRoute.busNum}</Text>
            </View>
            <HStack style={styles.arrivalTime}>
                <View>
                    {/* <NowStationNum 
                        stationNum={busRoute.detail[0].stationNum} 
                        routeData={busRoute.routes[0].data[0].station}
                        // routeData={busRoute.routes[0].data[0]}
                    /> */}
                    {/* <NowStationNum stationNum={busRoute.favoriteSotp}/> */}
                    {/* <NowStationNum stationNum={4}/> */}
                </View>
                
                <Text>{busRoute.routes[0].data[5].arrivalTime}</Text>
                <Text>分</Text>
                <Text>        </Text>
            </HStack>
        </HStack>
      

    )

};

const styles = StyleSheet.create({

});

export default HomeBusRouteCardDetail;