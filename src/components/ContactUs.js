import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    FlatList, ScrollView, Switch, Share
} from "react-native";
import {Container, Content, Item, Icon, Body, Card, Textarea, Label, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Communications from 'react-native-communications';
import  Modal  from "react-native-modal";

function ContactUs({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [complaint, setComplaint] = useState('');

    function toggleModal () {
        setShowModal(!showModal);
    };

    function sendComplaint () {
        setShowModal(!showModal);
    };


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <View style={[styles.position_R , styles.bgFullWidth, styles.Width_100]}>
                    <View style={[styles.Width_100 , styles.paddingHorizontal_20 , styles.marginTop_55]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25, styles.transform , styles.alignStart]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_15]}>{ i18n.t('contactUs')}</Text>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_15 , styles.marginBottom_10]}>{ i18n.t('communications')}</Text>
                        <Card style={[{padding:15} , styles.Radius_10 , styles.marginBottom_15]}>
                            <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/phone_call.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>0123456789</Text>
                            </TouchableOpacity>
                            <View style={[styles.Width_90 , styles.flexCenter , styles.marginVertical_15 , {borderWidth:.5 , borderColor:'#ddd'}]}/>
                            <TouchableOpacity onPress={() => Communications.email(['amany@gmail.com', 'ana@gmail.com'],null,null,'My Subject','My body text')} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/email_contact.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>amany@gmail.com</Text>
                            </TouchableOpacity>
                            <View style={[styles.Width_90 , styles.flexCenter , styles.marginVertical_15 , {borderWidth:.5 , borderColor:'#ddd'}]}/>
                            <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone='+'012365477')} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/whatsapp_contact.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>012365477</Text>
                            </TouchableOpacity>
                        </Card>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_15 , styles.marginBottom_10]}>{ i18n.t('socialMedia2')}</Text>
                        <Card style={[{padding:15} , styles.Radius_10 , styles.marginBottom_15]}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/facebook_contact.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>https://www.facebook.com</Text>
                            </TouchableOpacity>
                            <View style={[styles.Width_90 , styles.flexCenter , styles.marginVertical_15 , {borderWidth:.5 , borderColor:'#ddd'}]}/>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/twitter_contact.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>https://www.twitter.com</Text>
                            </TouchableOpacity>
                            <View style={[styles.Width_90 , styles.flexCenter , styles.marginVertical_15 , {borderWidth:.5 , borderColor:'#ddd'}]}/>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')} style={[styles.Width_100 , styles.directionRow]}>
                                <Image source={require('../../assets/images/instagram_contact.png')} style={[styles.footerIcon , {marginRight:15}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>https://www.instagram.com</Text>
                            </TouchableOpacity>
                        </Card>

                        <TouchableOpacity  onPress={toggleModal}>
                            <Text style={[styles.textBold , styles.text_black, styles.textDecoration , styles.textSize_16 , styles.marginTop_55 , {alignSelf:'center'} ]}>{ i18n.t('complaint')}</Text>
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

                                <Label style={[styles.label ,{ color:COLORS.blue ,top:8}]}>{ i18n.t('complaint') }</Label>
                                <Textarea
                                    style={[styles.input, styles.height_120,styles.Active , styles.Width_95 , styles.paddingVertical_20, styles.text_black]}
                                    onChange={(e) => setComplaint(e.target.value)}
                                    value={complaint}
                                />

                                <TouchableOpacity onPress={() => sendComplaint()} style={[styles.blueBtn , styles.Width_95, styles.marginBottom_35]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('send') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>
                </View>
            </Content>
        </Container>
    );
}

export default ContactUs;
