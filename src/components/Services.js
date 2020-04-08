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
    FlatList
} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast, Header, Button, Icon, Body, Card} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Services({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {

    }, [])

    const [services, setServices] = useState([
        {id: 0, title: 'قاعات', image: require('../../assets/images/bg_order.png')},
        {id: 1, title: 'حفلات', image: require('../../assets/images/pic_hall.png')},
        {id: 2, title: 'قاعات', image: require('../../assets/images/bg_order.png')},
        {id: 3, title: 'فساتين', image: require('../../assets/images/pic_hall.png')},
        {id: 4, title: 'قاعات', image: require('../../assets/images/bg_order.png')},
        {id: 5, title: 'حفلات', image: require('../../assets/images/pic_hall.png')},
        {id: 6, title: 'قاعات', image: require('../../assets/images/bg_order.png')},
        {id: 7, title: 'فساتين', image: require('../../assets/images/pic_hall.png')},
        {id: 8, title: 'فساتين', image: require('../../assets/images/bg_order.png')},
    ]);
    function Item({ title , image , i }) {

        return (
            <TouchableOpacity key={i} onPress={() => navigation.push('category')} style={[styles.directionColumnCenter
                , styles.marginBottom_20 , styles.marginHorizontal_5]}>
                <Image source={image} style={[styles.flatImg]} resizeMode={'cover'} />
                <Text style={[styles.textRegular , styles.text_black, styles.textSize_16 , styles.marginHorizontal_5 ]}>{title}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_20]}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.marginBottom_25]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('services') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13]}>{ i18n.t('chooseService') }</Text>

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

                        <FlatList
                            data={services}
                            renderItem={({ item , index}) => <Item
                                title={item.title}
                                image={item.image}
                                i={index}
                            />}
                            keyExtractor={item => item.id}
                            numColumns={3}
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

export default Services;


