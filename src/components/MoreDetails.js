import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, I18nManager, Share, ImageBackground} from "react-native";
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

function MoreDetails({navigation}) {

    const [isFav , setFav ] = useState(false);
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
            <ImageBackground source={require('../../assets/images/bg_one.png')} style={[styles.bgFullWidth , styles.transform]}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.swiperOverlay , styles.bgFullWidth , {backgroundColor: "rgba(0, 0, 0, 0.8)" , zIndex:-1}]}/>
                    <View style={[ styles.heightFull , styles.paddingHorizontal_20 , styles.paddingVertical_45 ]}>
                        <View style={[styles.directionRowSpace ,styles.Width_100]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/images/white_back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            <View style={[styles.directionRow ]}>
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
                        <View style={[styles.Width_100 , styles.marginTop_35 , {justifyContent:'space-between' , flex:1}]}>
                            <View>
                                <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_20 ]}>
                                        قاعه القصر</Text>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 ]}>
                                        500 { i18n.t('RS')}</Text>
                                </View>
                                <View style={[styles.directionRowSpace , styles.marginBottom_5 ,styles.Width_100 ]}>
                                    <View style={[ styles.directionRow]}>
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
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.linethrough ]}>
                                        500 { i18n.t('RS')}</Text>
                                </View>


                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_14 ,
                                    styles.marginVertical_10 , {lineHeight:22} ]}>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
                                </Text>

                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 , styles.marginTop_15 ,
                                    styles.marginBottom_5 ,styles.alignStart]}>
                                    { i18n.t('space')}</Text>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.marginBottom_15 , styles.alignStart ]}>
                                    500 { i18n.t('person')}</Text>

                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_18 ,styles.marginBottom_5  , styles.alignStart ]}>
                                    { i18n.t('socialMedia')}</Text>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.alignStart ]}>
                                    500125215
                                </Text>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.alignStart ]}>
                                    500125215
                                </Text>
                                <Text style={[styles.textRegular , styles.text_blue , styles.textSize_16 , styles.alignStart ]}>
                                    amany@gmail.com
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.push("hallLocation")} style={[styles.flexCenter , styles.directionRow]}>
                                    <Image source={require('../../assets/images/location_hall.png')} style={[styles.favImage, styles.marginHorizontal_10]} resizeMode={'contain'} />
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16 , styles.alignStart ]}>
                                        { i18n.t('hallLocation')}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("reservation")} style={[styles.blueBtn , styles.Width_100]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('reservation') }</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default MoreDetails;


