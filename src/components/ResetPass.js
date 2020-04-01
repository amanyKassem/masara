import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function ResetPass({navigation}) {


    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [codeStatus, setCodeStatus] = useState(0);
    const [passwordStatus, setPasswordStatus] = useState(0);
    const [confirmPassStatus, setConfirmPassStatus] = useState(0);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

    }, [])

    function activeInput(type) {

        if (type === 'code' || code !== '') {
            setCodeStatus(1)
        }

        if (type === 'password' || password !== '') {
            setPasswordStatus(1)
        }

        if (type === 'confirmPass' || confirmPass !== '') {
            setConfirmPassStatus(1)
        }

    }

    function unActiveInput(type) {

        if (type === 'code' && code === '') {
            setCodeStatus(0)
        }

        if (type === 'password' && password === '') {
            setPasswordStatus(0)
        }

        if (type === 'confirmPass' && confirmPass === '') {
            setConfirmPassStatus(0)
        }

    }


    return (
        <Container>
            <ImageBackground source={require('../../assets/images/bg_languge.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                    <View style={[styles.position_R , styles.bgFullWidth, styles.marginVertical_15,
                        styles.marginVertical_25, styles.Width_100, styles.flexCenter]}>

                        <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_50]}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25]}>
                                <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>

                            <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('newpass') }</Text>
                            {/*<Text style={[styles.textRegular , styles.text_gray , styles.textSize_13]}>{ i18n.t('loginText') }</Text>*/}
                        </View>

                        <KeyboardAvoidingView behavior={'padding'} style={[styles.keyboardAvoid]}>
                            <Form style={[styles.Width_100 , styles.flexCenter, styles.marginVertical_10, styles.Width_90]}>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                        <Label style={[styles.label, styles.textRegular ,{ color:codeStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('code') }</Label>
                                        <Input style={[styles.input, styles.height_50, (codeStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChange={(e) => setCode(e.target.value)}
                                               onBlur={() => unActiveInput('code')}
                                               onFocus={() => activeInput('code')}
                                               keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter, styles.marginBottom_5]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                        <Label style={[styles.label ,{ color:passwordStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('password') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (passwordStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlur={() => unActiveInput('password')}
                                            onFocus={() => activeInput('password')}
                                            secureTextEntry
                                        />
                                    </Item>
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                        <Label style={[styles.label ,{ color:confirmPassStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('confirmPass') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (confirmPassStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChange={(e) => setConfirmPass(e.target.value)}
                                            onBlur={() => unActiveInput('confirmPass')}
                                            onFocus={() => activeInput('confirmPass')}
                                            secureTextEntry
                                        />
                                    </Item>
                                </View>


                                <TouchableOpacity onPress={() => navigation.navigate('login')} style={[styles.blueBtn , styles.Width_95]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                                </TouchableOpacity>

                            </Form>
                        </KeyboardAvoidingView>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default ResetPass;


