import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    I18nManager,
    Linking,
    ScrollView, Switch
} from "react-native";
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
            <ImageBackground source={require('../../assets/images/pic_profile.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.swiperOverlay , styles.bgFullWidth , {zIndex:-1}]}/>
                    <View style={[ styles.heightFull , styles.directionColumnSpace]}>
                        <View style={[styles.Width_100 , styles.topNav]}>
                            <ScrollView style={{}} contentContainerStyle={[styles.directionRowSpace , styles.Width_100 , styles.paddingHorizontal_15 , {
                                paddingTop:15
                            }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('home', {
                                        screen: 'home',
                                        // params: { user: 'jane' },
                                    })
                                }>
                                    <Image source={require('../../assets/images/menu_home.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <View  style={[styles.iconImg , {borderRadius:50 , overflow:'hidden', borderColor:COLORS.blue, borderWidth:2}]}>
                                    <Image source={require('../../assets/images/pic_profile.png')} style={[styles.Width_100 , styles.heightFull]} resizeMode={'cover'} />
                                </View>
                                <TouchableOpacity onPress={() => navigation.push('favourite')}>
                                    <Image source={require('../../assets/images/menu_like.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.push('about')}>
                                    <Image source={require('../../assets/images/menu_about.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.push('settings')}>
                                    <Image source={require('../../assets/images/menu_setting.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.transformReverse]}>
                                    <Image source={require('../../assets/images/menu_logout.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>


                        <View style={[styles.Width_100 , styles.bottomLayCurve]}>
                            <View style={[styles.Width_100 , styles.directionRowSpace]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 , styles.marginBottom_5]}>
                                    أماني قاسم
                                </Text>
                                <TouchableOpacity onPress={() => navigation.push('editProfile')}>
                                    <Image source={require('../../assets/images/edit_profile.png')} style={[styles.footerIconProfile]} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>

                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 , styles.marginBottom_5, styles.alignStart]}>
                                0123456789
                            </Text>

                            <Text style={[styles.textRegular , styles.text_blue , styles.textSize_18 , styles.alignStart ]}>
                                amany@gmail.com
                            </Text>

                        </View>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default Profile;


