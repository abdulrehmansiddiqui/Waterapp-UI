import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import SplashScreen from 'react-native-splash-screen'
import Navigation from './src/routes/Navigation'
import index_reducer from './src/redux/reducers/index_reducer'

const mystore = createStore(index_reducer, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={mystore} style={{ flex: 1 }}>
        <Navigation />
      </Provider>
    );
  }
}
