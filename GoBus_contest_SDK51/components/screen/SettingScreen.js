import React, { useState } from "react";
import { StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, View, HStack, Switch, Input, InputField, InputSlot, InputIcon, Button, ButtonText, } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from "../redux/Slice";
import { updateUserName } from '../redux/Slice';

const SettingScreen = () => {
    const [edit, setEdit] = useState(0);
    const navigation = useNavigation();
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.counter.userName);


    const [inputValue, setInputValue] = useState(userName);

    const handleChangeText = (text) => {
        setInputValue(text);
    };

    const handleSave = () => {
        dispatch(updateUserName(inputValue));
    };

    const handleEditPress = () => {
        handleSave();
        setEdit(edit - 1);
    };
    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <Text style={styles.Text}>帳號設定</Text>
                <HStack>
                    <Text style={styles.DarkModeText}>使用者名稱</Text>
                    <HStack>
                        {edit > 0 ?
                            <Input style={styles.userNameEdit} variant="underlined" isReadOnly={false} >
                                <InputField type="text" onChangeText={handleChangeText}/>

                            </Input>
                            :
                            <Input style={styles.userName} variant="underlined" isReadOnly={true} value={userName}>
                                <InputField type="text" />
                            </Input>
                        }
                        <Pressable
                            onPress={() => (edit > 0 ? (handleEditPress()) : (setEdit(edit + 1)))}
                        >
                        {edit > 0 ?
                            <HStack>
                                <MaterialCommunityIcons name="check" color={'#3987FA'} size={20} style={{ marginTop: 27 }} />
                            </HStack>
                            :
                            <HStack>
                                <MaterialCommunityIcons name="pencil" color={'#898A8D'} size={20} style={{ marginTop: 26 }} />
                            </HStack>
                        }

                    </Pressable>
                </HStack>
            </HStack>
            <HStack style={styles.DarkMode}>
                <Text style={styles.DarkModeText}>更改密碼</Text>
                <Pressable onPress={() => navigation.navigate('ChangePassword')}>
                    <Icon name={'right'} size={20} style={[styles.right, { marginRight: 20 }]} />
                </Pressable>
            </HStack>
            {/* <Text style={styles.Text}>偏好設定</Text>
            <HStack style={styles.DarkMode}>
                <Text style={styles.DarkModeText}>深色主題</Text>
                <Switch size="md" isDisabled={false} style={styles.DarkModeSwitch} />
            </HStack> */}
            <HStack style={styles.context}>
                <Text style={styles.Text}>常見問題</Text>
                <Pressable onPress={() => navigation.navigate('Question')}>
                    <Icon name={'right'} size={20} style={[styles.right, { marginTop: 10 }]} />
                </Pressable>
            </HStack>
            <HStack style={styles.context}>
                <Text style={styles.Text}>使用方式</Text>
                <Pressable onPress={() => navigation.navigate('Usage')}>
                    <Icon name={'right'} size={20} style={[styles.right, { marginTop: 10 }]} />
                </Pressable>
            </HStack>
            <HStack style={styles.context}>
                <Text style={styles.Text}>版本</Text>
                <Text style={styles.versionText}>1.0</Text>
            </HStack>
        </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: '100%',
        padding: 30,
        backgroundColor: "white"
    },
    userNameEdit: {
        width: 70,
        marginTop: 15.5,
        marginLeft: 21,
        marginRight: 20,
        // borderWidth:1,
        // borderRadius:10,
        // borderColor:'#fff',
        // backgroundColor:'#ebeced'
    },
    userName: {
        width: 70,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        //marginBottom:3,
        borderWidth: 1,
        borderColor: '#fff',
    },
    Text: {
        fontSize: 16,
        fontWeight: 500,
        margin: 10,
        marginBottom: 20,
        color: '#000'
    },
    DarkMode: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DarkModeText: {
        color: '#000',
        fontSize: 16,
        marginTop: 25,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 10
    },
    DarkModeSwitch: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 0,
        marginRight: 20
    },
    context: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    icon: {
        marginTop: 10
    },
    secondaryIcon: {
        marginTop: 20,
        marginLeft: -50,
        borderWidth: 0,
    },
    versionText: {
        marginTop: 10,
        marginRight: 10,
        color: '#898A8D'
    },
    right: {
        color: '#D9D9D9',
        marginTop: 23,
    }


});

export default SettingScreen;