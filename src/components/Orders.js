import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, I18nManager, ScrollView} from "react-native";
import {Container, Content,Item, Card, Icon, } from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

function Orders({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [orderType, setOrderType] = useState('0');

    const [notifications, setNotifications] = useState([
        {id: 0, title: 'اسم الخدمة', price:'500', date: '4/5' , year:'2020', pay:'وسيلة الدفع'},
        {id: 1, title: 'اسم الخدمة', price:'500', date: '4/5' , year:'2020', pay:'وسيلة الدفع'},
        {id: 2, title: 'اسم الخدمة', price:'500', date: '4/5' , year:'2020', pay:'وسيلة الدفع'},
        {id: 3, title: 'اسم الخدمة', price:'500', date: '4/5' , year:'2020', pay:'وسيلة الدفع'},
    ]);

    function changeOrder(type){
        setOrderType(type)
    }

    useEffect(() => {

    }, []);

    function Item({ title , date , pay , year , price  , i }) {

        return (
            <Card style={[styles.notiCard]} key={i}>
                <TouchableOpacity onPress={() => navigation.push('orderDetails')} style={[styles.cardView , { borderLeftColor: COLORS.blue,}]}>
                    <View style={[styles.cardDate ,styles.paddingHorizontal_15]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>{ date }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>{ year }</Text>
                    </View>
                    <View style={[styles.paddingHorizontal_15 , styles.directionColumnC , {flex:1} ]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart]}>{title}</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart]}>{pay}</Text>
                        <Text style={[styles.textRegular , styles.text_blue , styles.textSize_14  , styles.alignStart]}>{price} { i18n.t('RS') }</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        );
    }


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <View style={[styles.position_R , styles.bgFullWidth, styles.Width_100]}>
                    <View style={[styles.Width_100 , styles.topNav , {borderBottomWidth:2 , borderLeftWidth:2 , borderColor:'#f0f0f0'}]}>
                        <ScrollView style={{}} contentContainerStyle={[styles.directionRowSpace , styles.Width_100 , styles.paddingHorizontal_15
                            , {paddingTop:15 ,justifyContent:'space-around'}]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity onPress={() => changeOrder('0')}>
                                <Image source={orderType === '0'? require('../../assets/images/order_procc_blue.png') : require('../../assets/images/order_procc_gray.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeOrder('1')} style={[styles.transformReverse]}>
                                <Image source={orderType === '1'? require('../../assets/images/order_blue_end.png'): require('../../assets/images/order_gray_end.png')} style={[styles.iconImg]} resizeMode={'contain'} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_20 , styles.marginTop_25]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{orderType === '0'? i18n.t('newOrders') :  i18n.t('finishedOrders') }</Text>

                        <FlatList
                            data={notifications}
                            renderItem={({ item , index}) => <Item
                                title={item.title}
                                date={item.date}
                                year={item.year}
                                pay={item.pay}
                                price={item.price}
                                i={index}
                                // extraData={showModal}
                            />}
                            keyExtractor={item => item.id}
                        />

                    </View>



                </View>
            </Content>
        </Container>
    );
}
export default Orders;


