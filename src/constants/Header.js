import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
// import {Actions} from 'react-native-router-flux';

import { Header, Left, Body, Right, Icon } from 'native-base';
import st from "../constants/style";

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export default class HeaderApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : '#FFF',
          elevation: this.props.elevation,
          borderBottomColor: 'transparent',
        }}>

        <View style={[st.row, st.alignI_C, st.pH10]}>

          <View style={[st.row, st.w_25, st.alignI_C]}>
            {this.props.Right == true ? (
              <TouchableOpacity
                style={[st.pR15]}
                onPress={() => { this.props.navigation.goBack(); }}
              >
                <Icon name="chevron-back" type="Ionicons" style={[st.colorB]} />
              </TouchableOpacity>
            ) :
              <TouchableOpacity
                onPress={() => { this.props.navigation.openDrawer(); }}
              >
                <Icon name="menu" type="Feather" style={[st.colorS]} />
              </TouchableOpacity>
            }


          </View>


          <View style={[st.w_50, st.alignI_C]}>
            {this.props.HeadingText ? (
              <Text style={[st.colorS, st.tx24, st.bold, st.pB5]}>
                {this.props.HeadingText}
              </Text>
            ) :
              <Image
                style={{ width: '100%', height: 45, resizeMode: 'contain' }}
                source={require('../assets/water.jpg')}
              />}

          </View>
          <View style={[st.w_25, st.alignI_FE]}>
            {this.props.plus ?
              <TouchableOpacity
                onPress={this.props.plus}
              >
                <Icon name="plus" type="Feather" style={[st.colorS]} />
              </TouchableOpacity>
              : null}
          </View>
        </View>

      </Header >
    );
  }
}


