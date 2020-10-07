import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import st from "../constants/style";
import { Icon } from 'native-base';
import LinearGradient from "react-native-linear-gradient";

export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: "#fdbfca",
            color2: "#FD7B91",
        };
    }

    componentDidMount() {
        if (this.props.color1) {
            this.setState({
                color1: this.props.color1,
                color2: this.props.color2,
                open: this.props.open,
            });
        }
    }

    render() {
        let { color1, color2, } = this.state
        let { shade, key, openfunction, text, persentage, open, Time, deadline, detail } = this.props
        return (
            <View key={key} style={[st.p20,
            { backgroundColor: shade ? "#f7f7f7" : "#fff" }
            ]}>
                <TouchableOpacity
                    onPress={openfunction}
                    style={[st.row, st.alignI_C,]}>
                    <View style={[st.w_30]}>
                        <Text style={{ color: '#000' }} >{text}</Text>
                    </View>
                    <View style={[st.w_45, st.pL10]}>
                        <View style={styles.progress1}>
                            <LinearGradient
                                colors={[color1, color2]}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={[styles.progress2, { width: `${persentage}0%` }]}
                            />
                        </View>
                    </View>
                    <View style={[st.w_15, st.alignI_C]}>
                        <Text style={[st.bold, st.tx16]} >{persentage}</Text>
                    </View>
                    <View style={[st.w_10, st.alignI_C]}>
                        {open
                            ? <Icon type="AntDesign" name="up" style={[st.colorP, st.tx18]} />
                            : <Icon type="AntDesign" name="down" style={[st.colorP, st.tx18]} />
                        }
                    </View>
                </TouchableOpacity>

                {open ?
                    <View>
                        <View style={[st.row, st.alignI_C, st.mT20,]}>
                            <View style={[st.w_50]}>
                                <Text style={[st.tx16, st.colorT]}>Time</Text>
                            </View>
                            <View style={[st.w_50]}>
                                <Text style={[st.tx14, st.colorB]}>{Time}</Text>
                            </View>
                        </View>
                        <View style={[st.row, st.alignI_C, st.mT20,]}>
                            <View style={[st.w_50]}>
                                <Text style={[st.tx16, st.colorT]}>Paid</Text>
                            </View>
                            <View style={[st.w_50]}>
                                <Text style={[st.tx14, st.colorB]}>{"yes"}</Text>
                            </View>
                        </View>
                    </View>
                    : null}

            </View>
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