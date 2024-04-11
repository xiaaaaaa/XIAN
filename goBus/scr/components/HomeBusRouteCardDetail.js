import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import NowStationNum from "../components/NowStationNum.js";
//busRoute.routes[0].data[NowStationNum].arrivalTime

const HomeBusRouteCardDetail = props => {
    let {busRoute} = props;
    

    return(
        <View>
            <Text>最愛路線</Text>
            <HStack space="none" reversed={false} style={styles.busRouteCard}>
                <View style={styles.busNumCard}>
                    <Text style={styles.busNum}>{busRoute.busNum}</Text>
                </View>
                <HStack style={styles.arrivalTimeCard}>
                    <View>
                        {/* <NowStationNum 
                            stationNum={busRoute.detail[0].stationNum} 
                            routeData={busRoute.routes[0].data[0].station}
                            // routeData={busRoute.routes[0].data[0]}
                        /> */}
                        {/* <NowStationNum stationNum={busRoute.favoriteSotp}/> */}
                        {/* <NowStationNum stationNum={4}/> */}
                    </View>
                    
                    <Text style={styles.timeNum}>{busRoute.routes[0].data[5].arrivalTime}</Text>
                    <Text style={styles.unit}>分</Text>
                    <MaterialCommunityIcons name="chevron-right" color={color} size={6} />
                    <Text>        </Text>
                </HStack>
            </HStack>
        
        </View>

    )

};

const styles = StyleSheet.create({
    busRouteCard:{
        width:null,
        height:32,
        marginRight:9,
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:9,
        borderColor:'#424242',

    },
    busNumCard:{
        width:null,
        height:30,
        backgroundColor:'#BBDBFF'
    },
    busNum:{
        fontSize:18,
    },
    arrivalTimeCard:{

    },
    timeNum:{
        fontSize:16,
    },
    unit:{
        fontSize:12,
    }
});

export default HomeBusRouteCardDetail;