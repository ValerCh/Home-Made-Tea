import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import IntroScreen from '../screens/IntroScreen/IntroScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainNavigator = createStackNavigator({
  IntroScreen,
  HomeScreen
});

const RootSwitch = createSwitchNavigator({
  MainNavigator,
  HomeScreen
}, {initialRouteName: 'MainNavigator'});

export default RootSwitch;
