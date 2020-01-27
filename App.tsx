import React from 'react';
import {Text, StatusBar, AsyncStorage} from 'react-native';
import colors from './app/styles/colors';
import {createAppContainer} from 'react-navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppProvider from './app/context/AppProvider';
import AppNavigator from "./app/navigator/Navigator";
import * as Font from 'expo-font';

class App extends React.Component {

  state = {
    fontsLoaded: false
  };

  theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.darkBlue,
      accent: colors.lightBlue
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      "SF-Compact-Rounded-Regular": require("./assets/fonts/SF-Compact-Rounded-Regular.ttf"),
      "SF-Compact-Rounded-Semibold": require("./assets/fonts/SF-Compact-Rounded-Semibold.ttf"),
      "SF-Compact-Rounded-Medium": require("./assets/fonts/SF-Compact-Rounded-Medium.ttf"),
      "SF-Compact-Rounded-Light": require("./assets/fonts/SF-Compact-Rounded-Light.ttf"),
      "SF-Compact-Rounded-Bold": require("./assets/fonts/SF-Compact-Rounded-Bold.ttf")
    });
    this.setState({fontsLoaded: true});
    const savedState = await JSON.parse(await AsyncStorage.getItem("appData"));
    console.log("svedstate", savedState);
    if (savedState) this.setState(savedState);
  }

  render() {
    const AppContainer = createAppContainer(AppNavigator);
    if (this.state.fontsLoaded) {
      return (
        <AppProvider>
          <PaperProvider theme={this.theme}>
            <StatusBar hidden={true}/>
            <AppContainer/>
          </PaperProvider>
        </AppProvider>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }

}

export default App;
