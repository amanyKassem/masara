import React from "react";import { createStackNavigator } from '@react-navigation/stack';import Login                    from "../components/Login";import Intro 					from "../components/Intro";import ForgetPass 				from "../components/ForgetPass";import ResetPass 				from "../components/ResetPass";import Register 				from "../components/Register";import ActivationCode 			from "../components/ActivationCode";import Language 				from "../components/Language";import InitScreen 				from "../components/InitScreen";import {useSelector} from "react-redux";const AuthStack = createStackNavigator();export function AuthStackNavigator()  {	return(		<AuthStack.Navigator mode={'modal'} screenOptions={{headerShown: false}} initialRouteName="initScreen">			<AuthStack.Screen name="initScreen" component={InitScreen} />			<AuthStack.Screen name="language" component={Language} />			<AuthStack.Screen name="intro" component={Intro} />			<AuthStack.Screen name="login" component={Login} />			<AuthStack.Screen name="forgetPass" component={ForgetPass} />			<AuthStack.Screen name="resetPass" component={ResetPass} />			<AuthStack.Screen name="register" component={Register} />			<AuthStack.Screen name="activationCode" component={ActivationCode} />		</AuthStack.Navigator>	);}