import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Profile({navigation}) {


    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

    }, [])


    return (
        <Container>
            <ImageBackground source={require('../../assets/images/bg_languge.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                    <View style={[styles.position_R , styles.bgFullWidth, styles.marginVertical_15,
                        styles.marginVertical_25, styles.Width_100, styles.flexCenter]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>
                       <Text>profile wlahy</Text>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default Profile;


