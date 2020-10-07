import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon } from "native-base";
import st from '../constants/style'
import * as Animatable from 'react-native-animatable';
import Button from "../components/button";

export default class Alertbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgw: true,
            Message: true,
        };
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
                    <View style={[st.alignI_C, st.mV10]}>
                        <Icon type="FontAwesome5" name={this.props.icon} style={[st.colorP, { fontSize: 40 }, st.pB10]} />

                        <Text style={[st.txAlignC, st.tx20, st.bold]}>{this.props.message}</Text>
                    </View>

                    <Animatable.View animation="swing" delay={600} style={[st.mT10, st.mH10]}>
                        <Button
                            text={'OK'}
                            navigate={this.props.close}
                        />
                    </Animatable.View>
                </Animatable.View>


            </View>
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
