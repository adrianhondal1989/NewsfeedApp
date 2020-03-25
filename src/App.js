
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Home from './home'
import News from './news'
import Details from './details'

const Navigator = createSwitchNavigator({
    "HOME": Home,
    "NEWS": News,
    "DETAILS": Details,
  }, {
    initialRouteName: "HOME",
  })

const MainNavigator = createAppContainer(Navigator);

export default class App extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <MainNavigator />
        )
    }

};