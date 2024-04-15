import React, { useState } from 'react';
import { StyleSheet, Keyboard, Platform, View, Text, ScrollView, TouchableWithoutFeedback, SectionList, FlatList, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import BusRouteData from "../json/BusRoute.json";
import SearchLoveRouteDetail from "../components/SearchLoveRouteDetail"
import SearchRecordRouteDetail from "../components/SearchRecordRouteDetail"

const Search = () => {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };

    const hideKeyboard = () => {
        Keyboard.dismiss();
    };
    const renderSectionHeader1 = ({ section, navigation }) => (
        <>
            <FlatList
                data={section.data}
                renderItem={({ item }) => <SearchRecordRouteDetail busRoute={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />
        </>
    );
    
    const renderSectionHeader2 = ({ section, navigation }) => (
        <>
            <FlatList

                data={section.data}
                renderItem={({ item }) => <SearchLoveRouteDetail busRoute={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />
        </>
    );
    const renderItem = ({ item, section, navigation }) => {
        return null
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <SearchBar
                    placeholder="搜尋公車路線"
                    onChangeText={updateSearch}
                    value={search}
                    inputStyle={{ color: '#000' }}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        borderRadius: 14,
                        paddingHorizontal: 10,
                        marginTop: 10,
                        width: 410,
                        height: 50,
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#EFEFF0',
                        margin: 5,
                        borderRadius: 14,
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>搜尋紀錄</Text>
                    <SectionList
                        sections={BusRouteData}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        renderSectionHeader={renderSectionHeader1}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                    <Text style={styles.line}></Text>
                    <Text style={styles.sectionTitle}>最愛路線</Text>
                    <SectionList
                        sections={BusRouteData}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        renderSectionHeader={renderSectionHeader2}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white'
    },
    content: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    sectionTitle: {
        margin: 30,
        marginBottom:5,
        fontSize: 18,
        textAlign: 'right'
    },
    line:{
        width:350,
        height:2,
        backgroundColor:'#C4D7F3',
        marginLeft:25
    }
});

export default Search;