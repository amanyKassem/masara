import React, { useState , useEffect , useRef} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Content,} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from "axios";
import MapView from 'react-native-maps';

function HallLocation({navigation}) {
    let mapRef = useRef(null);

    const [city, setCity] = useState('');
    const [mapRegion, setMapRegion] = useState({
        latitude: -33.4727879,
        longitude: -70.6298313
    });
    const [initMap, setInitMap] = useState(true);
    const [spinner, setSpinner] = useState(false);

    const fetchData = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('صلاحيات تحديد موقعك الحالي ملغاه');
        }else {
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
            const userLocation = { latitude, longitude };
            setInitMap(false)
            setMapRegion(userLocation)
            console.log("mapRegion" ,mapRegion)
            console.log("userLocation" ,userLocation)
        }

        let getCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        getCity    += mapRegion.latitude + ',' + mapRegion.longitude;
        getCity    += '&key=AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ&language=ar&sensor=true';
        console.log("getCity  " , getCity)

        // ReactotronConfig.log(getCity);

        try {
            const { data } = await axios.get(getCity);
            setCity(data.results[0].formatted_address)
            console.log("city  " , data.results[0].formatted_address)
            console.log("city  " , city)

        } catch (e) {
            console.log(e);
        }
    };


    useEffect(  () => {
        fetchData();
    }, [])


    const _handleMapRegionChange  = async (mapRegion) =>  {
        setMapRegion(mapRegion)

        let getCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        getCity += mapRegion.latitude + ',' + mapRegion.longitude;
        getCity += '&key=AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ&language=ar&sensor=true';

        console.log('locations data', getCity);

        try {
            const { data } = await axios.get(getCity);
            setCity(data.results[0].formatted_address)
            console.log("city2  " , data.results[0].formatted_address)
            console.log("city2 " , city)

        } catch (e) {
            console.log(e);
        }
    };
    function getLoc(){
        console.log("mapRegion button" ,mapRegion)
        console.log("city3 " , city)
    }
    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>

                <View style={[styles.position_R ,
                    styles.marginTop_55, styles.Width_100]}>

                    <View style={[styles.Width_100 , styles.paddingHorizontal_30 , styles.marginBottom_50]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.marginBottom_25]}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.smImage]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('hallLocation') }</Text>
                    </View>
                    {/*<TouchableOpacity onPress={() => getLoc()} style={[styles.blueBtn , styles.Width_100]}>*/}
                        {/*<Text style={[styles.textRegular , styles.text_White , styles.textSize_16 ]}>*/}
                            {/*{ i18n.t('hallLocation')}*/}
                        {/*</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                {
                    !initMap ? (
                        <MapView
                            ref={mapRef}
                            style={{ width: '100%', height: '100%' , position:'absolute' , top:0, zIndex:-1 }}
                            initialRegion={{
                                latitude        : mapRegion.latitude,
                                longitude       : mapRegion.longitude,
                                latitudeDelta   : 0.0922,
                                longitudeDelta  : 0.0421,
                            }}>
                            <MapView.Marker
                                            // draggable
                                            coordinate={mapRegion}
                                            // onDragEnd={(e) => _handleMapRegionChange(e.nativeEvent.coordinate)}
                                >
                                <Image source={require('../../assets/images/num.png')} resizeMode={'contain'} style={{ width: 35, height: 35 }}/>
                            </MapView.Marker>
                        </MapView>
                    ) : (<View />)
                }
            </Content>
        </Container>
    );
}

export default HallLocation;


