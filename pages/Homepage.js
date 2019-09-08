
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


export default class Homepage extends Component{
    static navigationOptions={
        title:"head",
        headerBackTitle:'返回哈哈'//都设置返回此页面的返回按钮文案
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Welcome to homepage</Text>
                <Button     
                title={"go to page1"}
                onPress={()=>{
                    navigate('Page1',{name:'动态的'});
                }}/>
                  <Button 
                title={"go to pag2"}
                onPress={()=>{
                  navigate('Page2');
                }}/>
                  <Button 
                title={"go to page3"}
                onPress={()=>{
                    navigate('Page3',{name:'devi'});
                }}/>
                   <Button 
                title={"go to bottom "}
                onPress={()=>{
                    navigate('Bottom');
                }}/>
                   <Button 
                title={"go to Top"}
                onPress={()=>{
                    navigate('Top');
                }}/>
                     <Button 
                title={"go to drawer"}
                onPress={()=>{
                    navigate('DrawerNav');
                }}/>
            
            </View>
        )
    }
}
