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


export default class Page1 extends Component{
    render(){
        const {navigation} =this.props;
        return(
            <View>
                <Text>Welcome to Page1</Text>
                <Button 
                title={"go back"}
                onPress={()=>{
                    navigation.goBack();
                }}/>
                <Button 
                title={"跳转到页面4"}
                onPress={()=>{
                    navigation.navigate("Page4");
                }}/>
            </View>
        )
    }
}
