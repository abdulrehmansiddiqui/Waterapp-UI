import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import st from '../constants/style';
import Header from '../constants/Header';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const menu = [st.row, st.justify_B, st.alignI_C, st.border_B, st.p15, { borderColor: '#f1f1f1' }]
    const icon = [st.tx16, { color: '#999' }]
    const text = [st.tx18, { color: '#999' }]
    const text1 = [st.tx18, st.mR10, { color: '#000' }]
    return (
      <View style={[st.container]}>
        <Content>


          <Animatable.View animation="fadeIn" delay={200} style={[st.p20]}>
            <View style={[st.row, st.alignI_C]}>
              <View style={[st.w_35]}>
                <Image style={{ height: 70, width: 70, borderRadius: 200, borderWidth: 1, borderColor: '#ccc' }}
                  source={require("../assets/noimage.jpg")}
                  resizeMode="cover"
                />
              </View>
              <TouchableOpacity
                onPress={() => { navigation.navigate('Home', { screen: 'Profile' }) }}>
                <Text style={[st.tx20, st.bold, st.txAlignL,]}>Guest</Text>
                <Text style={[st.tx14, st.txAlignL,]}>abcd address</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <View style={[st.p5, { backgroundColor: '#f1f1f1' }]} />
          {/* <Animatable.View animation="fadeIn" delay={800} style={menu}>
            <Text style={text} > Currency</Text>
            <View style={[st.row, st.alignI_C]}>
              <Text style={text1} > AED</Text>
              <Icon name="right" type="AntDesign" style={icon} />
            </View>
          </Animatable.View> */}
          {/* <Animatable.View animation="fadeIn" delay={1000} style={menu}>
            <Text style={text} > Language</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View> */}
          {/* <Animatable.View animation="fadeIn" delay={200} style={menu}>
            <Text style={text} > Dark Theme</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View> */}
          {/* ///////////////////////////////////////////////////////////////////////////////// */}

          <Animatable.View animation="fadeIn" delay={600} style={menu}>
            <Text style={text} > Privacy Policy</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={800} style={menu}>
            <Text style={text} > Term & Conditions</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1000} style={menu}>
            <Text style={text} > FAQ</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          {/* ///////////////////////////////////////////////////////////////////////////////// */}
          {/* <Animatable.View animation="fadeIn" delay={400} style={menu}>
            <Text style={text} > WishList (1)</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={600} style={menu}>
            <Text style={text} > Acccount Details</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={800} style={menu}>
            <Text style={text} > Orders</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1000} style={menu}>
            <Text style={text} >Addresses</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1200} style={menu}>
            <Text style={text} > Privacy Policy</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1400} style={menu}>
            <Text style={text} > Term & Conditions</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1600} style={menu}>
            <Text style={text} > Delivery Information</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1800} style={menu}>
            <Text style={text} > FAQ</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={2000} style={menu}>
            <Text style={text} > Logout</Text>
            <Icon name="right" type="AntDesign" style={icon} />
          </Animatable.View>
          */}



        </Content>
      </View>
    );
  }
}
