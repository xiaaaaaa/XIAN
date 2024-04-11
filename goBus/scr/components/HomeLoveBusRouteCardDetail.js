import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeLoveBusRouteCardDetail = props => {
    let {busRoute} = props;


    const findStopNum = () => {
        let num = 0;
        for(let i=0; i<busRoute.detail[0].stationNum; i++){
            if(busRoute.routes[0].data[i].station === '國立臺北教育大學'){
                num = i;
            }
        }
        return(busRoute.routes[0].data[num].arrivalTime);
    }

    if(busRoute.favoriteSotp === 1){
        return(
            <View style={styles.loveRoute}>
                
                <HStack space="none" reversed={false} style={styles.busRouteCard}>
                    <View style={styles.busNumCard}>
                        <Text style={styles.busNum}>{busRoute.busNum}</Text>
                    </View>
                    <HStack style={styles.arrivalTimeCard}>
                        <Text style={styles.timeNum}>{findStopNum()}</Text>
                        <Text style={styles.unit}>分</Text>
                        <MaterialCommunityIcons name="chevron-right" color={'#000'} size={15} style={styles.icon}/>
                    </HStack>
                </HStack>
            
            </View>

        )
    }else null;

};

const styles = StyleSheet.create({
    loveRoute:{
        
    },
    busRouteCard:{
        width:null,
        height:32,
        marginRight:10,
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:9,
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
        width:27,
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

export default HomeLoveBusRouteCardDetail;