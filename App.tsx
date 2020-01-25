import React from 'react';
import {Text, StatusBar} from 'react-native';
import colors from './app/styles/colors';
import {createAppContainer} from 'react-navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppProvider from './app/context/AppProvider';
import AppNavigator from "./app/navigation/Navigator";

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

  componentDidMount() {
    this.setState({fontsLoaded: true});
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
