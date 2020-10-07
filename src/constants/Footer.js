import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import { Icon } from 'native-base';
import st from "./style";
import API from "../constants/API"
import G from "../constants/Global"

import { connect } from 'react-redux';
import { destory } from "../redux/actions/auth";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={st.container}>

        <View style={[st.border_B, st.mV20, st.mT40, { borderColor: '#000', opacity: 0.1 }]} />
        <Image
          style={{ height: 51, width: "100%" }}
          source={require("../assets/boxhigherlogo.png")}
          resizeMode="contain"
        />

        <TouchableOpacity
          onPress={() => { [this.props.updateAuth(""), G.removeData(API.AUTH_KEY)] }}
          style={[st.row, st.p10, st.alignI_C, st.justify_C]}
        >
          <Icon name='log-out' type='Feather' style={[{ color: '#999' }, st.tx26,]} />
          <Text style={[st.tx18, { color: '#999' }, st.mL15]}>{'Logout'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAuth: (data) => { dispatch(destory(data)) }
  }
}


export default connect(null, mapDispatchToProps)(Footer);