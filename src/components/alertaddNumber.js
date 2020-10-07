import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon, Content, Row, Input, Spinner } from 'native-base';
import st from '../constants/style'
import * as Animatable from 'react-native-animatable';
import Button from "../components/button";

export default class alertaddNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgw: true,

            full_name: '',
            phone: '',
            address: '',

            vfull_name: true,
            vphone: true,
            vaddress: true,
        };
    }


    addNumber() {
        const { full_name, phone, address, } = this.state
        // console.log(avatarSource)

        var dataTosend = {
            full_name: full_name,
            phone: phone,
            address: address,
        }

        // var dataTosend = new FormData();
        // dataTosend.append('full_name', full_name);
        // dataTosend.append('phone', phone);
        // dataTosend.append('email', email);
        // dataTosend.append('company_name', company_name);
        // dataTosend.append('is_notificated', notification);
        // dataTosend.append('project_name', project_name);
        // dataTosend.append('logo', image);

        // this.updateUser(dataTosend)

    }

    bgwhite = () => {
        return (
            <Animatable.View animation="fadeInUpBig" delay={0} duration={400}
                style={[st.w_100, st.h_100,]}
            >
                <TouchableOpacity
                    onPress={this.props.close}
                    style={[st.bgP, st.w_100, st.h_100, st.justify_C, st.alignI_C, { position: "absolute", opacity: 0.6, }]}
                >
                </TouchableOpacity >
            </Animatable.View>
        )
    };

    Message = () => {
        return (
            <View style={{
                position: "absolute",
                zIndex: 999,
                width: "100%",
            }}>

                <Animatable.View animation="fadeIn" delay={400} style={[st.mH20, st.bgW, st.Radius, st.p20]}>
                    <Text style={[st.txAlignC, st.tx26, st.bold, st.mB10]}>Add Contact</Text>

                    <View style={[st.mB20, st.mT20]}>
                        <Text style={[{ color: '#828282' }, st.tx12]}>Full Name</Text>
                        <Row
                            style={[
                                this.state.vfull_name == true
                                    ? st.inputgrey
                                    : st.inputred, st.alignI_C, st.pR15]
                            }
                        >
                            <Input
                                onChangeText={val => this.setState({ full_name: val, vfull_name: true })}
                                placeholder={'Full Name'}
                                value={this.state.full_name}
                                placeholderTextColor="#ccc"
                                style={{ color: '#4F4F4F' }}
                            />
                        </Row>
                    </View>


                    <View style={[st.mB20]}>
                        <Text style={[{ color: '#828282' }, st.tx12]}>Phone number</Text>
                        <Row
                            style={[
                                this.state.vphone == true
                                    ? st.inputgrey
                                    : st.inputred, st.alignI_C, st.pR15]
                            }
                        >
                            <Input
                                onChangeText={val => this.setState({ phone: val, vphone: true })}
                                placeholder={'Phone number'}
                                value={this.state.phone}
                                placeholderTextColor="#ccc"
                                style={{ color: '#4F4F4F' }}
                            />
                        </Row>
                    </View>

                    <View style={[st.mB20]}>
                        <Text style={[{ color: '#828282' }, st.tx12]}>Address</Text>
                        <Row
                            style={[
                                this.state.vaddress == true
                                    ? st.inputgrey
                                    : st.inputred, st.alignI_C, st.pR15]
                            }
                        >
                            <Input
                                onChangeText={val => this.setState({ address: val, vaddress: true })}
                                placeholder={'Address'}
                                value={this.state.address}
                                placeholderTextColor="#ccc"
                                style={{ color: '#4F4F4F' }}
                            />
                        </Row>
                    </View>

                    <Animatable.View animation="swing" delay={600} style={[st.mT10, st.mH10]}>
                        <Button
                            text={'Add'}
                            navigate={this.addNumber()}
                        />
                    </Animatable.View>
                </Animatable.View>


            </View >
        )
    };


    render() {
        return (
            <View style={{
                flex: 1, position: "absolute", width: "100%", height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>

                {this.state.bgw ? this.bgwhite() : null}
                {this.state.bgw ? this.Message() : null}

            </View>
        );
    }
}
