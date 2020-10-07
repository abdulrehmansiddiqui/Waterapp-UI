
import * as React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, Easing, Image } from "react-native";
import { Icon, } from 'native-base';
import st from "../constants/style";
import { connect } from 'react-redux';

// state, descriptors, navigation
function CustomDrawer(props) {
    const state = props.state
    const descriptors = props.descriptors
    const navigation = props.navigation

    return (
        <ImageBackground
            // source={require("../assets/Drawer.jpg")}
            style={[st.container, st.p15]}
        // imageStyle={{ borderTopRightRadius: 30, borderBottomRightRadius: 30, }}
        >
            <View style={[st.row, st.alignI_C]}>
                <View style={[st.w_35]}>
                    <Image style={{ height: 70, width: 70, borderRadius: 200 }}
                        source={require("../assets/noimage.jpg")}
                        resizeMode="cover"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home', { screen: 'Profile' }) }}>
                    <Text style={[st.tx20, st.bold, st.txAlignL,]}>Guest</Text>
                    <Text style={[st.tx14, st.txAlignL,]}>abcd address</Text>
                </TouchableOpacity>
            </View>

            <View style={[st.border_B, { borderColor: '#CCC' }, st.mV20]} />
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('Home', { screen: 'Profile' }) }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='user' type='FontAwesome' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Profile</Text>
            </TouchableOpacity> */}
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Payment') }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='credit-card' type='FontAwesome' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>About Us</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('MyOrders') }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='shopping-basket' type='FontAwesome' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Contact Us</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Contact') }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='phone-call' type='Feather' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Privacy Policy</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Support') }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='user-clock' type='FontAwesome5' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Terms & Conditions</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home', { screen: 'Settings' }) }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='cog' type='FontAwesome' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Delivery Information</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Terms') }}
                style={[st.row, st.p10, st.alignI_C,
                    // { backgroundColor: isFocused ? 'grey' : null }
                ]}
            >
                <Icon name='checklist' type='Octicons' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>FAQ</Text>
            </TouchableOpacity>
            {/* /////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////////////// */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Login') }}
                style={[st.row, st.p10,
                { position: 'absolute', bottom: 15, left: 15 }
                ]}
            >
                <Icon name='log-in' type='Feather' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('Logout') }}
                style={[st.row, st.p10,
                { position: 'absolute', bottom: 15, left: 15 }
                ]}
            >
                <Icon name='log-out' type='Feather' style={[{ fontSize: 25, }, st.colorP, st.w_20, st.txAlignL]} />
                <Text style={[st.tx18, st.w_80]}>Logout</Text>
            </TouchableOpacity> */}

        </ImageBackground>
    );
}

const mapStateToProps = (state) => {
    return {
        userdata: state.user
    }
}


export default connect(mapStateToProps)(CustomDrawer);