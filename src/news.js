import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    FlatList,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';

import { Container, Header, Body, Item, Card } from 'native-base'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsList: [],
            filteredNews: [],
            searchText: '',
            refreshing: false,
        }
    }

    componentDidMount() {
        this.fetchNews()
    }

    fetchNews() {
        const NEWS_API = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5119c147502f4bcb8565ee685a97b085"
        fetch(NEWS_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            response.json()
                .then((responseJson) => {
                    const articles = responseJson.articles
                    this.setState({
                        newsList: articles,
                        filteredNews: articles,
                        refreshing: false,
                    })
                })
        })
    }

    filter = () => {
        this.setState({
            filteredNews: this.state.newsList.filter((news) => {
                return news.title.toUpperCase().includes(this.state.searchText.toUpperCase())
            })
        })
    }

    onRefresh = async () => {
        this.setState({
            refreshing: true
        })
        this.fetchNews()
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Item>
                            <TextInput
                                style={styles.searchBar}
                                placeholder='search'
                                autoCapitalize='none'
                                onChangeText={async (value) => {
                                    await this.setState({
                                        searchText: value
                                    })
                                    this.filter()
                                }}
                            >

                            </TextInput>
                        </Item>
                    </Body>
                </Header>

                <FlatList
                    style={styles.list}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                    data={this.state.filteredNews}
                    refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={() => { this.onRefresh() }} />}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                this.props.navigation.navigate("DETAILS", { news: item })
                            }}>
                            <Card id={index} style={styles.cardNews}>
                                <View style={styles.imageRow}>
                                    <Image source={item.urlToImage != null ? { uri: item.urlToImage } : undefined} style={{ width: 100, height: 100 }}>

                                    </Image>
                                </View>
                                <View style={styles.contentRow}>
                                    <Text style={styles.source}>
                                        {item.source.name}
                                    </Text>

                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>

                                </View>
                            </Card>
                        </TouchableOpacity>
                    )}
                >

                </FlatList>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    searchBar: {
        marginHorizontal: '5%',
        width: '90%',
    },
    list: {
        paddingHorizontal: '2%',
        marginTop: '4%'
    },
    cardNews: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        margin: '3%',
    },
    imageRow: {
        flex: 3
    },
    contentRow: {
        flex: 7,
        padding: '2%'
    },
    source: {
        alignSelf: 'flex-end',
        fontSize: 16,
        marginBottom: '3%'
    },
    title: {
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'justify',
        fontSize: 12
    },
})