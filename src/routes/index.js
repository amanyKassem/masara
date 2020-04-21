import React , {useState} from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import COLORS from "../consts/colors";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../assets/styles'


import Home                     from "../components/Home";
import Login                    from "../components/Login";
import Intro 					from "../components/Intro";
import ForgetPass 				from "../components/ForgetPass";
import ResetPass 				from "../components/ResetPass";
import Register 				from "../components/Register";
import ActivationCode 			from "../components/ActivationCode";
import Language 				from "../components/Language";
import InitScreen 				from "../components/InitScreen";
import Profile 					from "../components/Profile";
import Notifications 			from "../components/Notifications";
import Orders 					from "../components/Orders";
import NotificationsItems 		from "../components/NotificationsItems";
import Rate 					from "../components/Rate";
import ConfirmEvaluation 		from "../components/ConfirmEvaluation";
import Details 					from "../components/Details";
import MoreDetails 				from "../components/MoreDetails";
import HallLocation 			from "../components/HallLocation";
import Reservation 				from "../components/Reservation";
import Services 				from "../components/Services";
import Category 				from "../components/Category";
import Payment 					from "../components/Payment";
import Offers 					from "../components/Offers";
import TopRated 				from "../components/TopRated";
import Search 					from "../components/Search";
import Favourite 				from "../components/Favourite";
import About 					from "../components/About";
import Settings 				from "../components/Settings";
import ChangePass 				from "../components/ChangePass";
import ChangeLang 				from "../components/ChangeLang";
import ContactUs 				from "../components/ContactUs";
import EditProfile 				from "../components/EditProfile";
import OrderDetails 			from "../components/OrderDetails";
import ConfirmCancellation 		from "../components/ConfirmCancellation";
import Filter 					from "../components/Filter";


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Tabs = createBottomTabNavigator();


const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen options={{headerShown:false}} name="home" component={Home} />
	</HomeStack.Navigator>
);

const AuthStackScreen = () => (
	<AuthStack.Navigator initialRouteName="initScreen">
		<AuthStack.Screen options={{headerShown:false}} name="initScreen" component={InitScreen} />
		<AuthStack.Screen options={{headerShown:false}} name="language" component={Language} />
		<AuthStack.Screen options={{headerShown:false}} name="intro" component={Intro} />
		<AuthStack.Screen options={{headerShown:false}} name="login" component={Login} />
		<AuthStack.Screen options={{headerShown:false}} name="forgetPass" component={ForgetPass} />
		<AuthStack.Screen options={{headerShown:false}} name="resetPass" component={ResetPass} />
		<AuthStack.Screen options={{headerShown:false}} name="register" component={Register} />
		<AuthStack.Screen options={{headerShown:false}} name="activationCode" component={ActivationCode} />
		<HomeStack.Screen options={{headerShown:false}} name="home" component={Home} />
	</AuthStack.Navigator>
);


function MyTabs() {
	return (
		<Tabs.Navigator
			initialRouteName="home"
			tabBarOptions={{
				activeTintColor: COLORS.blue,
				showLabel:false,
				style: styles.footerStyle
			}}
		>
			<Tabs.Screen
				name="home"
				component={HomeStackScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Image source={color === COLORS.blue ? require('../../assets/images/home_icon.png') : require('../../assets/images/home_gray-1.png')} style={[styles.footerIcon]} resizeMode={'contain'} />
					),
				}}
			/>
			<Tabs.Screen
				name="orders"
				component={Orders}
				options={{
					tabBarLabel: 'Orders',
					tabBarIcon: ({ color, size }) => (
						<Image source={color === COLORS.blue ? require('../../assets/images/calender_blue.png') : require('../../assets/images/calender_gray.png')} style={[styles.footerIcon]} resizeMode={'contain'} />
					),
				}}
			/>
			<Tabs.Screen
				name="notifications"
				component={Notifications}
				options={{
					tabBarLabel: 'Notifications',
					tabBarVisible: false,
					tabBarIcon: ({ color, size }) => (
						<Image source={color === COLORS.blue ? require('../../assets/images/bell_blue.png') : require('../../assets/images/bell_icon.png')} style={[styles.footerIcon]} resizeMode={'contain'} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarVisible: false,
					tabBarIcon: ({ color, size }) => (
						<View  style={[styles.footerIconProfile , {borderRadius:50 , overflow:'hidden', borderColor:COLORS.blue, borderWidth:2}]}>
							<Image source={require('../../assets/images/pic_profile.png')} style={[styles.Width_100 , styles.heightFull]} resizeMode={'cover'} />
						</View>					),
				}}
			/>
		</Tabs.Navigator>
	);
}

const TabsScreen = () => (
	<MyTabs />
);

function AppNavigator() {


	const [isAuth, setAuth] = useState(true);

	return (
		<NavigationContainer>
			{
				isAuth ?
					<AppStack.Navigator>
						<AppStack.Screen name='home' options={{headerShown:false}} component={TabsScreen}/>
						<AppStack.Screen options={{headerShown:false}} name="notificationsItems" component={NotificationsItems} />
						<AppStack.Screen options={{headerShown:false}} name="rate" component={Rate} />
						<AppStack.Screen options={{headerShown:false}} name="confirmEvaluation" component={ConfirmEvaluation} />
						<AppStack.Screen options={{headerShown:false}} name="details" component={Details} />
						<AppStack.Screen options={{headerShown:false}} name="moreDetails" component={MoreDetails} />
						<AppStack.Screen options={{headerShown:false}} name="hallLocation" component={HallLocation} />
						<AppStack.Screen options={{headerShown:false}} name="reservation" component={Reservation} />
						<AppStack.Screen options={{headerShown:false}} name="services" component={Services} />
						<AppStack.Screen options={{headerShown:false}} name="category" component={Category} />
						<AppStack.Screen options={{headerShown:false}} name="payment" component={Payment} />
						<AppStack.Screen options={{headerShown:false}} name="offers" component={Offers} />
						<AppStack.Screen options={{headerShown:false}} name="topRated" component={TopRated} />
						<AppStack.Screen options={{headerShown:false}} name="search" component={Search} />
						<AppStack.Screen options={{headerShown:false}} name="favourite" component={Favourite} />
						<AppStack.Screen options={{headerShown:false}} name="about" component={About} />
						<AppStack.Screen options={{headerShown:false}} name="settings" component={Settings} />
						<AppStack.Screen options={{headerShown:false}} name="changePass" component={ChangePass} />
						<AppStack.Screen options={{headerShown:false}} name="changeLang" component={ChangeLang} />
						<AppStack.Screen options={{headerShown:false}} name="contactUs" component={ContactUs} />
						<AppStack.Screen options={{headerShown:false}} name="editProfile" component={EditProfile} />
						<AppStack.Screen options={{headerShown:false}} name="orderDetails" component={OrderDetails} />
						<AppStack.Screen options={{headerShown:false}} name="confirmCancellation" component={ConfirmCancellation} />
						<AppStack.Screen options={{headerShown:false}} name="filter" component={Filter} />
					</AppStack.Navigator>
					:
					AuthStackScreen()
			}
		</NavigationContainer>
	);
}

export default AppNavigator;
