import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Reservation({navigation , route}) {

    const service_id = route.params.service_id;
    const [cardHolder, setCardHolder] = useState('');
    const [cash, setCash] = useState('');
    const [cardHolderStatus, setCardHolderStatus] = useState(0);
    const [cashStatus, setCashStatus] = useState(0);

    useEffect(() => {

    }, [])


    function activeInput(type) {

        if (type === 'cardHolder' || cardHolder !== '') {
            setCardHolderStatus(1)
        }

        if (type === 'cash' || cash !== '') {
            setCashStatus(1)
        }

    }

    function unActiveInput(type) {

        if (type === 'cardHolder' && cardHolder === '') {
            setCardHolderStatus(0)
        }

        if (type === 'cash' && cash === '') {
            setCashStatus(0)
        }

    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth ]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25 , styles.marginTop_55, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_35]}>
                       <View style={[styles.directionRowSpace , styles.Width_100]}>
                           <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25 , styles.transform]}>
                               <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.push('payment')} style={[styles.marginBottom_25]}>
                               <Image source={require('../../assets/images/union.png')} style={[styles.smImage]} resizeMode={'contain'} />
                           </TouchableOpacity>
                       </View>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5, styles.alignStart]}>{ i18n.t('payment') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13, styles.alignStart]}>{ i18n.t('payFor') }</Text>
                    </View>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_30]}>
                        <Image source={require('../../assets/images/credit.png')} style={[styles.Width_100 , {height:200}]} resizeMode={'contain'} />
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5 , styles.marginTop_15, styles.alignStart]}>{ i18n.t('totalPrice') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.alignStart]}>5000 $</Text>

                        <KeyboardAvoidingView behavior={'absolute'}>
                            <Form style={[styles.flexCenter, styles.marginVertical_10, styles.Width_95 ]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_16 ,
                                    styles.marginBottom_20 , styles.alignStart , styles.marginTop_15]}>{ i18n.t('payInfo') }</Text>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5  ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R , { right: 7 ,paddingHorizontal:0}]}>
                                        <Label style={[styles.label,{ color:cardHolderStatus === 1 ?  COLORS.blue :  COLORS.gray, left: 75}]}>{ i18n.t('cardHolder') }</Label>
                                        <Input style={[styles.input, styles.height_50, (cardHolderStatus === 1 ? styles.Active : styles.noActive), {paddingLeft:75}]}
                                               onChange={(e) => setCardHolder(e.target.value)}
                                               onBlur={() => unActiveInput('cardHolder')}
                                               onFocus={() => activeInput('cardHolder')}
                                               keyboardType={'number-pad'}
                                        />
                                    </Item>
                                    <Image source={require('../../assets/images/master_card.png')}
                                           style={[{width:50 , height:50 , position:'absolute' , left:25 , top:0}]}
                                           resizeMode={'contain'} />
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter, styles.marginBottom_5]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, { right: 7 ,paddingHorizontal:0}]}>
                                        <Label style={[styles.label ,{ color:cashStatus === 1 ?  COLORS.blue :  COLORS.gray , left: 75}]}>{ i18n.t('cash') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (cashStatus === 1 ? styles.Active : styles.noActive), {paddingLeft:75}]}
                                            onChange={(e) => setCash(e.target.value)}
                                            onBlur={() => unActiveInput('cash')}
                                            onFocus={() => activeInput('cash')}
                                            keyboardType={'number-pad'}
                                        />
                                    </Item>
                                    <Image source={require('../../assets/images/cash.png')}
                                           style={[{width:50 , height:50 , position:'absolute' , left:25 , top:0}]}
                                           resizeMode={'contain'} />
                                </View>

                                <TouchableOpacity onPress={() => navigation.push('payment' , {service_id:service_id})}
                                     style={[styles.blueBtn , styles.Width_100 , styles.marginBottom_25]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('payNow') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('home', {
                                        screen: 'home',
                                        // params: { user: 'jane' },
                                    })
                                }>
                                    <Text style={[styles.textRegular , styles.text_black , styles.textDecoration , styles.textSize_16]}>{ i18n.t('goToHome') }</Text>
                                </TouchableOpacity>
                            </Form>
                        </KeyboardAvoidingView>
                    </View>


                </View>
            </Content>
        </Container>
    );
}

export default Reservation;


