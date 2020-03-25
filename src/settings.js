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

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            english: true,
            spanish: false
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
                    }}>
                        <Left>
                            <Text>English</Text>
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
                    }}>
                        <Left>
                            <Text>Spanish</Text>
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