/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Login extends Component{
    render(){
        const {navigation} =this.props;
        return(
            <View>
                <Text>登陆页面</Text>
                <Button 
                title={"Login"}
                onPress={()=>{
                    navigation.navigate('App');
                }}/>
               
            </View>
        )
    }
}
