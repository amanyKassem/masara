import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body} from 'native-base'
import Carousel , { Pagination , getInputRangeFromIndexes  } from 'react-native-snap-carousel';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
function Home({navigation}) {

    const carouselRef = useRef(null)

    const [search, setSearch] = useState('');

    const [offers, setOffers] = useState([
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/women_pic.png') , icon:require('../../assets/images/flower.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_hall.png') , icon:require('../../assets/images/hall.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_cake.png') , icon:require('../../assets/images/sweet.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/bg_one.png') , icon:require('../../assets/images/sweet.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_hall.png') , icon:require('../../assets/images/sweet.png')},
    ]);

    const [spinner, setSpinner] = useState(false);

    function scrollInterpolator (index, carouselProps) {
        const range = [3, 2, 1, 0, -1]; // <- Remember that this has to be declared in a reverse order
        const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
        const outputRange = range;

        return { inputRange, outputRange };
    }

    function _animatedStyles (index, animatedValue, carouselProps) {
        const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
        const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

        return {
            zIndex: carouselProps.data.length - index,
            opacity: animatedValue.interpolate({
                inputRange: [0, 1 , 2],
                outputRange: [1, 0.7 , 0.6],
            }),
            transform: [{
                // rotate: animatedValue.interpolate({
                //     inputRange: [-1, 0, 1, 2, 3],
                //     outputRange: ['0deg', '0deg', '-1deg', '-1.1deg', '0deg'],
                //     extrapolate: 'clamp'
                // }) ,
                translateY: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: ['0deg', '-800deg', '700deg', '2200deg', '0deg'],
                    extrapolate: 'clamp'
                }) ,
                scale :
                    animatedValue.interpolate({
                        inputRange: [-1, 0, 1, 2, 3],
                        outputRange: [0 , 1 , 0.9, 0.8,0],
                        extrapolate: 'clamp'
                }) ,
            }, {
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: [
                        -sizeRef,
                        0,
                        -sizeRef *1.11, // centered
                        -sizeRef * 2.5, // centered
                        -sizeRef * 3 // centered
                    ],
                    extrapolate: 'clamp'
                })
            }],
        };
    }

    useEffect(() => {

    }, [])

   function _renderItem ({item, index}) {
        return (
            <View style={[styles.Width_100]}>
                <Image source={item.image} style={[{width:'100%' , height:200 , borderRadius:10}]} resizeMode={'cover'} />
            </View>
        );
    }



    return (
        <Container>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                    <View style={[styles.position_R , styles.Width_100 , styles.paddingHorizontal_15 ]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/d_Logo.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginHorizontal_5 ]}>{ i18n.t('welcome') } , أماني</Text>
                        </View>

                        <View style={[styles.position_R, styles.height_90, styles.flexCenter, styles.marginBottom_5 , styles.Width_100]}>
                            <TouchableOpacity style={[styles.searchIcon , styles.directionRow]}>
                                <Image source={require('../../assets/images/ico.png')} style={[styles.smImage]} resizeMode={'contain'} />
                                <Text style={[styles.textBold , styles.text_gray , styles.textSize_18 , styles.marginHorizontal_5 ]}>|</Text>
                            </TouchableOpacity>
                            <Input style={[styles.searchInput , styles.bg_light_gray , styles.marginVertical_20]}
                                   placeholder={i18n.translate('search')}
                                   placeholderTextColor={COLORS.gray}
                                   onChange={(e) => setSearch(e.target.value)}
                                   value={search}
                            />
                        </View>
                        <View style={[styles.directionRowSpace]}>
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginHorizontal_5 ]}>{ i18n.t('services')}</Text>
                            <TouchableOpacity>
                                <Text style={[styles.textBold , styles.text_gray, styles.textDecoration , styles.textSize_12 , styles.marginHorizontal_5 ]}>{ i18n.t('viewAll')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.push('notifications')}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13]}>اشعارات</Text>
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20]}>
                        <ScrollView style={[styles.scrollView ]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/bg_order.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>القاعات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>حفلات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/bg_order.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>القاعات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>حفلات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/bg_order.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>القاعات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>حفلات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/bg_order.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>القاعات</Text>
                            </View>

                            <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollImg]} resizeMode={'cover'} />
                                <Text style={[styles.textRegular , styles.text_black, styles.textSize_12 , styles.marginHorizontal_5 ]}>حفلات</Text>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={[styles.position_R , styles.Width_100 , styles.paddingHorizontal_15 ]}>
                        <View style={[styles.directionRowSpace]}>
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginHorizontal_5 ]}>{ i18n.t('offers')}</Text>
                            <TouchableOpacity>
                                <Text style={[styles.textBold , styles.text_gray, styles.textDecoration , styles.textSize_12 , styles.marginHorizontal_5 ]}>{ i18n.t('viewAll')}</Text>
                            </TouchableOpacity>
                        </View>
                        <Carousel
                            ref={carouselRef}
                            layout={'tinder'}
                            // layoutCardOffset={`-5`}
                            data={offers}
                            renderItem={_renderItem}
                            sliderWidth={width-30}
                            itemWidth={width-30}
                            loop={true}
                            autoplay={true}
                            slideStyle={[styles.marginVertical_25 , styles.flexCenter , {left:0,} ]}
                            scrollInterpolator={scrollInterpolator}
                            slideInterpolatedStyle={_animatedStyles}
                            useScrollView={true}
                        />
                    </View>

                </Content>
        </Container>
    );
}

export default Home;


