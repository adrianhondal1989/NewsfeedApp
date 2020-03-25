
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

import News from './news'

const Navigator = createSwitchNavigator({
    "NEWS": News,
  }, {
    initialRouteName: "NEWS",
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