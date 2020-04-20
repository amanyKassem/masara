import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList, ActivityIndicator
} from "react-native";
import {Container, Content, Form, Input, Item,} from 'native-base'
import {useSelector, useDispatch} from 'react-redux';
import {getCategories} from '../actions';
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Services({navigation}) {


    const [search, setSearch] = useState('');
    const lang = useSelector(state => state.lang.lang);
    const services = useSelector(state => state.categories.categories)
    const loader = useSelector(state => state.categories.loader)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(lang , true))
    }, [loader]);

    function renderLoader(){
        if (loader === false){
            return(
                <View style={[styles.loading, styles.flexCenter]}>
                    <ActivityIndicator size="large" color={COLORS.blue} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }

    function Item({ name , image , i }) {

        return (
            <TouchableOpacity key={i} onPress={() => navigation.push('category')} style={[styles.directionColumnCenter
                , styles.marginBottom_20 , styles.marginHorizontal_5]}>
                <Image source={{uri:image}} style={[styles.flatImg]} resizeMode={'cover'} />
                <Text style={[styles.textRegular , styles.text_black, styles.textSize_16 , styles.marginHorizontal_5 ]}>{name}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <Container>
            {renderLoader()}
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.position_R , styles.bgFullWidth,
                    styles.marginVertical_25, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_20]}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.marginBottom_25, styles.transform , styles.alignStart]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5 , styles.alignStart]}>{ i18n.t('services') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.alignStart]}>{ i18n.t('chooseService') }</Text>

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
                                name={item.name}
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


