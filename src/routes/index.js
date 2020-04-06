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


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Tabs = createBottomTabNavigator();


const HomeStackScreen = () => (
	<HomeStack.Navigator initialRouteName="initScreen">
		<HomeStack.Screen options={{headerShown:false}} name="home" component={Home} />
		<HomeStack.Screen options={{headerShown:false}} name="confirmEvaluation" component={ConfirmEvaluation} />
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
					tabBarIcon: ({ color, size }) => (
						<Image source={require('../../assets/images/avatar.png')} style={[styles.footerIconProfile]} resizeMode={'contain'} />
					),
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
						<AppStack.Screen options={{headerShown:false}} name="details" component={Details} />
						<AppStack.Screen options={{headerShown:false}} name="moreDetails" component={MoreDetails} />
					</AppStack.Navigator>
					:
					AuthStackScreen()
			}
		</NavigationContainer>
	);
}

export default AppNavigator;