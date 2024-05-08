import React, {useState} from "react";
import { StyleSheet, Pressable } from 'react-native';
import { Text, View, HStack, Switch, Input, InputField, InputSlot, InputIcon,  Button, ButtonText, } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';


const SettingScreen = () => {
    const [edit, setEdit] = useState(0);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>帳號設定</Text>
            <HStack>
                <Text style={styles.DarkModeText}>使用者名稱</Text>
                <HStack>
                    {edit>0?
                        <Input style={styles.userNameEdit} variant="underlined" isReadOnly={false}>
                            <InputField type="text" />
                        </Input>
                        :
                        <Input style={styles.userName} variant="underlined" isReadOnly={true}>
                            <InputField type="text" />
                        </Input>
                    }
                    
                    
                    <Pressable
                        onPress={() => (edit>0? (setEdit(edit-1)):(setEdit(edit + 1)))}
                    >
                        {edit>0?
                            <HStack>
                                <MaterialCommunityIcons name="check" color={'#898A8D'} size={20} style={{marginTop:27}} />
                            </HStack>
                            :
                            <HStack>
                                <MaterialCommunityIcons name="pencil" color={'#898A8D'} size={20} style={{marginTop:27}} />
                            </HStack>
                        }
                        
                    </Pressable>
                </HStack>
            </HStack>
            <HStack style={styles.DarkMode}>
                <Text style={styles.DarkModeText}>更改密碼</Text>
                <Pressable onPress={() => navigation.navigate('ChangePassword')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.secondaryIcon} />
                </Pressable>
            </HStack>
            <Text style={styles.Text}>偏好設定</Text>
            <HStack style={styles.DarkMode}>
                <Text style={styles.DarkModeText}>深色主題</Text>
                <Switch size="md" isDisabled={false} style={styles.DarkModeSwitch} />
            </HStack>
            <HStack style={styles.context}>
                <Text style={styles.Text}>常見問題</Text>
                <Pressable onPress={() => navigation.navigate('Question')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.icon} />
                </Pressable>
            </HStack>
            <HStack style={styles.context}>
                <Text style={styles.Text}>使用方式</Text>
                <Pressable onPress={() => navigation.navigate('Usage')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.icon} />
                </Pressable>
            </HStack>
            <HStack style={styles.context}>
                <Text style={styles.Text}>版本</Text>
                <Text style={styles.versionText}>1.0</Text>
            </HStack>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: '100%',
        padding: 30,
        backgroundColor: "white"
    },
    userNameEdit:{
        width:70, 
        marginTop:15, 
        marginLeft:20, 
        marginRight:20, 
        // borderWidth:1,
        // borderRadius:10,
        // borderColor:'#fff',
        // backgroundColor:'#ebeced'
    },
    userName:{
        width:70, 
        marginTop:17, 
        marginLeft:20, 
        marginRight:20,
        borderWidth:1,
        borderColor:'#fff',
    },
    Text: {
        fontSize: 16,
        fontWeight:500,
        margin: 10,
        marginBottom: 20,
        color:'#000'
    },
    DarkMode: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DarkModeText: {
        color:'#000',
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
    context:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight:20,
    },
    icon:{
        marginTop:10
    },
    secondaryIcon:{
        marginTop:20,
        marginLeft:-50,
        borderWidth:0,
    },
    versionText:{
        marginTop:10,
        marginRight:10,
        color:'#898A8D'
    }


});

export default SettingScreen;