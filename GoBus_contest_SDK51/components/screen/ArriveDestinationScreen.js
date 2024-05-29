import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Platform} from 'react-native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const WattingBus = ({ route }) => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../image/waitingBus.png')}
                    style={{ width: 230, height: 180, marginTop: 30, marginBottom: 10, borderRadius: 14 }}
                />
            </View>
            <View style={styles.Content}>
                <Text style={styles.Text}>您已抵達目的地</Text>
                <Text style={styles.Text}>請別忘了隨身行李</Text>
                <Text style={styles.Text}>並祝您旅途愉快!</Text>
            </View>
            <Pressable
                onPress={() => navigation.navigate('Home')}>
                <HStack style={styles.cancelBTN}>
                    <Text style={styles.btnText}>返回首頁</Text>
                </HStack>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Content: {
        height: 200,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 20,
        fontWeight: 500,
        color: '#000',
        marginBottom: 5,
    },
    cancelBTN: {
        width: 145,
        height: 46,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 60,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#8FAFDE',
        borderWidth: 2,
        borderRadius: 14,
        shadowColor: '#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    btnText: {
        color: '#8FAFDE',
        fontSize: 24,
        paddingTop: 3,
        paddingBottom: 5,
        marginLeft: 5,
    },
});

export default WattingBus;