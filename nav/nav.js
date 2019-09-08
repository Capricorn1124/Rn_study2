/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {Button,Platform,ScrollView,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
// import { DrawerNavigatorItems } from 'react-navigation-drawer';
import FontAwesome from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons';
import Homepage from '../pages/Homepage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Login from '../pages/Login';
import { from } from 'rxjs';


const AuthStack = createStackNavigator({ Login: {
    screen:Login
} });
//抽屉


 
const DrawerNav=createDrawerNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            drawerLabel:"Page1",
            drawerIcon:({tinColor})=>{
                return <Ionicons
                    name={'ios-alarm'}
                    size={24}
                    style={{color:tinColor}}
                />
            }
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            drawerLabel:"Page3",
            drawerIcon:({tinColor})=>{
                return <Ionicons
                    name={'ios-alarm'}
                    size={24}
                    style={{color:tinColor}}
                />
            }
        }
    }
}, {
    initialRouteName:'Page3',
    contentOptions:{
        activeTintColor: '#e91e63'
      },
      contentComponent:(props)=>(<ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          {/* <DrawerNavigatorItems {...props} /> */}
        </SafeAreaView>
      </ScrollView>)
   

    
});
const AppTopNAvigation=createMaterialTopTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:"推荐",
            tabBarIcon:({tinColor,focused})=>(
                <FontAwesome
                    name={'ios-home'}
                    size={26}
                    style={{color:tinColor}}
                />
            )
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:"旅游",
            tabBarIcon:({tinColor,focused})=>(
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color:tinColor}}
                />
            )
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:"朗诵",
            tabBarIcon:({tinColor,focused})=>(
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color:tinColor}}
                />
            )
        }
    }
},{
    tabBarOptions:{
        tabStyle:{
            mindWidth:50
        },
        scrollEnabled:true,//是否支持选项卡滚动，默认false
        style:{
          backgroundColor:'#000'//北京颜色
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#E53D3E',
            width:80,
            marginLeft: 30,
            borderLeftWidth: 2,

        },//标签指示器的颜色
        labelStyle:{
            fontSize:18,
            marginTop: 6,
            marginBottom: 6
        }//文字的样式
    }
});
const AppBottomNavigator=createBottomTabNavigator(
    {
        Page1:{
            screen:Page1,
            navigationOptions:{
                tabBarLabel:"首页",
                tabBarIcon:({tinColor,focused})=>{
                                    <FontAwesome
                                        name={'user'}
                                        size={26}
                                        style={{color:tinColor}}
                                    />
                }
            }
        },
        Page2:{
            screen:Page2,
            navigationOptions:{
                tabBarLabel:"发布"
            }
        },
        Page3:{
            screen:Page3,
            navigationOptions:{
                tabBarLabel:"我的"
            }
        }
    },{
        tabBarOptions:{
            activeTintColor:"#e91e63",
            inactiveTintColor:"#000",
            style:{
                fontSize:32
            },
            showIcon:true
        }
    }
);
const AppStack=createStackNavigator({
    Homepage:{
        screen:Homepage
    },
    Page1:{
        screen:Page1,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名`
        })
    },
    Page2:{
        screen:Page2,
        navigationOptions:({navigation})=>({//静态配置
            title:"this is page2"
        })
    },
    Page3:{
        screen:Page3,
        navigationOptions:(props)=>{//静态配置
            const { navigation } =props;
            const {state,setParams}=navigation;
            const {params}=state;
            return {
                title:params.name ? params.name : "this is page3",
                headerRight:(
                    <Button
                     title={params.mode==='edit' ? '保存': '编辑'}
                     onPress={()=>setParams({mode:params.mode=== 'edit' ? '':'edit'})}
                     ></Button>
                     
                )
            }
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:({navigation})=>({//静态配置
            title:"this is page4"
        })
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:({navigation})=>({//静态配置
            title:"this is 111"
        })
    },
    Top:{
        screen:AppTopNAvigation,
        navigationOptions:({navigation})=>({//静态配置
            title:"Top"
        })
    },
    DrawerNav:{
        screen:DrawerNav,
        navigationOptions:({navigation})=>({//静态配置
            title:"DrawerNav"
        })
    }
})
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
// export default  AppStackNavigator;
export default 
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'Auth',
      }
    );