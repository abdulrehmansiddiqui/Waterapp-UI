import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import st from '../constants/style';
import Header from '../constants/Header';
import AlertAddNumber from '../components/alertaddNumber';
import Contact from '../components/contact';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
  }


  render() {
    const { showAlert } = this.state
    return (
      <View style={[st.container]}>
        <Content>
          <Animatable.View animation="fadeInDown" delay={0}>
            <Header
              navigation={this.props.navigation}
              HeadingText={"Contacts"}
              // Right={true}
              plus={() => { this.setState({ showAlert: !showAlert }) }}
              elevation={10}
            />
          </Animatable.View>



          <Contact
            name={'abdul'}
            address={'n54 block gulisten e jahor karachi pakistan'}
            balance={'555'}
            screen={() => { this.props.navigation.navigate('OtherUser') }}
          />



          <Contact
            name={'abdul'}
            address={'n54 block gulisten e jahor karachi pakistan'}
            balance={'555'}
            screen={() => { this.props.navigation.navigate('OtherUser') }}
          />



          <Contact
            name={'abdul'}
            address={'n54 block gulisten e jahor karachi pakistan'}
            balance={'555'}
            screen={() => { this.props.navigation.navigate('OtherUser') }}
          />






        </Content>

        {showAlert ?
          <AlertAddNumber
            close={() => { this.setState({ showAlert: !showAlert }) }}
          />
          : null}
      </View>
    );
  }
}
