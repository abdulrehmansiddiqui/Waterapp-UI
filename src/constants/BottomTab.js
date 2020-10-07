
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Easing, Image } from "react-native";
import { Icon, } from 'native-base';
import st from "./style";
import { connect } from 'react-redux';


function CustomBottomTab(props) {
    const { state, descriptors, navigation, cart } = props
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;
                let iconType;
                let count;
                let name;
                if (route.name == "Home") {
                    iconName = "home";
                    iconType = "AntDesign";
                    name = 'Home';
                } else if (route.name == "ContactList") {
                    iconName = "list";
                    iconType = "Feather";
                    name = 'My_Order';
                } else if (route.name == "Search") {
                    iconName = "search";
                    iconType = "Feather";
                    name = 'Settings';
                } else if (route.name == "Profile") {
                    iconName = "user";
                    iconType = "SimpleLineIcons";
                    name = 'Profile';
                }
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={1}
                        onLongPress={onLongPress}
                        style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", paddingVertical: 10 }}
                    >
                        <Icon name={iconName} type={iconType} style={{ color: isFocused ? '#73B6FE' : 'grey', fontSize: 25, }} />
                        {count ?
                            cart.length > 0 ?
                                <View style={[style.counting, st.bgDanger]}>
                                    <Text style={[st.colorW, st.tx14, st.bold]}>{cart.length}</Text>
                                </View>
                                : null
                            : null}
                        {/* <Text style={{ color: isFocused ? '#FCB817' : 'white', fontSize: 12, }}>{name}</Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const style = StyleSheet.create({
    counting: {
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: 5,
        right: "20%",
        width: 18,
        height: 18,
        borderRadius: 20
    }

})

const mapStateToProps = (state) => {
    return {
        cart: null,
    }
}

export default connect(mapStateToProps)(CustomBottomTab)