import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList, ScrollView, ActivityIndicator
} from "react-native";
import {Container, Content, Item, Icon, Body, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import {useDispatch, useSelector} from "react-redux";
import {getFavourite} from "../actions";
import Product from './Product';

function Favourite({navigation}) {


    const lang = useSelector(state => state.lang.lang);
    const token = useSelector(state => state.auth.user.data.token);

    const favourite = useSelector(state => state.favourite.favourite);
    const favouriteLoader = useSelector(state => state.favourite.loader);

    const [search, setSearch] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavourite(lang, token))
    }, [favouriteLoader]);

    function renderLoader(){
        if (favouriteLoader === false){
            return(
                <View style={[styles.loading, styles.flexCenter]}>
                    <ActivityIndicator size="large" color={COLORS.blue} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }
    function Item({ name , image , discount , rate , price , id , isLiked }) {

        return (
            <Product key={id} data={{name , image , discount , rate , price , id , isLiked}} navigation={navigation} fromRoute={'homeTop'}/>
        );
    }
    return (
        <Container>
            {renderLoader()}
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
                                <Image source={require('../../assets/images/setting.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.transformReverse]}>
                                <Image source={require('../../assets/images/menu_logout.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={[styles.Width_100 , styles.paddingHorizontal_20 , styles.marginTop_25]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5,styles.alignStart]}>{ i18n.t('favourite')}</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.marginBottom_20,styles.alignStart]}>{ i18n.t('favouriteText')}</Text>

                        <SafeAreaView>
                            <FlatList
                                data={favourite}
                                renderItem={({ item , index}) => <Item
                                    name={item.name}
                                    image={item.image}
                                    discount={item.discount}
                                    rate={item.rate}
                                    price={item.price}
                                    id={item.id}
                                    isLiked={item.isLiked}
                                />}
                                keyExtractor={item => item.id}
                                numColumns={2}
                                horizontal={false}
                                columnWrapperStyle={[styles.directionRowCenter]}
                                // extraData={isFav}
                            />
                        </SafeAreaView>

                    </View>

                </View>
            {/*</Content>*/}
        </Container>
    );
}

export default Favourite;
