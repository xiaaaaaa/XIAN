import React from 'react';
import { View, Text, SectionList, FlatList, StyleSheet, StatusBar} from "react-native"
import BusRouteData from "../json/BusRoute.json";
import DetailRouteDetail from "./DetailRouteDetail"

const DetailRoute = () => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={BusRouteData[0].data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <DetailRouteDetail busRoute={item}/>}
                keyExtractor={ item => item.title }
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
export default DetailRoute;