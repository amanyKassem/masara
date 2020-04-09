import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, I18nManager, Share, ImageBackground} from "react-native";
import {Card, Container, Content, Form, Icon} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function OrderDetails({navigation}) {

    const [spinner, setSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

    }, []);

    function toggleModal () {
        setShowModal(!showModal);
    };

    function cancelOrder () {
        navigation.push('confirmCancellation')
        setShowModal(!showModal);
    };

    return (
        <Container>
            {/*<Spinner visible = { this.state.spinner } />*/}
            <ImageBackground source={require('../../assets/images/bg_one.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.swiperOverlay , styles.bgFullWidth , {zIndex:-1}]}/>
                    <View style={[ styles.heightFull, styles.directionColumnSpace, styles.paddingHorizontal_20 , styles.paddingVertical_45 ]}>
                        <View style={[styles.Width_100]}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25]}>
                                <Image source={require('../../assets/images/white_back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>

                            <Text style={[styles.textBold , styles.text_White , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('orderDetails') }</Text>
                        </View>
                        <View style={[styles.Width_100]}>
                            <View style={[styles.notiCard , {backgroundColor: "#888ca08c"}]}>
                                <TouchableOpacity onPress={() => navigation.push('orderDetails')} style={[styles.cardView , { borderLeftWidth: 0}]}>
                                    <View style={[styles.cardDate ,styles.paddingHorizontal_15]}>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>9/4</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>2020</Text>
                                    </View>
                                    <View style={[styles.paddingHorizontal_15 , styles.directionColumnC , styles.Width_100 ]}>
                                        <Text style={[styles.textBold , styles.text_black , styles.textSize_14 , styles.marginBottom_5]}>اسم الخدمة</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.marginBottom_5]}>وسيلة الدفع</Text>
                                        <Text style={[styles.textRegular , styles.text_blue , styles.textSize_14  , styles.alignStart]}>200 { i18n.t('RS') }</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.marginTop_15, styles.paddingHorizontal_10 , styles.marginHorizontal_10 ]}>
                                <View style={[styles.whiteDot]}/>
                                <View style={[styles.whiteDot, {top:10}]}/>
                                <View style={[styles.whiteDot, {top:20}]}/>
                                <View style={[styles.whiteDot, {top:30}]}/>
                                <View style={[styles.whiteDot, {top:40}]}/>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.marginBottom_5]}>جاري تنفيذ الطلب</Text>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('providerInfo') }</Text>
                            </View>

                            <View style={[styles.notiCard , {backgroundColor: "#888ca08c"}]}>
                                <TouchableOpacity onPress={() => navigation.push('orderDetails')} style={[styles.cardView , { borderLeftWidth: 0}]}>
                                    <View style={[styles.cardDate ,styles.paddingHorizontal_15]}>
                                        <View  style={[styles.iconImg , {borderRadius:50 , overflow:'hidden', borderColor:COLORS.blue, borderWidth:2}]}>
                                            <Image source={require('../../assets/images/pic_profile.png')} style={[styles.Width_100 , styles.heightFull]} resizeMode={'cover'} />
                                        </View>
                                    </View>
                                    <View style={[styles.paddingHorizontal_15 , styles.directionColumnC , styles.Width_100 ]}>
                                        <Text style={[styles.textBold , styles.text_black , styles.textSize_14 , styles.marginBottom_5]}>اماني فتحي</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 , styles.marginBottom_5, styles.alignStart]}>0123456789</Text>
                                        <Text style={[styles.textRegular , styles.text_blue , styles.textSize_14  , styles.alignStart]}>amany@gmail.com</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={toggleModal} style={[styles.blueBtn , styles.Width_90 , styles.flexCenter]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('cancelOrder') }</Text>
                            </TouchableOpacity>

                        </View>
                        <Modal
                            onBackdropPress                 ={toggleModal}
                            onBackButtonPress               = {toggleModal}
                            isVisible                       = {showModal}
                            style                           = {styles.bgModel}
                            avoidKeyboard                    = {true}
                        >

                            <View style={[{borderTopLeftRadius:30,
                                borderTopRightRadius:30},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_10 , styles.paddingHorizontal_10]}>
                                <View style={[styles.overHidden , styles.flexCenter , styles.Width_100]}>

                                    <View style={[styles.modalBorder]}/>

                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16
                                        , styles.textCenter , styles.marginBottom_5]}>{ i18n.t('confirmCancel') }</Text>

                                    <TouchableOpacity onPress={() => cancelOrder()} style={[styles.blueBtn , styles.Width_80]}>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() =>  toggleModal()} style={[styles.grayBtn , styles.Width_80 , styles.marginBottom_35]}>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('cancel') }</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default OrderDetails;


