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
  TextInput,
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


export default class Page3 extends Component{
    render(){

        const {navigation} =this.props;
        const {state,setParams}=navigation;
        const {params} =state;
        const showText=params&&params.mode=='edit' ?"正在编辑" : "编辑完成"

        return(
            <View>
                <Text>Welcome to Page3</Text>
                <Text>{showText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>{
                        setParams({
                            name:text
                        })
                    }}
                />
            </View>
        )
    }
}
const styles =StyleSheet.create({
    input:{
        height:50,
            borderWidth:1

    }
})
