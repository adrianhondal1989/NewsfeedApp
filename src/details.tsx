import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Container, Content, Header, Left, Icon, Right } from 'native-base'

import {NewsData} from './news'

interface Props {
    navigation: any
}

interface State {
    news: NewsData
}

export default class Details extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            news: props.navigation.state.params.news
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back'
                            onPress={() => {
                                this.props.navigation.navigate("HOME")
                            }} />
                    </Left>
                    <Right></Right>

                </Header>
                <Content>
                    <View style={styles.imageView}>
                        <Image source={{uri: this.state.news.urlToImage != null ? this.state.news.urlToImage : undefined}} style={{ height: 300, width: '100%' }}>

                        </Image>
                    </View>
                    <View style={styles.contentView}>

                        <Text style={styles.title}>
                            {this.state.news.title}
                        </Text>
                        <Text style={styles.text}>
                            {this.state.news.author}
                        </Text>
                        <Text style={styles.text}>
                            {new Date(this.state.news.publishedAt).toLocaleString()}
                        </Text>

                        <Text style={styles.text}>
                            {this.state.news.content}
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    imageView: {
        height: 300,
        width: '100%',
        // backgroundColor: 'blue',
        marginBottom: '5%'
    },
    contentView: {
        paddingHorizontal: '5%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: '2%'
    },
    text: {
        fontSize: 12,
        marginVertical: '2%'
    }
})