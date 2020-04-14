import React, { useState , useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions , I18nManager, Share} from "react-native";
import {Container, Content, Form, Icon} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Spinner from "react-native-loading-spinner-overlay";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StarRating from "react-native-star-rating";
import COLORS from "../consts/colors";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Details({navigation}) {

    const [intro, setIntro] = useState([
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/bg_one.png') , icon:require('../../assets/images/flower.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/women_pic.png') , icon:require('../../assets/images/hall.png')},
        {description:'هذا النص هو مثال لنص يمكن استبداله اه والله مبكدبش عليك' , title:'مرحبا بكم'  ,image:require('../../assets/images/pic_cake.png') , icon:require('../../assets/images/sweet.png')},
    ]);
    const [isFav , setFav ] = useState(false);
    const [isAutoplay , setIsAutoplay ] = useState(false);
    const [isDatePickerVisible , setIsDatePickerVisible ] = useState(false);
    const [date , setDate ] = useState('');
    const [spinner, setSpinner] = useState(false);

    function toggleFavorite (id){
        setFav(!isFav)
    }

    useEffect(() => {

    }, []);

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = myDate => {
        // console.warn("A date has been picked: ", myDate);
        let formatted_date = myDate.getFullYear() + "-" + ("0"+(myDate.getMonth() + 1)).slice(-2) + "-" + ("0" +myDate.getDate()).slice(-2);
        hideDatePicker();
        setDate(formatted_date);
    };

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Msara App',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            {/*<Spinner visible = { this.state.spinner } />*/}
            {/*<Content style={{height}}>*/}
                <Swiper dotStyle={[styles.doteStyle2]}
                        activeDotStyle={[styles.activeDot2]}
                        key={intro.length}
                        containerStyle={{}} showsButtons={false}
                        style={{ flexDirection: 'row-reverse' }}
                        autoplay={isAutoplay} loop={true} >

                    {
                        intro.map((intr, i) => {
                            return(
                                <View style={{}} key={'_' + i}>
                                    <Image source={intr.image} style={[styles.swiperImg]} resizeMode={'cover'} />
                                    <View style={[styles.swiperOverlay]}/>
                                    <View style={[ styles.heightFull , styles.paddingHorizontal_20 , styles.paddingVertical_45 , { zIndex:1, position:"absolute"}]}>

                                        <View style={[styles.directionRowSpace ,styles.Width_85]}>
                                            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.transform]}>
                                                <Image source={require('../../assets/images/white_back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                                            </TouchableOpacity>
                                            <View style={[styles.directionRow]}>
                                                <TouchableOpacity onPress = {() => toggleFavorite(1)} style={[styles.touchFav , styles.flexCenter, {margin:0 , backgroundColor: "#bbb"}]}>
                                                    <Icon style={[isFav ? styles.text_red : styles.text_black, styles.textSize_18]} type="AntDesign" name={isFav ? 'heart' : 'hearto'} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={showDatePicker} style={[styles.touchFav , styles.flexCenter, {margin:0 , backgroundColor: "#bbb" , marginHorizontal:5}]}>
                                                    <Image source={require('../../assets/images/calendar.png')} style={[styles.favImage]} resizeMode={'contain'} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => onShare()} style={[styles.touchFav , styles.flexCenter, {margin:0 , backgroundColor: "#bbb"}]}>
                                                    <Image source={require('../../assets/images/share.png')} style={[styles.favImage]} resizeMode={'contain'} />
                                                </TouchableOpacity>
                                                <DateTimePickerModal
                                                    isVisible={isDatePickerVisible}
                                                    mode="date"
                                                    onConfirm={handleConfirm}
                                                    onCancel={hideDatePicker}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.Width_85 , styles.heightFull ,{justifyContent:'space-between'}]}>

                                            <View style={[{flex:1 , justifyContent:'center'}]}>
                                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_32  ,{alignSelf:'flex-start'}]}>
                                                    30%
                                                </Text>
                                                <Text style={[styles.textRegular , styles.text_White ,
                                                    styles.textSize_32 , {alignSelf:'flex-start'} ]}>
                                                    { i18n.t('discount')}
                                                </Text>
                                            </View>

                                            <View>
                                                <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_20 ]}>
                                                        قاعه القصر</Text>
                                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 ]}>
                                                        500 { i18n.t('RS')}</Text>
                                                </View>
                                                <View style={[styles.width_80  , styles.directionRow]}>
                                                    <StarRating
                                                        disabled={true}
                                                        maxStars={5}
                                                        rating={3}
                                                        fullStarColor={COLORS.orange}
                                                        starSize={14}
                                                        starStyle={{marginHorizontal:2}}
                                                    />
                                                    <Text style={[styles.textRegular , styles.text_orange , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                        4.5</Text>
                                                </View>

                                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 ,
                                                    styles.marginVertical_10 , {height:90 , lineHeight:22} ]}>
                                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                                </Text>
                                                <View style={[styles.directionRowSpace , styles.marginTop_20]}>
                                                    <TouchableOpacity onPress={() => navigation.push('moreDetails')} style={[styles.directionRow]}>
                                                        <Text style={[styles.textRegular , styles.text_blue , styles.textSize_20]}>
                                                            { i18n.t('more')}</Text>
                                                        <Image source={require('../../assets/images/tike_not.png')} style={[styles.arrow, styles.marginHorizontal_10 ,styles.transform]} resizeMode={'contain'} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => setIsAutoplay(!isAutoplay)} style={[styles.transform]}>
                                                        <Image source={isAutoplay ? require('../../assets/images/pause.png') : require('../../assets/images/play_vedio.png')} style={[styles.iconBank]} resizeMode={'contain'} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            )
                        })
                    }

                </Swiper>
            {/*</Content>*/}
        </Container>
    );
}

export default Details;


