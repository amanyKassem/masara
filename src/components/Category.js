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
    FlatList, ActivityIndicator
} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../actions";
import Product from './Product';

function Category({navigation , route}) {


    const catId = route.params.category_id;
    const [search, setSearch] = useState('');
    const lang = useSelector(state => state.lang.lang);
    const token = useSelector(state => state.profile.user.token);

    const services = useSelector(state => state.services.services);
    const servicesLoader = useSelector(state => state.services.loader);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServices(lang , catId , token))
    }, [servicesLoader]);

    function renderLoader(){
        if (servicesLoader === false){
            return(
                <View style={[styles.loading, styles.flexCenter]}>
                    <ActivityIndicator size="large" color={COLORS.blue} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }


    function Item({ name , image , discount , rate , price , id , isLiked }) {

        return (
            <Product key={id} data={{name , image , discount , rate , price , id , isLiked}} navigation={navigation}/>
        );
    }

    return (
        <Container>
            {renderLoader()}
            <Content contentContainerStyle={[styles.bgFullWidth ]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25 , styles.marginTop_55, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_20]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25, styles.transform , styles.alignStart]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5, styles.alignStart]}>القاعات</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13, styles.alignStart]}>اختر قاعتك المفضلة</Text>

                        <View style={[styles.position_R, styles.height_90, styles.flexCenter , styles.directionRowSpace, styles.marginBottom_5 , styles.Width_100]}>
                            <TouchableOpacity style={[styles.searchIcon , styles.directionRow]}>
                                <Image source={require('../../assets/images/ico.png')} style={[styles.smImage]} resizeMode={'contain'} />
                                <Text style={[styles.textBold , styles.text_gray , styles.textSize_18 , styles.marginHorizontal_5 ]}>|</Text>
                            </TouchableOpacity>
                            <Input style={[styles.searchInput , styles.alignStart , styles.Width_80 , styles.bg_light_gray , styles.marginVertical_20]}
                                   placeholder={i18n.translate('search')}
                                   placeholderTextColor={COLORS.gray}
                                   onChange={(e) => setSearch(e.target.value)}
                                   value={search}
                            />
                            <TouchableOpacity onPress={() => navigation.push('filter')} style={[styles.filter]}>
                                <Image source={require('../../assets/images/controls.png')} style={[styles.smImage]} resizeMode={'contain'} />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={services}
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

                    </View>

                </View>
            </Content>
        </Container>
    );
}

export default Category;


