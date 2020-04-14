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
    FlatList, ScrollView
} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body, Card} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

function Search({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [isHide, setIsHide] = useState(false);
    const [search, setSearch] = useState('اي كلام');
    const [isFav , setFav ] = useState(false);

    function toggleFavorite (id){
        setFav(!isFav)
    }
    function resetSearch (){
        setSearch('')
    }
    function hideSuggetions (){
        setIsHide(true)
    }
    useEffect(() => {

    }, [])

    const [category, setCategory] = useState([
        {id: 0, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
        {id: 1, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'20%', price:'200'},
        {id: 2, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
        {id: 3, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'50%', price:'200'},
        {id: 4, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
        {id: 5, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'50%', price:'200'},
        {id: 6, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
        {id: 7, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'50%', price:'200'},
        {id: 8, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
    ]);
    function Item({ title , image , discount , price , i }) {

        return (
            <TouchableOpacity onPress={() => navigation.push('details')} key={i} style={[styles.directionColumnCenter , styles.marginHorizontal_10 , styles.marginBottom_20]}>
                <Image source={image} style={[styles.scrollRatedImg]} resizeMode={'cover'} />
                <View style={[ styles.Width_100,styles.scrollContent]}>
                    <TouchableOpacity onPress = {() => toggleFavorite(1)} style={[styles.touchFav , styles.directionRowCenter]}>
                        <Icon style={[isFav ? styles.text_red : styles.text_gray, styles.textSize_18]} type="AntDesign" name={ 'heart' } />
                    </TouchableOpacity>
                    <View style={[styles.overlay_white , styles.carousalRatedText]}>
                        <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                {title}</Text>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                {price} { i18n.t('RS')}</Text>
                        </View>
                        <View style={[styles.width_80 , styles.paddingHorizontal_5]}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={3}
                                fullStarColor={COLORS.blue}
                                starSize={14}
                                starStyle={styles.starStyle}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_20]}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.marginBottom_25, styles.transform , styles.alignStart]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>


                        <View style={[styles.position_R, styles.height_90, styles.flexCenter , styles.directionRowSpace, styles.marginBottom_5 , styles.Width_100]}>
                            <TouchableOpacity onPress={() => resetSearch()} style={[styles.closeIcon]}>
                                <Image source={require('../../assets/images/cancel_black.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            <Input style={[styles.searchInput , styles.alignStart , styles.bg_light_gray , styles.marginVertical_20 , {paddingLeft:20}]}
                                   placeholder={i18n.translate('search')}
                                   placeholderTextColor={COLORS.gray}
                                   onChange={(e) => setSearch(e.target.value)}
                                   value={search}
                            />
                        </View>

                        {
                            !isHide ?
                                <View style={[styles.marginBottom_50 , styles.Width_100]}>
                                    <View style={[styles.directionRowSpace , styles.Width_100 , styles.marginBottom_10]}>
                                        <Text style={[styles.textRegular , styles.text_gray,  styles.textSize_14]}>{ i18n.t('suggestions')}</Text>
                                        <TouchableOpacity onPress={() => hideSuggetions()} style={{}}>
                                            <Image source={require('../../assets/images/cancle_gray.png')} style={[styles.smImage]} resizeMode={'contain'} />
                                        </TouchableOpacity>
                                    </View>
                                    <ScrollView style={[styles.scrollView ]} horizontal={true} showsHorizontalScrollIndicator={false}>

                                        <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                            <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollRatedImg]} resizeMode={'cover'} />
                                            <View style={[ styles.Width_100,styles.scrollContent]}>
                                                <TouchableOpacity onPress = {() => toggleFavorite(1)} style={[styles.touchFav , styles.directionRowCenter]}>
                                                    <Icon style={[isFav ? styles.text_red : styles.text_gray, styles.textSize_18]} type="AntDesign" name={ 'heart' } />
                                                </TouchableOpacity>
                                                <View style={[styles.overlay_white , styles.carousalRatedText]}>
                                                    <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            قاعه القصر</Text>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            500 { i18n.t('RS')}</Text>
                                                    </View>
                                                    <View style={[styles.width_80 , styles.paddingHorizontal_5]}>
                                                        <StarRating
                                                            disabled={true}
                                                            maxStars={5}
                                                            rating={3}
                                                            fullStarColor={COLORS.blue}
                                                            starSize={14}
                                                            starStyle={styles.starStyle}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                            <Image source={require('../../assets/images/women_pic.png')} style={[styles.scrollRatedImg]} resizeMode={'cover'} />
                                            <View style={[ styles.Width_100,styles.scrollContent]}>
                                                <TouchableOpacity onPress = {() => toggleFavorite(2)} style={[styles.touchFav , styles.directionRowCenter]}>
                                                    <Icon style={[isFav ? styles.text_red : styles.text_gray, styles.textSize_18]} type="AntDesign" name={ 'heart' } />
                                                </TouchableOpacity>
                                                <View style={[styles.overlay_white , styles.carousalRatedText]}>
                                                    <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            قاعه القصر</Text>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            500 { i18n.t('RS')}</Text>
                                                    </View>
                                                    <View style={[styles.width_80]}>
                                                        <StarRating
                                                            disabled={true}
                                                            maxStars={5}
                                                            rating={3}
                                                            fullStarColor={COLORS.blue}
                                                            starSize={14}
                                                            starStyle={styles.starStyle}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={[styles.directionColumnCenter , styles.marginHorizontal_10]}>
                                            <Image source={require('../../assets/images/pic_hall.png')} style={[styles.scrollRatedImg]} resizeMode={'cover'} />
                                            <View style={[ styles.Width_100,styles.scrollContent]}>
                                                <TouchableOpacity onPress = {() => toggleFavorite(3)} style={[styles.touchFav , styles.directionRowCenter]}>
                                                    <Icon style={[isFav ? styles.text_red : styles.text_gray, styles.textSize_18]} type="AntDesign" name={ 'heart' } />
                                                </TouchableOpacity>
                                                <View style={[styles.overlay_white , styles.carousalRatedText]}>
                                                    <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            قاعه القصر</Text>
                                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14 , styles.marginHorizontal_5 ]}>
                                                            500 { i18n.t('RS')}</Text>
                                                    </View>
                                                    <View style={[styles.width_80]}>
                                                        <StarRating
                                                            disabled={true}
                                                            maxStars={5}
                                                            rating={3}
                                                            fullStarColor={COLORS.blue}
                                                            starSize={14}
                                                            starStyle={styles.starStyle}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </ScrollView>
                                </View>:
                                null
                        }

                        <FlatList
                            data={category}
                            renderItem={({ item , index}) => <Item
                                title={item.title}
                                image={item.image}
                                discount={item.discount}
                                price={item.price}
                                i={index}
                            />}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            horizontal={false}
                            columnWrapperStyle={[styles.directionRowCenter]}
                            // extraData={isFav}
                        />

                    </View>

                </View>
            </Content>
        </Container>
    );
}

export default Search;


