/**
 * swip実装予定
 * 
 *
 * 
 * 
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image,
    AppState
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{uri: this.props.image_url.shop_image1}}/>
                <Text style={styles.text}>店名:{this.props.name}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.noMoreCards}>
                <Text>No More cards</Text>
            </View>
        )
    }
}

export default class App extends Component<{}> {
    state = {
        rest: [],
        outOfCards: false
    }

    onPressFetch() {
        fetch('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=6787814f9abbc023c7ea729f3f2876bc&areacode_m=AREAM2178')
            .then(response => response.json())
            .then(({ rest }) => this.setState({ rest }));
    }

    handleYup(card) {
        console.log("yup")
    }

    handleNope(card) {
        console.log("nope")
    }

    cardRemoved(index) {
        console.log(`The index is ${index}`);

        let CARD_REFRESH_LIMIT = 3

        if (this.state.rest.length - index <= CARD_REFRESH_LIMIT + 1) {
            console.log(`There are only ${this.state.rest.length - index - 1} cards left.`);

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: 50 }} onPress={() => this.onPressFetch()} >
                    <Text>Get Ebisu area</Text>
                </TouchableOpacity>
                <SwipeCards
                    cards={this.state.rest}
                    loop={false}

                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}
                    showYup={true}
                    showNope={true}

                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                    cardRemoved={this.cardRemoved.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    inputWrapper: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#EEE',
        borderRadius: 4,
    },
    searchText: {
        padding: 10,
    },
    ownerIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 5,
    },
    ownerName: {
        fontSize: 14,
    },
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
