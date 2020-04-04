import React, { useState , useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions , I18nManager, AsyncStorage} from "react-native";
import { Container, Content} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Spinner from "react-native-loading-spinner-overlay";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Intro({navigation}) {

    const [intro, setIntro] = useState([
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/women_pic.png') , icon:require('../../assets/images/flower.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_hall.png') , icon:require('../../assets/images/hall.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_cake.png') , icon:require('../../assets/images/sweet.png')},
    ]);

    useEffect(() => {

    }, [])

    function navigateToLogin(){
        AsyncStorage.setItem('intro', 'true');
        navigation.push('login');
    }


    return (
        <Container>
            {/*<Spinner visible = { this.state.spinner } />*/}
            <Content>
                <Swiper dotStyle={[styles.doteStyle]}
                        activeDotStyle={[styles.activeDot]}
                        key={intro.length}
                        containerStyle={{}} showsButtons={true}
                        buttonWrapperStyle={{top:height-95, height:50 , paddingRight:50 }}
                        prevButton={<View/>}
                        style={{ flexDirection: 'row-reverse' }}
                        nextButton={<Text style={[styles.textBold ,{color:'#fff'}]}>{ i18n.t('next') }</Text>}
                        autoplay={false} loop={false}>

                    {
                        intro.map((intr, i) => {
                            return(
                                <View style={{}} key={'_' + i}>
                                    <Image source={intr.image} style={[styles.swiperImg]} resizeMode={'cover'} />
                                    <View style={[styles.swiperOverlay]}/>
                                    <View style={[styles.swiperborder]}/>
                                    <View style={[styles.directionColumnCenter , styles.heightFull , styles.Width_60 , styles.flexCenter
                                        , { zIndex:1, position:"absolute"}]}>
                                        <Image source={intr.icon} style={[styles.icoImage , styles.marginBottom_15]} resizeMode={'contain'} />
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_18, styles.textCenter , styles.marginBottom_10 ]}>{ intr.title }</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_14, styles.textCenter ]}>{ intr.description }</Text>
                                        {
                                            (I18nManager.isRTL ? i+1 : i+3) === intro.length ?
                                                <TouchableOpacity onPress={navigateToLogin} style={[styles.blueBtn]}>
                                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('startNow') }</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={navigateToLogin} style={{position:'absolute' , bottom:60 , left:-20}}>
                                                    <Text style={[styles.textBold ,{color:'#fff'}]}>{ i18n.t('skip') }</Text>
                                                </TouchableOpacity>
                                        }

                                    </View>
                                </View>
                            )
                        })
                    }

                </Swiper>
            </Content>
        </Container>
    );
}

export default Intro;


