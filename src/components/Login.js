import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking, StyleSheet, Dimensions} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


function Login({navigation}) {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [deviceId, setDeviceId] = useState('');
    const [userId, setUserId] = useState(null);
    const [phoneStatus, setPhoneStatus] = useState(0);
    const [passwordStatus, setPasswordStatus] = useState(0);
    const [spinner, setSpinner] = useState(false);
    const [mapRegion, setMapRegion] = useState([]);
    const [mapRegion, setMapRegion] = useState([]);

    useEffect(() => {

    }, [])

    function activeInput(type) {

        if (type === 'phone' || phone !== '') {
            setPhoneStatus(1)
        }

        if (type === 'password' || password !== '') {
            setPasswordStatus(1)
        }

    }

    function unActiveInput(type) {

        if (type === 'phone' && phone === '') {
            setPhoneStatus(0)
        }

        if (type === 'password' && password === '') {
            setPasswordStatus(0)
        }

    }

	useEffect(async  () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			alert('صلاحيات تحديد موقعك الحالي ملغاه');
		}else {
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
			const userLocation = { latitude, longitude };
			this.setState({  initMap: false, mapRegion: userLocation });
		}

	});


    return (
        <Container>
            <ImageBackground source={require('../../assets/images/bg_languge.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                    <View style={[styles.position_R , styles.bgFullWidth, styles.marginVertical_15, styles.marginVertical_25, styles.Width_100, styles.flexCenter]}>
						<View style={styles_.container}>
							<MapView style={styles_.mapStyle} />
						</View>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

const styles_ = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

export default Login;


