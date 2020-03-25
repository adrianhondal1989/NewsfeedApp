import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text,
    FlatList,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';

import { Container, Content, Header, Left, Icon, Right, Body, Item, Card, Tabs, Tab, TabHeading } from 'native-base'

import News from './news'
import Settings from './settings'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Tabs
                    tabBarPosition='bottom'
                    tabBarUnderlineStyle={{ backgroundColor: 'black' }}
                    tabContainerStyle={{
                        backgroundColor: 'transparent',
                        elevation: 0.1
                    }}
                >
                    <Tab heading={<TabHeading
                        style={{ height: '100%', backgroundColor: 'white' }}
                    ><Text style={{fontWeight: 'bold'}}>News</Text></TabHeading>}>
                        <News
                            navigation={this.props.navigation}
                        >

                        </News>
                    </Tab>
                    <Tab heading={<TabHeading
                        style={{ height: '100%', backgroundColor: 'white'  }}
                    ><Text style={{fontWeight: 'bold'}}>Settings</Text></TabHeading>}>
                        <Settings
                            navigation={this.props.navigation}
                        >

                        </Settings>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}