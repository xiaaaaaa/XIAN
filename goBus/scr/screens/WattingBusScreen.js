import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, ScrollView, Button, ButtonText } from 'react-native';
import { Text, VStack, HStack, Fab, Box, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Heading, Icon, CloseIcon } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'


const WattingBus = ({ route }) => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/741/977/non_2x/back-to-school-little-girl-with-teacher-waiting-for-bus-at-bus-stop-vector.jpg' }}
                    style={{ width: 350, height: 150, margin: 20, borderRadius: 14 }}
                />
            </View>
            <View style={styles.BusNumContent}>
                <Text style={styles.BusNumText}>18</Text>
                <Text style={styles.BusNumRouteText}>往萬華</Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.Line}></Text>
                <View style={styles.DetailRoute}>
                    <DetailRoute />
                </View>
            </View>

            <Pressable
                onPress={() => navigation.navigate('Home')}>
                <HStack style={styles.cancelBTN}>
                    <Text style={styles.btnText}>取消搭車</Text>
                </HStack>
            </Pressable>
            <Fab bg="#C4D7F3" size="sm" right="$4" bottom="$5" onPress={() => { navigation.navigate('TakingBus'); setShowModal(true) }}>
                <MaterialCommunityIcons name="arrow-right" color={'#fff'} size={30} />
            </Fab>
            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                }}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalBody>
                        <Text>到站通知</Text>
                        <Text>18(國立臺北教育大學) 即將到站</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>

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
    contentContainer: {
        height: 390,
        width: 370
    },
    Line: {
        width: 3,
        height: 390,
        backgroundColor: '#C4D7F3',
        marginLeft: 332
    },
    DetailRoute: {
        height: 380,
        width: 370,
        marginTop: -390
    },
    BusNumContent:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginTop:-10
    },
    BusNumText: {
        color: '#000000',
        fontSize: 36,
        paddingRight:5,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    BusNumRouteText:{
    },
    text: {
        margin: 20,
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

        shadowOffset: { width: 0, height: 20 },
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