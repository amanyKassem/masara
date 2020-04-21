import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, I18nManager, Linking} from "react-native";
import {Container, Content, Icon, Body} from 'native-base'
import StarRating from "react-native-star-rating";
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Rate({navigation}) {


    const [starCount, setStarCount] = useState(3);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

    }, []);


    function onStarRatingPress(rating) {
        setStarCount(rating)
    }


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth ]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25 , styles.marginTop_55, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_50]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25, styles.transform , styles.alignStart]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5, styles.alignStart]}>{ i18n.t('rate') }</Text>
                    </View>

                    <View style={[styles.flexCenter , styles.Width_100]}>
                        <Image source={require('../../assets/images/stars.png')} style={[styles.upImage]} resizeMode={'contain'} />
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 , styles.Width_70
                            , styles.marginBottom_5 , styles.textCenter , styles.marginVertical_25]}>
                            { i18n.t('rateText') }
                        </Text>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={starCount}
                            selectedStar={(rating) => onStarRatingPress(rating)}
                            fullStarColor={COLORS.orange}
                            starSize={20}
                            starStyle={{marginHorizontal:3 , marginBottom:20}}
                        />
                        <TouchableOpacity onPress={() => navigation.push('confirmEvaluation')} style={[styles.blueBtn , styles.Width_80]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Content>
        </Container>
    );
}

export default Rate;


