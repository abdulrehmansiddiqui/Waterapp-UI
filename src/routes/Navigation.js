import * as React from 'react';
import { Easing } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomDrawer from '../constants/Drawer'
import CustomBottomTab from '../constants/BottomTab'
// import CustomHeader from '../constants/Header'
import { connect } from 'react-redux'

import Login from '../screens/Login'
import Home from '../screens/Home'
import ContactList from '../screens/ContactList'
import Record from '../screens/Record'
import OtherUser from '../screens/OtherUser'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import FAQ from '../screens/FAQ'
import Settings from '../screens/Settings'
import Changepassword from '../screens/Changepassword'
import Logout from '../screens/Logout'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linera
  }
}

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // TransitionSpecs: { open: config, close: closeConfig }
      }}
      initialRouteName="Login"
    // headerMode="float"
    // headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function myStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        // TransitionSpecs: { open: config, close: closeConfig }
      }}
      headerMode="none"
      initialRouteName="Home1"
    >
      <Stack.Screen name="Home1" component={Home} />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="OtherUser" component={OtherUser} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Changepassword" component={Changepassword} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Logout" component={Logout} />

    </Stack.Navigator>
  );
}

function ContactListStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        // TransitionSpecs: { open: config, close: closeConfig }
      }}
      headerMode="none"
      initialRouteName="ContactList"
    >
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="OtherUser" component={OtherUser} />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}

const BottomTab = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      initialRouteName="ContactList"
    >
      <Tab.Screen name="Home" component={myStack} />
      <Tab.Screen name="ContactList" component={ContactListStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


function App(props) {

  return (
    <NavigationContainer>
      {!props.auth == '' ?
        <LoginStack />
        :
        <Drawer.Navigator
          drawerContent={props =>
            <CustomDrawer {...props} />
          }
          drawerStyle={{
            backgroundColor: 'transparent',
          }}
        // drawerBackgroundColor={'transparent'}
        >
          <Drawer.Screen name="Home" component={BottomTab} />
        </Drawer.Navigator>
      }
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth
  }
}


export default connect(mapStateToProps)(App);