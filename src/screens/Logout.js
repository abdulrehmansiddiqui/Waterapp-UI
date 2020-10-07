import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { destory } from "../redux/actions/auth";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.updateAuth("")
  }

  render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAuth: (data) => { dispatch(destory(data)) }
  }
}


export default connect(null, mapDispatchToProps)(Logout)
