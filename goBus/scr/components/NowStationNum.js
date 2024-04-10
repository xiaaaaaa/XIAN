//查詢 "目前的站牌名稱" 是在json檔中 "該路線的第幾個站牌"
//回傳 相應站牌到站時間
//busRoute.routes[0].data[NowStationNum].arrivalTime

import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";

const NowStationNum  = ({stationNum, routeData}) => {
    // let stationNum2 = stationNum;
    // if(stationNum === 32){
    //     return(
    //         <Text>{stationNum}</Text>
    //         // <Text>七</Text>
    //     )
    // }

    let nowStationNum = 0;
    return(
        <Text>{routeData}</Text>
        // <Text>七</Text>
    )
    
    // for(let i=0; i< stationNum; i++){
    //     if
    // }
}

export default NowStationNum;