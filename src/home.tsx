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

import i18n from './i18n'

interface Props {
    navigation: any
}

interface State {
    i18n: any
}

export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state={
            i18n: i18n
        }
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
                    ><Text style={{fontWeight: 'bold'}}>{this.state.i18n.t('tabNavigation.news')}</Text></TabHeading>}>
                        <News
                            navigation={this.props.navigation}
                            i18n={i18n}
                        >

                        </News>
                    </Tab>
                    <Tab heading={<TabHeading
                        style={{ height: '100%', backgroundColor: 'white'  }}
                    ><Text style={{fontWeight: 'bold'}}>{this.state.i18n.t('tabNavigation.settings')}</Text></TabHeading>}>
                        <Settings
                            navigation={this.props.navigation}
                            i18n={i18n}
                            setLocale={(lang) => {
                                i18n.locale = lang,
                                this.setState({
                                    i18n: i18n
                                })
                            }}
                        >

                        </Settings>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}