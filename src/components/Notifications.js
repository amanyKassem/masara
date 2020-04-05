import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Notifications({navigation}) {


    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

    }, [])



    return (
        <Container>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                    <View style={[styles.position_R , styles.bgFullWidth, styles.marginVertical_15,
                        styles.marginVertical_25, styles.Width_100]}>

                        <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_50]}>
                            <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.marginBottom_25]}>
                                <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>

                            <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('notifications') }</Text>
                        </View>

                        <View style={[styles.flexCenter , styles.Width_100]}>
                            <Image source={require('../../assets/images/active_notifcation.png')} style={[styles.upImage]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.Width_70
                                , styles.marginBottom_5 , styles.textCenter , styles.marginVertical_25]}>
                                { i18n.t('notiText') }
                            </Text>
                            <TouchableOpacity onPress={() => navigation.push('notificationsItems')} style={[styles.blueBtn , styles.Width_80]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('startNow') }</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Content>
        </Container>
    );
}

export default Notifications;


