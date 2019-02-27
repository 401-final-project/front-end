import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
// import ProfileForm from './screens/profileForm';
// import QR from './components/qr';
// import Storage from './components/storage.js';
// import Scanner from './screens/scanner'
// import ShareSelector from './components/share-selector.js';
import store from './store';
import {Provider} from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/appNavigator';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/robot-dev.png'),
        // require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <ScrollView>
//           <Text>This is going to be our app!</Text>
//           <Text>-----</Text>
//           <Text>-----</Text>

//           <Text>ProfileForm:</Text>
//           <Storage />
//           {/* <ProfileForm /> */}
//           {/* <QR /> */}
//           {/* <ShareSelector /> */}
//           {/* <Scanner /> */}
//          </ScrollView>
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App; 