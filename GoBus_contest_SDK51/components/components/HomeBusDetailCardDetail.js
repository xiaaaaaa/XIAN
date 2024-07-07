import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, Platform } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box, Center, VStack } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withSequence,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { Provider , useDispatch, useSelector } from "react-redux";
import { selectbusNum } from "../redux/Slice";
import { selectGoBack } from "../redux/Slice";
import { setbusInfoBus, setgoBack } from "../redux/Slice";




const HomeBusDetailCardDetail = (props) => {
    const { data } = props.busDetail;
    // let {busRoute} = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    let station1 = data[0].routes[0].busRoute;
    let station2 = data[0].routes[1].busRoute;
    //animation
    const translateX = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));


    // state ---------
    const busNum = useSelector(selectbusNum);
    const goBack = useSelector(selectGoBack);

    const dispatch = useDispatch();
    //const [goBackState, setGoBackState] = useState(selectedIndex);
   
    useEffect(()=>{
        dispatch(setgoBack(selectedIndex))
    }, [selectedIndex]);

    // setBusNumState(selectedIndex);

    // const dispatch = useDispatch();
    //  const [busNumState, setBusNumState] = useState(busNum);
 
    //  useEffect(()=>{
    //      dispatch(setbusInfoBus(busNumState))
    //  }, [busNumState]);

    // const setSegmentedControlState = (index) => {
    //     (index) => setSelectedIndex(index);
    //     (index)=>setGoBackState(index);
    // }

    const findBusNum = (busNum) => {
        let nowBusNumArray = 100;
        for(let i=0; i<5; i++){
          if(data[i].busNum === busNum ){
            nowBusNumArray = i;
          }
        }
   
        return(nowBusNumArray)
    }

    const findStopNum = (goBackfuntion) => {
        let num = 0;
        for(let i=0; i<data[findBusNum(busNum)].routes[0].stationNum; i++){
            if(data[findBusNum(busNum)].routes[goBackfuntion].data[i].station === '國立臺北教育大學'){
                num = i;
            }
        }
        return(data[findBusNum(busNum)].routes[goBackfuntion].data[num].arrivalTime);
    }

    const shake = () => {
        translateX.value = withSequence(
            withTiming(-5, { duration: 50, easing: Easing.ease }),
            withTiming(5, { duration: 50, easing: Easing.ease }),
            withTiming(-5, { duration: 50, easing: Easing.ease }),
            withTiming(0, { duration: 50, easing: Easing.ease })
        );
    };

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Center flex={1} style={styles.busState}>
                    <Image
                        style={styles.road}
                        source={require('../image/road.png')}
                    />
                    <HStack style={styles.detailCardText}>
                        <Center style={styles.arrivalBus}>
                            <Animated.View style={animatedStyles}>
                                <Pressable
                                    onPress={() => {
                                        shake();
                                    }}>
                                    <MaterialCommunityIcons name="bus-side" color={'#2D2F31'} size={49} style={styles.busIcon} />
                                </Pressable>
                            </Animated.View>
                            <Text style={styles.arrivalBusNum}>{data[findBusNum(busNum)].routes[1].arrivalBusNum}</Text>
                        </Center>
                        <Center style={styles.arrivalTimeCard}>
                            <Text style={styles.SiteName}>國立台北教育大學</Text>
                            <HStack style={styles.arrivalTime}>
                                <Text style={styles.arrivalTimeNum}>{findStopNum(1)}</Text>
                                <Text style={styles.unit}>分</Text>
                            </HStack>
                        </Center>
                    </HStack>
                </Center>
            )
        } else {
            return (
                <Center flex={1} style={styles.busState}>
                    <Image
                        style={styles.road}
                        source={require('../image/road.png')}
                    />
                    <HStack style={styles.detailCardText}>
                        <Center style={styles.arrivalBus}>
                            <Animated.View style={animatedStyles}>
                                <Pressable
                                    onPress={() => {
                                        shake();
                                    }}>
                                    <MaterialCommunityIcons name="bus-side" color={'#2D2F31'} size={49} style={styles.busIcon} />
                                </Pressable>
                            </Animated.View>
                            <Text style={styles.arrivalBusNum}>{data[findBusNum(busNum)].routes[0].arrivalBusNum}</Text>
                        </Center>
                        <Center style={styles.arrivalTimeCard}>
                            <Text style={styles.SiteName}>國立臺北教育大學</Text>
                            <HStack style={styles.arrivalTime}>
                                <Text style={styles.arrivalTimeNum}>{findStopNum(0)}</Text>
                                <Text style={styles.unit}>分</Text>
                            </HStack>
                        </Center>
                    </HStack>
                </Center>
            )
        }
    }
    
    

    return (
        <View style={styles.busDetailCard}>
                {/* <Text>{selectedIndex}/{}/{goBack}jj{busNum}</Text> */}
                <HStack style={styles.route}>
                    {/* <Text>{selectedIndex}/{}/{goBack}sf{busNum}</Text> */}
                    {busNum === "和平幹線"?(
                        <Text style={[styles.busNum,{fontSize:30, marginRight:-20, marginLeft:-10}]}>{busNum}</Text>
                    ):(
                        <Text style={styles.busNum}>{busNum}</Text>
                    )}
                    {/* <Text style={styles.busNum}>{busNum}</Text> */}
                    <Text style={styles.toText}>往</Text>
                    {/* <Text style={styles.toText}>{data[findBusNum(busNum)].routes[0].busRoute}</Text> */}
                    <Box flex={1}>
                        {/* <Pressable onPress={() => setGoBackState(100)}style={{borderWidth:1}}> */}
                        <SegmentedControlTab 
                            values={[data[findBusNum(busNum)].routes[0].busRoute, data[findBusNum(busNum)].routes[1].busRoute]}
                            activeTabStyle={{
                                width: 194,
                                height: 53,
                                backgroundColor: "#fff",
                                borderColor: '#C4D7F3',
                                shadowColor: '#000',
                                shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
                                shadowOpacity: 0.1,
                                // Android Only
                                elevation: 3,
                            }}
                            tabStyle={{
                                width: 194,
                                height: 53,
                                backgroundColor: "#C4D7F3",
                                borderColor: "#C4D7F3",
                                borderWidth: 1,
                            }}
                            firstTabStyle={{ marginLeft: 10, borderTopLeftRadius: 9, borderBottomLeftRadius: 9, }}
                            lastTabStyle={{ marginRight: 30, borderTopRightRadius: 9, borderBottomRightRadius: 9, }}
                            textNumberOfLines={2}
                            tabTextStyle={{
                                fontSize: 16, color: "#354967", borderWidth: 0, fontWeight: '500',
                                textAlign: 'center',
                                lineHeight: 20,
                                padding: 0,
                                paddingVertical: 0,
                            }}
                            activeTabTextStyle={{ color: "#000", }}
                            selectedIndex={selectedIndex}
                            onTabPress={(index) => setSelectedIndex(index)}
                            // onPress = {setGoBackState(selectedIndex)}
                            // onTabPress={(index) => setSegmentedControlState(index)}

                        />
                        
                        {/* </Pressable> */}
                    </Box>
                </HStack>
                <SegmentedContent />
            </View>
        
    );
}

