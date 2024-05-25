import React, { useEffect, useState } from 'react';
import { StyleSheet, Keyboard, View, Text, TouchableWithoutFeedback, FlatList, TextInput, Pressable } from 'react-native';
import BusRouteData from "../json/BusRoute.json";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign"

const Search = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(BusRouteData[0].data);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        filterList(search);
    }, [search]);

    const updateSearch = (search) => {
        setSearch(search);
    };
    const filterList = (searchValue) => {
        if (searchValue === '') {
            setFilteredData([]);
        } else {
            let updatedList = data.filter((item) => {
                return item.busNum.toString().indexOf(search.toString()) !== -1
            })
            setFilteredData(updatedList);
        }
    };
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };
    const handleIconPress = () => {
        console.log("press button");
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <View style={styles.searchspace}>
                    <Icon name={'search1'} size={20} style={styles.icon} />
                    <TextInput
                        onChangeText={updateSearch}
                        value={search}
                        type="text"
                        style={styles.Input}
                        placeholder='搜尋公車路線' />
                </View>
                <View>
                    <Text style={styles.searchTitle}>搜尋紀錄</Text>
                    <FlatList
                        data={filteredData.length > 0 ? filteredData : data}
                        renderItem={({ item }) =>
                            <View style={styles.searchResultContain}>

                                <View >
                                    <Text style={styles.searchResult}>{item.busNum}</Text>
                                    <Text style={styles.searchResultDetail}>{item.detail[0].startEndStation}</Text>
                                </View>

                                <View style={styles.searchResultContent}>
                                    <Icon name={'heart'} size={20} style={styles.heart} />
                                    <Pressable onPress={() => navigation.navigate('DetailRoute')}>
                                        <Icon name={'right'} size={20} style={styles.right} />
                                    </Pressable>
                                </View>

                            </View>
                        }
                        keyExtractor={(item) => item.busNum}
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
        marginBottom: 5,
        fontSize: 18,
        textAlign: 'right'
    },
    line: {
        width: 350,
        height: 2,
        backgroundColor: '#C4D7F3',
        marginLeft: 25
    },
    searchspace: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#848488',
        backgroundColor: '#EFEFF0',
        height: 35,
        marginLeft: '10%',
        marginTop: '4%',
        paddingTop: 7,
        paddingLeft: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      Input: {
        backgroundColor: '#EFEFF0',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 35,
        width: 300,
        marginTop: '4%',
        fontSize: 18,
        paddingLeft: 10
      },
      searchTitle: {
        fontSize: 18,
        marginTop: '4%',
        marginLeft: '10%',
      },
      searchResultContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
      },
      searchResultContent: {
        flexDirection: 'row'
      },
      searchResult: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 40,
      },
      searchResultDetail: {
        marginLeft: 40,
        marginTop: 5,
      },
      heart: {
        color: '#EBAFA3',
        height: 35,
        marginTop: 23,
        marginRight: '15%',
      },
      right: {
        color: '#C4D7F3',
        marginTop: 23,
      }
});

export default Search;