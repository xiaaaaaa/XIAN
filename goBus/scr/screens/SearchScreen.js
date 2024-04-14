import React from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    hideKeyboard = () => {
        Keyboard.dismiss();
    };
    render() {
        const { search } = this.state;

        return (
            <TouchableWithoutFeedback onPress={this.hideKeyboard}>
                <View style={styles.container} >
                    <SearchBar
                        placeholder="搜尋公車路線"
                        onChangeText={this.updateSearch}
                        value={search}
                        inputStyle={{ color: '#000' }}
                        containerStyle={{
                            backgroundColor: 'white',
                            borderBottomWidth: 0,
                            borderTopWidth: 0,
                            borderRadius: 14,
                            paddingHorizontal: 10,
                            marginTop: 10,
                            width: 400,
                            height: 50,
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#EFEFF0',
                            margin: 5,
                            borderRadius: 14,
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