const styles = StyleSheet.create({
    busDetailCard: {
        width: 350,
        height: 190,
        backgroundColor: '#E1E9F7',
        display: 'flex',
        marginTop: 30,
        marginBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#fff',
        borderWidth: 0,
        borderRadius: 20,
    },
    route: {
        marginTop: 3,
        // height:900,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    SegmentedControl: {
        display: 'flex', flexWrap: 'wrap'
    },
    busNum: {
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 55,
    },
    toText: {
        fontSize: 20,
        paddingBottom: 4,
    },
    busState: {
        marginTop: 60,
    },
    road: {

    },
    detailCardText: {
        marginTop: -63,

    },
    arrivalBus: {
        // borderColor:'#000',
        // borderWidth:1,
        marginRight: 20,
    },
    busIcon: {
        marginBottom: -6
    },
    arrivalBusNum: {
        backgroundColor: '#E1E9F7',
        fontSize: 16,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    arrivalTimeCard: {
        // borderColor:'#000',
        // borderWidth:1,
    },
    SiteName: {
        fontSize: 16,
        marginBottom: 10
    },
    arrivalTime: {
        backgroundColor: '#E1E9F7',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
        display: 'flex',
        alignItems: 'baseline'
    },
    arrivalTimeNum: {
        fontSize: 24,
        paddingRight: 7
    },
    unit: {
        fontSize: 16,

    }
});

export default HomeBusDetailCardDetail;