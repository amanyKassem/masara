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
    Dimensions, AsyncStorage
} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import {connect} from "react-redux";
import { chooseLang } from '../actions';

const height = Dimensions.get('window').height;

function Language({navigation , language, chooseLang}) {

    const [lang, setLang] = useState('');

    useEffect(() => {

    }, []);

    function selectLang(lang) {
        setLang(lang)
    }

    function onChooseLang(){
        // alert(language)
        if (language !== lang){
            chooseLang(lang);
        }
        navigation.navigate('intro')
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth ]}>
                <Image source={require('../../assets/images/flowers.png')} style={[styles.flowersImg]} resizeMode={'contain'} />
                <View style={[styles.position_R , styles.bgFullWidth, styles.Width_100, styles.flexCenter , {top:-50} ]}>
                    <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_40]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_20 , styles.marginBottom_5]}>{ i18n.t('language') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ i18n.t('chooseLang') }</Text>
                    </View>

                    <Form style={[styles.flexCenter, styles.Width_90]}>

                        <TouchableOpacity onPress={() => selectLang('ar')} style={[styles.chooseLang , styles.directionRowSpace , lang === 'ar' ? styles.Active : styles.noActive , styles.marginBottom_25]}>
                            <Text style={[styles.textRegular , lang === 'ar' ? styles.text_blue : styles.text_gray , styles.textSize_14 , styles.langFloat]}>{lang === 'ar' ? i18n.t('selectedLang') : ''}</Text>
                            <Text style={[styles.textRegular , lang === 'ar' ? styles.text_blue : styles.text_gray , styles.textSize_14]}>عربي</Text>
                            <Icon style={[styles.textSize_20 , lang === 'ar' ? styles.text_blue : styles.text_gray ]} type="Feather" name={lang === 'ar' ? 'check' : ''} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectLang('en')} style={[styles.chooseLang , styles.directionRowSpace , lang === 'en' ? styles.Active : styles.noActive ]}>
                            <Text style={[styles.textRegular , lang === 'en' ? styles.text_blue : styles.text_gray , styles.textSize_14 , styles.langFloat]}>{lang === 'en' ? i18n.t('selectedLang') : ''}</Text>
                            <Text style={[styles.textRegular , lang === 'en' ? styles.text_blue : styles.text_gray , styles.textSize_14]}>English</Text>
                            <Icon style={[styles.textSize_20 , lang === 'en' ? styles.text_blue : styles.text_gray ]} type="Feather" name={lang === 'en' ? 'check' : ''} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onChooseLang} style={[styles.blueBtn , styles.Width_95]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                        </TouchableOpacity>

                    </Form>
                </View>
            </Content>
        </Container>
    );
}

const mapStateToProps = ({lang}) => {
    return {
        language    : lang.lang
    };
};

export default connect(mapStateToProps, { chooseLang })(Language);


