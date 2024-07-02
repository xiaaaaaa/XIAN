import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, Platform} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SegmentedControlTab from "react-native-segmented-control-tab";
import SetDestinationSetRoute from "./SetDestinationSetRoute";
import { Provider , useDispatch, useSelector } from "react-redux";
// import { selectbusNum } from "../redux/Slice";
// import { selectDestination } from "../redux/Slice";
import { selectbusNum } from "../redux/Slice";
import { selectDestination } from "../redux/Slice";
// import { setbusInfoDestination } from "../redux/slice";

const SetDestinationBasicInfo = (props) => {
    const {data} = props.busDetail;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const destination = useSelector(selectDestination);

    // state ---------
    const busNum = useSelector(selectbusNum);

    const findBusNum = (busNum) => {
       let nowBusNumArray = 100;
       for(let i=0; i<5; i++){
         if(data[i].busNum === busNum ){
           nowBusNumArray = i;
         }
       }
  
       return(nowBusNumArray)
    }

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <View style={styles.SetDestinationCard}>
                    <Center>
                        <Text style={[styles.destinationText,{fontWeight:'bold'}]}>抵達目的地：{destination}</Text>
                    </Center>
                    <SetDestinationSetRoute route={1}/>
                </View> 
            )
        } else {
            return (
                <View style={styles.SetDestinationCard}>
                    <Center>
                        <Text style={[styles.destinationText,{fontWeight:'bold'}]}>抵達目的地：{destination}</Text>
                    </Center>
                    <SetDestinationSetRoute route={0}/>
                </View> 
                // <Text>2</Text>
            )
        }
    }

    return(
        <Center>
            <Text style={styles.sectionHeader}>國立台北教育大學站</Text>
            <Text>{data[0].busNum}sdfg</Text>
            <HStack style={styles.route}>
                <Text style={styles.toText}>往</Text>
                <Box flex={1} style={{borderWidth:0}}>
                    <SegmentedControlTab 
                        values={[data[findBusNum(busNum)].routes[0].busRoute, data[findBusNum(busNum)].routes[1].busRoute]}
                       activeTabStyle={{
                            width:194,
                            height:53,
                            backgroundColor: "#fff",   
                            borderColor: '#C4D7F3',
                            shadowColor:'#000',
                            shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
                            shadowOpacity: 0.1,
                            // Android Only
                            elevation: 3,
                        }}
                        tabStyle={{ 
                            width:194,
                            height:53,
                            backgroundColor: "#C4D7F3",
                            borderColor: "#C4D7F3",
                            borderWidth:1,
                        }}
                        firstTabStyle={{ marginLeft: 5,  borderTopLeftRadius:9,borderBottomLeftRadius:9,}}
                        lastTabStyle={{ marginRight: 5, borderTopRightRadius:9, borderBottomRightRadius:9,}}
                        textNumberOfLines={2}
                        tabTextStyle={{ 
                            fontSize: 16, color: "#354967", borderWidth:0,fontWeight:'500',
                            textAlign: 'center',
                            lineHeight:20,
                            padding:0,
                            paddingVertical:0,
                        }}
                        activeTabTextStyle={{ color: "#000",}}
                        selectedIndex={selectedIndex}
                        onTabPress={(index) => setSelectedIndex(index)}
                    />
                </Box>
            </HStack>
            <SegmentedContent />
        </Center>
    )
}

const styles = StyleSheet.create({
    busDetailCard:{
        width:350,
        height:190,
        backgroundColor:'#E1E9F7',
        display:'flex',
        marginTop:36,
        marginBottom:15,
        marginLeft:'auto',
        marginRight:'auto',
        borderColor:'#fff',
        borderWidth:0,
        borderRadius:20,
    },
    destinationText:{
        fontSize:16,
        marginBottom:8,
    },
    sectionHeader:{
        fontSize:16,
        marginBottom:15,
    },
    route:{
        // height:900,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        width:186,
        marginBottom:30,
    },
    toText:{
        fontSize:16,
    },
    SetDestinationCard:{
        height:388,
        paddingBottom:0,
    },
});

export default SetDestinationBasicInfo;