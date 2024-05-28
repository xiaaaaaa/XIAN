import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box, 
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    ActionsheetContent,
    Center,
    Divider,
} from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Center } from "native-base";

const HomeBusRouteCard = props => {
    let {busRoute} = props;
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    const navigation = useNavigation();

    const findStopNum = () => {
        let num = 0;
        for(let i=0; i<busRoute.detail[0].stationNum; i++){
            if(busRoute.routes[0].data[i].station === '國立臺北教育大學'){
                num = i;
            }
        }
        return(busRoute.routes[0].data[num].arrivalTime);
    }

    if(busRoute.favoriteSotp === 0){
        
        return(
            <View style={styles.loveRoute}>
                <Pressable onPress={handleClose}>
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
                </Pressable>

                <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                    <ActionsheetBackdrop />
                    <ActionsheetContent h="$72" zIndex={999} style={{backgroundColor:'transparent'}}>
                        {/* <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper> */}
                        <Center style={styles.actionsheet}>
                            <Text style={styles.actionsheetTitle}>{busRoute.busNum}</Text>
                            <Divider style={styles.actionsheetDivider}/>
                            <Text onPress={() => {handleClose(); navigation.navigate("DetailRoute");}} style={styles.actionsheetText}>查看詳細路線</Text>
                            <Divider style={styles.actionsheetDivider} />
                            <Text onPress={handleClose} style={styles.actionsheetText}>設定為最愛路線</Text>
                        </Center>
                        <Center style={styles.actionsheet}>
                            <Text onPress={handleClose} style={styles.actionsheetText}>Cancel</Text>
                        </Center>
                    </ActionsheetContent>
                </Actionsheet>
            </View>

        )
    }else null;

}

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
        borderColor:'#999999',
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
        borderColor:'#fff',
    },
    busNum:{
        borderWidth:0,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
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
        
    },
    actionsheet:{
        width:377,
        backgroundColor:'#DFDFDF',
        marginBottom:10,
        borderWidth:0,
        borderRadius:20,
    },
    actionsheetTitle:{
        fontSize:17,
        color:'#747475',
        marginVertical:15,
    },
    actionsheetDivider:{
        backgroundColor:'#A5A5A7',
    },
    actionsheetText:{
        fontSize:17,
        color:'#007AFF',
        paddingHorizontal:80,
        paddingVertical:20,
        //marginVertical:20,
        borderWidth:0,
    },
});

export default HomeBusRouteCard;