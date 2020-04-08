import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList, ScrollView
} from "react-native";
import {Container, Content, Item, Icon, Body, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

function Favourite({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [search, setSearch] = useState('');
    const [isFav , setFav ] = useState(false);

    function toggleFavorite (id){
        setFav(!isFav)
    }
    useEffect(() => {

    }, [])

    const [category, setCategory] = useState([
        {id: 0, title: 'قاعة القصر', image: require('../../assets/images/women_pic.png'),discount:'50%', price:'200'},
        {id: 1, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'20%', price:'200'},
        {id: 2, title: 'قاعة القصر', image: require('../../assets/images/pic_hall.png'),discount:'50%', price:'200'},
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
            {/*<Content contentContainerStyle={[styles.bgFullWidth]}>*/}
                <View style={[styles.position_R , styles.bgFullWidth, styles.Width_100]}>
                    <View style={[styles.Width_100 , styles.topNav , {borderBottomWidth:2 , borderLeftWidth:2 , borderColor:'#f0f0f0'}]}>
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
                            <TouchableOpacity onPress={() => navigation.navigate('profile')} style={[styles.iconImg , {borderRadius:50 , overflow:'hidden', borderColor:COLORS.gray, borderWidth:2}]}>
                                <Image source={require('../../assets/images/pic_profile.png')} style={[styles.Width_100 , styles.heightFull]} resizeMode={'cover'} />
                            </TouchableOpacity>
                            <View>
                                <Image source={require('../../assets/images/menu_like_blue.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            </View>
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
                    <View style={[styles.Width_100 , styles.paddingHorizontal_20 , styles.marginTop_25]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('favourite')}</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.marginBottom_20]}>{ i18n.t('favouriteText')}</Text>

                        <SafeAreaView>
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
                                extraData={isFav}
                            />
                        </SafeAreaView>

                    </View>

                </View>
            {/*</Content>*/}
        </Container>
    );
}

export default Favourite;
