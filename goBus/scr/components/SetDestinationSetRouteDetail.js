import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SetDestinationSetRouteDetail = props => {
    let {busRoute} = props;
    // let myMap = new Map([busRoute]);


    const findStopNum = () => {
        let num = 0;
        for(let i=0; i<busRoute.detail[0].stationNum; i++){
            if(busRoute.routes[0].data[i].station === '國立臺北教育大學'){
                num = i;
            }
        }
        return(busRoute.routes[0].data[num].station);
    }

    return(
        <View style={styles.loveRoute}>
            
            <HStack space="none" reversed={false} style={styles.busRouteCard}>
                {busRoute.routes[0].data.map((item, index) => (
                    <View key={index}>
                        <Text>{item.station}</Text>
                    </View>
                ))}
                {/* <Text style={styles.busNum}>{busRoute.routes[0].data[0].station}</Text> */}
                {/* <Text style={styles.busNum}>{myMap.get(busNum)}</Text> */}
            </HStack>
        </View>

    )

}

const styles = StyleSheet.create({
    loveRoute:{
        marginHorizontal:20,
    },
    busRouteCard:{
        width:null,
        height:43,
        marginRight:10,
        marginTop:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:12,
        borderColor:'#424242',
        paddingRight:3,
    },
    busNumCard:{
        width:null,
        height:30,
        backgroundColor:'#BBDBFF',
        borderWidth:0,
        borderRadius:9,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        borderColor:'#424242',
    },
    busNum:{
        fontSize:18,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:6,
        paddingTop:2,
    },
    arrivalTimeCard:{
        width:65,
        display:'flex',
        alignItems:'center',
        paddingLeft:8,
        
    },
    timeNum:{
        width:30,
        fontSize:18,
        paddingRight:0,
        paddingLeft:0,
        paddingTop:0,
    },
    unit:{
        fontSize:12,
        
    },
    icon:{
        
    }
});


export default SetDestinationSetRouteDetail;