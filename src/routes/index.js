import React from "react";
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import Home                     from "../components/Home";
import Login                    from "../components/Login";
import Intro 					from "../components/Intro";
import ForgetPass 				from "../components/ForgetPass";
import ResetPass 				from "../components/ResetPass";
import Register 				from "../components/Register";



const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

function AppNavigator() {
	return (
		<NavigationContainer>
			<AppStack.Navigator initialRouteName="intro">
				<AppStack.Screen options={{headerShown:false}} name="intro" component={Intro} />
				<AppStack.Screen options={{headerShown:false}} name="home" component={Home} />
				<AuthStack.Screen options={{headerShown:false}} name="login" component={Login} />
				<AuthStack.Screen options={{headerShown:false}} name="forgetPass" component={ForgetPass} />
				<AuthStack.Screen options={{headerShown:false}} name="resetPass" component={ResetPass} />
				<AuthStack.Screen options={{headerShown:false}} name="register" component={Register} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;