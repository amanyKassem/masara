import React , {useState} from "react";
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
import Notifications 					from "../components/Notifications";


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


const TabsScreen = () => (
	<Tabs.Navigator>
		<Tabs.Screen name='home'  options={{title:'Home'}} component={HomeStackScreen}/>
		<Tabs.Screen name='profile'  options={{title:'profile'}} component={Profile}/>
	</Tabs.Navigator>
);

function AppNavigator() {


	const [isAuth, setAuth] = useState(true);

	return (
		<NavigationContainer>
			{
				isAuth ?
					<AppStack.Navigator>
						<AppStack.Screen name='home' options={{headerShown:false}} component={TabsScreen}/>
						<AppStack.Screen options={{headerShown:false}} name="notifications" component={Notifications} />
					</AppStack.Navigator>
					:
					AuthStackScreen()
			}
		</NavigationContainer>
	);
}

export default AppNavigator;