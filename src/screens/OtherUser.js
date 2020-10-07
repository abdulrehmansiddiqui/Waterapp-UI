import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import st from '../constants/style';
import Header from '../constants/Header';
import Alertaddbottle from '../components/alertaddbottle';
import * as Animatable from 'react-native-animatable';
import { Transition, Transitioning } from 'react-native-reanimated';
import { connect } from 'react-redux';
import Progress from "../components/progressstatus";

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

export default class OtherUser extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      showAlert: false,
      ProLoading: false,
      tasksdata: [2],
      index2: false,
    };
  }


  render() {
    const { showAlert, tasksdata, ProLoading, index2 } = this.state
    return (
      <Transitioning.View
        transition={transition}
        ref={this.myRef}
        style={st.container}
      >
        <Content>
          <Animatable.View animation="fadeInDown" delay={0}>
            <Header
              navigation={this.props.navigation}
              HeadingText={"Person Name"}
              Right={true}
              plus={() => { this.setState({ showAlert: !showAlert }) }}
              elevation={10}
            />
          </Animatable.View>


          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>

            <Animatable.View animation="zoomIn" delay={200} style={[st.w_50]}>
              <TouchableOpacity style={[st.card1, st.row, st.bgWarn, st.alignI_C, st.justify_B]}>
                <View>
                  <Text style={[st.tx16, st.bold, st.mL10]}>Bottle</Text>
                  <Text style={[st.tx16, st.mL10]}>Have</Text>
                </View>
                <Text style={[st.tx22, st.mL10]}>2</Text>
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="zoomIn" delay={400} style={[st.w_50]}>
              <TouchableOpacity style={[st.card1, st.row, st.bgDanger, st.alignI_C, st.justify_B]}>
                <View>
                  <Text style={[st.tx16, st.bold, st.mL10]}>Pending  </Text>
                  <Text style={[st.tx16, st.mL10]}>Amount</Text>
                </View>
                <Text style={[st.tx22, st.mL10]}>2300</Text>
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="zoomIn" delay={800} style={[st.w_50]}>
              <TouchableOpacity style={[st.card1, st.row, st.bgSuccess, st.alignI_C, st.justify_B]}>
                <View>
                  <Text style={[st.tx16, st.bold, st.mL10]}>Last Paid</Text>
                  <Text style={[st.tx16, st.mL10]}>Amount</Text>
                </View>
                <Text style={[st.tx22, st.mL10]}>1500</Text>
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="zoomIn" delay={1000} style={[st.w_50]}>
              <TouchableOpacity style={[st.card1, st.row, st.bgI, st.alignI_C, st.justify_B]}>
                <View>
                  <Text style={[st.tx16, st.bold, st.mL10]}>Billing Date</Text>
                  <Text style={[st.tx16, st.mL10]}>22/jun/2020</Text>
                </View>
              </TouchableOpacity>
            </Animatable.View>


          </View>


          <Animatable.View animation="fadeIn" delay={1200} style={[st.card, { paddingHorizontal: -20, }]}>
            {ProLoading ?
              <Spinner color='#73B6FE' /> :
              tasksdata.length > 0 ?
                <>
                  <View style={[st.row, st.pV10, st.pB20, st.pH20]}>
                    <View style={[st.w_30]}>
                      <Text style={{ color: '#999' }} >Date</Text>
                    </View>
                    <View style={[st.w_70]}>
                      <Text style={{ color: '#999' }} >Number of bottle Delivered</Text>
                    </View>
                  </View>

                  <View animation="fadeInLeft" delay={600} >
                    <Progress
                      text={'22/jun/2020'}
                      Time={'10:22'}
                      persentage={"4"}
                      shade={true}
                      color1="#72ECD7"
                      color2="#17B0D4"
                      openfunction={() => { this.myRef.current.animateNextTransition(); this.setState({ index2: !index2 }) }}
                      open={index2}
                    />
                  </View>
                </>
                : <Text style={[st.p15]}>No record Found</Text>
            }
          </Animatable.View>






        </Content>

        {showAlert ?
          <Alertaddbottle
            close={() => { this.setState({ showAlert: !showAlert }) }}
          />
          : null}
      </Transitioning.View>
    );
  }
}
