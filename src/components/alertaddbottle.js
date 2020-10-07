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
            numbottle: 1,
        };
    }


    addNumber() {
        const { numbottle, } = this.state
        // console.log(avatarSource)

        var dataTosend = {
            bottle: numbottle,
        }

        // var dataTosend = new FormData();
        // dataTosend.append('bottle', bottle);
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

    incearce() {
        if (this.state.numbottle <= 9) {
            this.setState({ numbottle: this.state.numbottle + 1 })
        }
    }
    decrease() {
        if (this.state.numbottle > 1) {
            this.setState({ numbottle: this.state.numbottle - 1 })
        }
    }


    Message = () => {
        return (
            <View style={{
                position: "absolute",
                zIndex: 999,
                width: "100%",
            }}>

                <Animatable.View animation="fadeIn" delay={400} style={[st.mH20, st.bgW, st.Radius, st.p20]}>
                    <Text style={[st.txAlignC, st.tx26, st.bold, st.mB10]}>Add Bottle</Text>

                    <View style={[st.mB20, st.mT20, st.row, st.justify_A, st.alignI_C]}>
                        <TouchableOpacity onPress={() => { this.decrease() }}>
                            <Icon name="minus" type="AntDesign" style={[st.colorB]} />
                        </TouchableOpacity>
                        <Text style={[st.tx22]}>{this.state.numbottle}</Text>
                        <TouchableOpacity onPress={() => { this.incearce() }}>
                            <Icon name="plus" type="AntDesign" style={[st.colorB]} />
                        </TouchableOpacity>
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
