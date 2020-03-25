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

import { Container, Content, Switch, Header, Left, Icon, Right, Body, Item, Card, ListItem, Radio } from 'native-base'

interface Props {
    navigation: any,
    i18n: any,
    setLocale: (lang: string) => void
}

interface State {
    english: boolean,
    spanish: boolean
}

export default class Settings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            english: props.i18n.locale === 'en' ? true : false,
            spanish: props.i18n.locale === 'es' ? true : false
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Text></Text>
                </Header>
                <Content style={{ flex: 1 }}>
                    <ListItem onPress={() => {
                        this.setState({
                            english: true,
                            spanish: false
                        })
                        this.props.setLocale('en')
                    }}>
                        <Left>
                            <Text>{this.props.i18n.t('settings.english')}</Text>
                        </Left>
                        <Right>
                            <Radio selected={this.state.english} />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => {
                        this.setState({
                            english: false,
                            spanish: true
                        })
                        this.props.setLocale('es')
                    }}>
                        <Left>
                            <Text>{this.props.i18n.t('settings.spanish')}</Text>
                        </Left>
                        <Right>
                            <Radio selected={this.state.spanish} />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '4%'
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
})