import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { navigate, text } = this.props
        return (
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={navigate}>
                    <LinearGradient
                        colors={['#73B6FE','#5C91CB']}
                        start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}
                        style={st.linearGradientButton}
                    >
                        <Text style={st.btn}>{text}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const st = StyleSheet.create({
    btn: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "700"
    },
    linearGradientButton: {
        borderRadius: 30,
        alignItems: 'center',
        alignContent: 'center',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center'
    },

})