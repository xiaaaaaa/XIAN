import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box, Center, VStack } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeBusDetailCardDetail = (props) => {
    const {data} = props.busDetail;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Center flex={1}  style={styles.busState}>
                    <Image 
                        style={styles.road}
                        source={require('../image/road.png')}
                    />
                    <HStack style={styles.detailCardText}>
                        <Center style={styles.arrivalBus}>
                            <MaterialCommunityIcons name="bus-side" color={'#2D2F31'} size={49}  style={styles.busIcon}/>
                            <Text style={styles.arrivalBusNum}>{data[0].routes[1].arrivalBusNum}</Text>
                        </Center>
                        <Center style={styles.arrivalTimeCard}>
                            <Text style={styles.SiteName}>國立台北教育大學</Text>
                            <HStack style={styles.arrivalTime}>
                                <Text style={styles.arrivalTimeNum}>{data[0].routes[1].data[6].arrivalTime}</Text>
                                <Text style={styles.unit}>分</Text>
                            </HStack>
                        </Center>
                    </HStack>
                </Center>
            )
        } else {
            return (
                <Center flex={1}  style={styles.busState}>
                    <Image 
                        style={styles.road}
                        source={require('../image/road.png')}
                    />
                    <HStack style={styles.detailCardText}>
                        <Center style={styles.arrivalBus}>
                            <MaterialCommunityIcons name="bus-side" color={'#2D2F31'} size={49}  style={styles.busIcon}/>
                            <Text style={styles.arrivalBusNum}>{data[0].routes[0].arrivalBusNum}</Text>
                        </Center>
                        <Center style={styles.arrivalTimeCard}>
                            <Text style={styles.SiteName}>國立台北教育大學</Text>
                            <HStack style={styles.arrivalTime}>
                                <Text style={styles.arrivalTimeNum}>{data[0].routes[0].data[6].arrivalTime}</Text>
                                <Text style={styles.unit}>分</Text>
                            </HStack>
                        </Center>
                    </HStack>
                </Center>
            )
        }
    }

    return(
        <View style={styles.busDetailCard}>
            <HStack style={styles.route}>
                <Text style={styles.busNum}>{data[0].busNum}</Text>
                <Text style={styles.toText}>往</Text>
                <Box flex={1}>
                    <SegmentedControlTab 
                        values={[data[0].routes[0].busRoute, data[0].routes[1].busRoute]}
                        activeTabStyle={{
                            width:194,
                            height:53,
                            backgroundColor: "#fff",   
                            borderColor: '#C4D7F3',
                            shadowColor:'#435a5e',
                            shadowOffset: { width: 0, height: 20},
                            shadowOpacity: 0.1,
                            // Android Only
                            elevation: 3,
                        }}
                        tabStyle={{ 
                            width:194,
                            height:53,
                            backgroundColor: "#C4D7F3",
                            borderColor: "#C4D7F3",
                            borderWidth:3,
                        }}
                        firstTabStyle={{ marginLeft: 10,  borderTopLeftRadius:9,borderBottomLeftRadius:9,}}
                        lastTabStyle={{ marginRight: 30, borderTopRightRadius:9, borderBottomRightRadius:9 }}
                        tabTextStyle={{ fontSize: 12, color: "#000"}}
                        activeTabTextStyle={{ fontSize: 12, color: "#000"}}
                        selectedIndex={selectedIndex}
                        onTabPress={(index) => setSelectedIndex(index)}
                    />
                </Box>
            </HStack>
            <SegmentedContent />
        </View>
    );
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
    route:{
        // height:900,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    SegmentedControl:{
        display:'flex', flexWrap:'wrap'
    },
    busNum:{
        paddingLeft:35,
        paddingRight:35,
        fontSize:55,
    },
    toText:{
        fontSize:20,
    },
    busState:{
        marginTop:60,
    },
    road:{

    },
    detailCardText:{
        marginTop:-70,
        
    },
    arrivalBus:{
        // borderColor:'#000',
        // borderWidth:1,
        marginRight:20,
    },
    busIcon:{
        marginBottom:-6
    },
    arrivalBusNum:{
        backgroundColor:'#E1E9F7',
        fontSize:16,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:3,
    },
    arrivalTimeCard:{
        // borderColor:'#000',
        // borderWidth:1,
    },
    SiteName:{
        fontSize:16,
        marginBottom:10
    },
    arrivalTime:{
        backgroundColor:'#E1E9F7',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:4,
        display:'flex',
        alignItems:'baseline'
    },
    arrivalTimeNum:{
        fontSize:24,
        paddingRight:7
    },
    unit:{
        fontSize:16,
        
    }
});

export default HomeBusDetailCardDetail;