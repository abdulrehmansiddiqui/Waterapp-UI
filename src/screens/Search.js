import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Icon, Content, Row, Item, Input, Spinner } from 'native-base';
import st from '../constants/style';
import Header from '../constants/Header';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import Globle from "../constants/Global"
import API from "../constants/API";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      productdata: [],
      prosearch: '',
      message: 'Press the search button'
    };
  }

  // componentDidMount() {
  //   this.setState({ productdata: this.props.productdata })
  // }

  // findtheproduct() {
  //   this.setState({ Loading: true })
  //   Globle.getRequest(API.SEARCH_PRODUCT + this.state.prosearch)
  //     .then((res) => {
  //       console.log(res.status, "Search")
  //       if (res.status == 200) {
  //         if (res.data.length > 0) {
  //           var merge = this.state.productdata
  //           var children = merge.concat(res.data);
  //           this.setState({ productdata: children })
  //         } else {
  //           this.setState({ Loading: false, productdata: [], message: "No Record Found" })
  //         }
  //       }
  //     })

  // }

  productInRedux(val) {
    this.setState({ prosearch: val })
  }

  render() {
    return (
      <View style={[st.container]}>

        <Content style={st.pH20}>

          <Animatable.View animation="fadeInDown" delay={200}>
            <Row style={st.inputSearch}>
              <Icon name="search1" type="AntDesign" style={[st.mR10, st.colorP, st.tx22]} />
              <Input
                onChangeText={val => this.productInRedux(val)}
                placeholder="Search Product By Name"
                placeholderTextColor="#000"
                value={this.state.search}
                style={[st.colorS]}
              />
            </Row>
          </Animatable.View>



          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.prosearch !== '' ?
              this.state.productdata.filter(item => item.name.toUpperCase().includes(this.state.prosearch.toUpperCase())).length > 0 ?
                this.state.productdata.filter(item => item.name.toUpperCase().includes(this.state.prosearch.toUpperCase())).map((v, k) => {
                  return (
                    <Product
                      key={k}
                      image={v.images.length ? v.images[0].src : null}
                      name={v.name}
                      pack={
                        v.meta_data.map(v => {
                          if (v.key == '_subtitle') {
                            return v.value
                          }
                        })
                      }
                      price={v.price}
                      featured={v.featured}
                      changeScreen={() => { this.props.navigation.navigate('Singe_product', { product: v }); }}
                    />

                  )
                })
                : <Animatable.View animation="fadeIn" delay={200} style={[st.alignI_C, st.w_100]} >
                  {this.state.Loading ? <Spinner color='#73B6FE' /> : <Text> {this.state.message}</Text>}
                </Animatable.View>
              : <Animatable.View animation="fadeIn" delay={1000}>
                <Text>Your search keyword did not match any products</Text>
              </Animatable.View>
            }
          </View>


        </Content>


        {this.state.productdata.filter(item => item.name.toUpperCase().includes(this.state.prosearch.toUpperCase())).length > 0
          ? null
          : <Animatable.View animation="fadeInUp" delay={200} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <TouchableOpacity
              onPress={() => { this.findtheproduct() }}
              style={[st.p10, st.pH40, st.bgP, st.w_100, st.alignI_C]}
            >
              <Text style={[st.tx14, st.bold7, st.colorW]}>Search</Text>
            </TouchableOpacity>
          </Animatable.View>
        }



      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Search);