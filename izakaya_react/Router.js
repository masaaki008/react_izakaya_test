import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
const styles = {
  tabIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconStyle: {
    width: 24,
    height: 24,
    fontSize: 24,
  },
}
 
const TabBarIcon = props => (
  <View style={styles.tabIconContainerStyle}>
    <Icon
      name={props.iconName}
      color={props.focused ? 'blue' : 'grey'}
      style={styles.tabIconStyle}
    />
  </View>
);
 
const RouterComponent = () => {
  return (
    <Router>
      <Tabs
        key='root'
        swipeEnabled={ true }
        animationEnabled={ true }
      >
        <Scene
          key='home'
          component={Home}
          title='ホーム'
          iconName='collections'
          initial
          iconColor='red'
          icon={TabBarIcon}
        />
      </Tabs>
    </Router>
  )
}
 
export default RouterComponent;