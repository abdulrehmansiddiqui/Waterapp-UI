import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, BackHandler } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';

import st from "../constants/style";
import Global from "../constants/Global";
import API from "../constants/API";

import Button from "../components/button";
// import Alertbox from "../components/alertbox";
import { auth } from "../redux/actions/auth";
import { get_user } from '../redux/actions/user';
import { get_project } from '../redux/actions/project';
import { get_cpanel } from '../redux/actions/cpanel';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      slider: false,

      // email: "rambarel@gmail.com",
      // password: "1q2w3e4r",
      email: "",
      password: "",
      vpass: true,
      validemail: true,
      validpass: true,

      showAlert: false,
      alerttext: '',
      alerticon: '',
    };
  }
  async componentDidMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    // var token = await Global.getData(API.AUTH_KEY)
    // if (token) {
    //   // console.log(token)
    //   this.props.getUser(token.access_token)
    //   this.props.get_project(token.user._id, token.access_token)
    //   this.props.updateAuth(token)
    //   this.props.get_cpanel(token.user.id, token.access_token)
    // }

  }


  Login = () => {
    const { email, password } = this.state
    if (email.trim() == "" || password.trim() == "") {
      email.trim() == "" ? this.setState({ validemail: false }) : null
      password.trim() == "" ? this.setState({ validpass: false }) : null

    }
    else {
      this.setState({ isLoading: true })
      var data = { email: email, password: password, }


      Global.postRequest(API.LOGIN, data)
        .then(async (res) => {
          // console.log(res.status)
          // console.log(res.data)
          if (res.status == 200) {

            await Global.saveData(API.AUTH_KEY, res.data)

            this.props.updateAuth(res.data)

            // this.setState({ isLoading: false })
          }
          else {
            this.setState({ isLoading: false, showAlert: true, alerttext: 'Error_login', alerticon: 'warning' })
            this.setState({ validemail: false, validpass: false })
          }
        })

    }
  }

  render() {
    const { showAlert, alerticon, alerttext, slider, isLoading } = this.state
    return (
      <View style={[st.container, { backgroundColor: "#F6F6F6" }]}>
        <Content style={[st.pV40, st.pH20]}>

          {/* <TouchableWithoutFeedback>
            <View ref={this.refclose}>
            </View>
          </TouchableWithoutFeedback> */}
          {/* <Text style={{ fontFamily: 'Poppins-ExtraBoldItalic' }}>Bounce me!</Text> */}

          <View style={[st.alignI_C, st.pH20]}>
            <Image
              style={{ height: 51, width: "100%" }}
              // source={require("../assets/boxhigherlogo.png")}
              resizeMode="contain"
            />
          </View>

          <View style={[st.alignI_C, st.pH20]} >
            {slider ?
              <TouchableOpacity style={{ height: 218, width: "100%" }} onPress={() => { this.setState({ slider: !slider }) }}>
                <Image
                  style={{ height: 218, width: "100%" }}
                  // source={require("../assets/Slider1.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ height: 218, width: "100%" }} onPress={() => { this.setState({ slider: !slider }) }}>
                <Image
                  style={{ height: 218, width: "100%" }}
                  // source={require("../assets/Slider2.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
          </View>



          <View style={[st.mT20, st.pH20]} >
            <View ref={this.handleViewRef1}
              style={[
                this.state.validemail == true
                  ? st.inputgrey2
                  : st.inputred2, st.pR15]
              }
            >
              <Input
                onChangeText={val => this.setState({ email: val, validemail: true })}
                placeholder={'Email'}
                value={this.state.email}
                placeholderTextColor="#999"
                style={st.colorP}
              />
            </View>
          </View>

          <View style={[st.mT20, st.pH20]} ref={this.refclose} >
            <View ref={this.handleViewRef2}
              style={[
                this.state.validpass == true
                  ? st.inputgrey2
                  : st.inputred2, st.pR15]
              }
            >
              <Input
                onChangeText={text => this.setState({ password: text, validpass: true })}
                placeholder={'Password'}
                value={this.state.password}
                placeholderTextColor="#999"
                secureTextEntry={this.state.vpass}
                style={st.colorP}
              />
            </View>
          </View>

          <View style={[st.mT30, st.pH20]}>
            {this.state.isLoading ?
              <Spinner color='#73B6FE' /> :
              <Button
                // color={false}
                text={'Log in '}
                navigate={() => { this.Login() }}
              />
            }
          </View>

          <View style={[st.mT20, st.pH20, st.alignI_C]} >
            <Text style={[{ color: "#999" }, st.tx12]}>Forget password click here</Text>
          </View>
          <View style={[st.mV40]}>
            {/* <TouchableOpacity
              onPress={() => { this.props.navigation.navigate("Forget") }}
              style={[st.alignI_C, st.mT30, st.row, st.justify_C]}>

              <Text style={[st.tx14, st.colorB]}>You forgot your password</Text>
              <Text style={[st.tx14, st.colorP]}> Click here</Text>
            </TouchableOpacity> */}
          </View>


        </Content>
        {/* {showAlert ?
          <Alertbox
            Error={alerttext}
            icon={alerticon}
            close={() => { this.setState({ showAlert: !showAlert }) }}
          />
          : null} */}
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateAuth: (data) => { dispatch(auth(data)) },
    getUser: (token) => { dispatch(get_user(token)) },
    get_project: (id, token) => { dispatch(get_project(id, token)) },
    get_cpanel: (id, token) => { dispatch(get_cpanel(id, token)) },
  }
}
export default connect(null, mapDispatchToProps)(Login)