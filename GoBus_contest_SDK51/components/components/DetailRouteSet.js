import React from 'react';
import { View, Text, SectionList, FlatList, StyleSheet, StatusBar } from "react-native"
import BusRouteData from "../json/BusRoute.json";
import DetailRouteForDetail from "./DetailRouteForDetail"
import DetailRouteEndDetail from "./DetailRouteEndDetail"

const DetailRouteSet = ({ route }) => {
    const DetailRouteComponent = route === 0 ? DetailRouteForDetail : DetailRouteEndDetail;
    return (
        <View>
            <FlatList
            horizontal={false}
            data={BusRouteData[0].data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <DetailRouteComponent busRoute={item} />} 
            keyExtractor={item => item.title}
        />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
export default DetailRouteSet;