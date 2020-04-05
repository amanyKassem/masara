import React, { useState , useEffect } from "react";
import {View, Text, Image, TouchableOpacity, FlatList, I18nManager } from "react-native";
import {Container, Content,Item, Card, Icon, } from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";

function NotificationsItems({navigation}) {


    const [spinner, setSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [notifications, setNotifications] = useState([
        {id: 0, type:'0' , title: 'تقييم', icon: require('../../assets/images/rating_active.png'), date: '4/5' , year:'2020', body:'تقييم الخدمه تقييم الخدمه'},
        {id: 1, type:'1' , title: 'عرض', icon: require('../../assets/images/offer_color.png'), date: '4/5' , year:'2020', body:'عرض الخدمه عرض الخدمه'},
        {id: 2, type:'2' , title: 'رفض', icon: require('../../assets/images/cancel_not.png'), date: '4/5' , year:'2020', body:'موافقة الخدمه موافقة الخدمه رفض الخدمه'},
        {id: 3, type:'3' , title: 'موافقة', icon: require('../../assets/images/tick_not.png'), date: '4/5' , year:'2020', body:'موافقة الخدمه موافقة الخدمه موافقة الخدمه'},
    ]);

    useEffect(() => {

    }, []);

    function toggleModal () {
        setShowModal(!showModal);
    };

    function deleteNoti () {
        setShowModal(!showModal);
    };

    function Item({ title , date , body , year , icon , type , i }) {
        let color = '';
        if(type === '0'){
            color = COLORS.blue
        } else if(type === '1'){
            color = COLORS.orange
        } else if(type === '2'){
            color = '#FF5757'
        } else if(type === '3'){
            color = '#44B28D'
        }

        return (
            <Card style={[styles.notiCard]} key={i}>
                <TouchableOpacity
                    onPress={toggleModal}
                    style           = {[{width:20 , height:20 ,
                        position:'absolute' , right:10 , top:10 , zIndex:1,backgroundColor:color}
                        , styles.flexCenter, styles.Radius_10]}
                >
                    <Icon style     = {[styles.text_White, styles.textSize_12]} type="AntDesign" name='close' />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cardView , { borderLeftColor: color,}]}>
                    <View style={[styles.cardDate ,styles.paddingHorizontal_15]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>{ date }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>{ year }</Text>
                    </View>
                    <View style={[styles.paddingHorizontal_15 , styles.directionColumnC , styles.Width_100 ]}>
                        <View style={[styles.directionRow ,styles.Width_80 , styles.marginBottom_10]}>
                            <Image source={icon} style={[styles.iconBank , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_14]}>{ title }</Text>
                        </View>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.Width_90,
                            {flexWrap:'wrap'}]}>{body}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        );
    }


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.position_R , styles.bgFullWidth, styles.marginVertical_15,
                    styles.marginVertical_25, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_50]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('notifications') }</Text>

                        <FlatList
                            data={notifications}
                            renderItem={({ item , index}) => <Item
                                title={item.title}
                                date={item.date}
                                year={item.year}
                                body={item.body}
                                icon={item.icon}
                                type={item.type}
                                i={index}
                            />}
                            keyExtractor={item => item.id}
                        />

                    </View>

                    <Modal
                        onBackdropPress                 ={toggleModal}
                        onBackButtonPress               = {toggleModal}
                        isVisible                       = {showModal}
                        style                           = {styles.bgModel}
                        avoidKeyboard                    = {true}
                    >

                        <View style={[{borderTopLeftRadius:30,
                            borderTopRightRadius:30},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_10 , styles.paddingHorizontal_10]}>
                            <View style={[styles.overHidden , styles.flexCenter , styles.Width_100]}>

                                <View style={[styles.modalBorder]}/>

                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16
                                    , styles.textCenter , styles.marginBottom_5]}>{ i18n.t('deleteNoti') }</Text>

                                <TouchableOpacity onPress={() => deleteNoti()} style={[styles.blueBtn , styles.Width_80]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() =>  toggleModal()} style={[styles.grayBtn , styles.Width_80 , styles.marginBottom_35]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('cancel') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>


                </View>
            </Content>
        </Container>
    );
}
export default NotificationsItems;


