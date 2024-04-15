import React from "react";
import { StyleSheet, Pressable } from 'react-native';
import { Text, View, Switch } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>偏好設定</Text>
            <View style={styles.DarkMode}>
                <Text style={styles.DarkModeText}>深色主題</Text>
                <Switch size="md" isDisabled={false} style={styles.DarkModeSwitch} />
            </View>
            <View style={styles.context}>
                <Text style={styles.Text}>關於我們</Text>
                <Pressable onPress={() => navigation.navigate('AboutUs')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.icon} />
                </Pressable>
            </View>
            <View style={styles.context}>
                <Text style={styles.Text}>常見問題</Text>
                <Pressable onPress={() => navigation.navigate('Question')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.icon} />
                </Pressable>
            </View>
            <View style={styles.context}>
                <Text style={styles.Text}>使用方式</Text>
                <Pressable onPress={() => navigation.navigate('Usage')}>
                    <MaterialCommunityIcons name="chevron-right" color={'#898A8D'} size={30} style={styles.icon} />
                </Pressable>
            </View>
            <View style={styles.context}>
                <Text style={styles.Text}>版本</Text>
                <Text style={styles.versionText}>1.0</Text>
            </View>
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
        marginRight: 50
    },
    context:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight:20,
    },
    icon:{
        marginTop:10
    },
    versionText:{
        marginTop:10,
        color:'#898A8D'
    }


});

export default SettingScreen;