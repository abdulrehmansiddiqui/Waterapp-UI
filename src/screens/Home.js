import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import st from '../constants/style';
import Header from '../constants/Header';
import AlertAddNumber from '../components/alertaddNumber';
import { connect } from 'react-redux';

export default class Home extends Component {
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
          <View animation="fadeInDown" delay={0}>
            <Header
              navigation={this.props.navigation}
              // HeadingText={"Contacts"}
              // Right={true}
              // plus={() => { this.setState({ showAlert: !showAlert }) }}
              elevation={10}
            />


            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>

              <View style={[st.w_50]}>
                <TouchableOpacity style={[st.card1, st.row, st.bgWarn, st.alignI_C, st.justify_B]}>
                  <View>
                    <Text style={[st.tx16, st.bold, st.mL10]}>Total</Text>
                    <Text style={[st.tx16, st.mL10]}>Contact</Text>
                  </View>
                  <Text style={[st.tx22, st.mL10]}>99</Text>
                </TouchableOpacity>
              </View>
              <View style={[st.w_50]}>
                <TouchableOpacity style={[st.card1, st.row, st.bgDanger, st.alignI_C, st.justify_B]}>
                  <View>
                    <Text style={[st.tx16, st.bold, st.mL10]}>Monthly </Text>
                    <Text style={[st.tx16, st.mL10]}>Income</Text>
                  </View>
                  <Text style={[st.tx22, st.mL10]}>99</Text>
                </TouchableOpacity>
              </View>
              <View style={[st.w_50]}>
                <TouchableOpacity style={[st.card1, st.row, st.bgSuccess, st.alignI_C, st.justify_B]}>
                  <View>
                    <Text style={[st.tx16, st.bold, st.mL10]}>Number of</Text>
                    <Text style={[st.tx16, st.mL10]}>Bottle Supply</Text>
                  </View>
                  <Text style={[st.tx22, st.mL10]}>99</Text>
                </TouchableOpacity>
              </View>
              <View style={[st.w_50]}>
                <TouchableOpacity style={[st.card1, st.row, st.bgI, st.alignI_C, st.justify_B]}>
                  <View>
                    <Text style={[st.tx16, st.bold, st.mL10]}>Total</Text>
                    <Text style={[st.tx16, st.mL10]}>Bill</Text>
                  </View>
                  <Text style={[st.tx22, st.mL10]}>99</Text>
                </TouchableOpacity>
              </View>


            </View>




          </View>
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
