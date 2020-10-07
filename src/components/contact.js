import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import st from "../constants/style";
import { Icon } from 'native-base';
import LinearGradient from "react-native-linear-gradient";

export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        let { name, address, balance, } = this.props
        return (
            <TouchableOpacity onPress={this.props.screen} style={[st.card, st.row, st.alignI_C]}>
                <View style={[st.w_10]}>
                    <View style={[{ width: 15, height: 15, borderColor: "#CCC", borderWidth: 1, padding: 2, borderRadius: 30 }, st.bgP]} />
                </View>
                <View style={[st.w_75]}>
                    <Text style={[st.tx22, st.mL10]}>{name}</Text>
                    <Text style={[st.tx16, st.mL10]}>{address}</Text>
                </View>
                <View style={[st.w_15]}>
                    <Text style={[st.tx16, st.mL10]}>{balance}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    progress1: {
        backgroundColor: '#C4C4C4',
        height: 10,
        borderRadius: 20
    },
    progress2: {
        height: 10,
        borderRadius: 20
    },
})