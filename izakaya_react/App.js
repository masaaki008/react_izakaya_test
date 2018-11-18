/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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

export default class App extends Component<{}> {
  state = {
    rest: [],
  }

  onPressFetch(){
    fetch('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=6787814f9abbc023c7ea729f3f2876bc&areacode_m=AREAM2178')
      .then(response => response.json())
      .then(({ rest }) => this.setState({ rest }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{marginTop: 50}} onPress={() => this.onPressFetch()} >
          <Text>Ebisu area</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.rest}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
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
});
