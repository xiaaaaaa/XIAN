import React from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="搜尋公車路線"
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        borderRadius: 14,
                        paddingHorizontal: 10,
                        marginTop: 10,
                        width:400,
                        height:50,

                    }}
                    inputContainerStyle={{
                        backgroundColor: '#EFEFF0',
                        margin: 5,
                        borderRadius: 14,
                    }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});