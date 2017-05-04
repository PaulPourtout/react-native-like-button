import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Styles from './styles/Styles';

export default class HeartSide extends Component {
   constructor(props) {
      super(props);
      this.state = this.getStateByProps(props);
   }

   componentWillReceiveProps(nextProps) {
      // console.log('will receive nextProps : ', nextProps);
      this.setState(this.getStateByProps(nextProps));
   }

   getStateByProps(props) {
      return {
         isLiked : props.isLiked
      }
   }

    render() {
        let leftSide = this.props.side === 'left' ? 100 : 0;
        let rightSide = this.props.side === 'right' ? 100 : 0;
        let backgroundColorStyleCustom = this.state.isLiked ? Styles.heartRed : Styles.heartGray;

        return (
            <View style={[
                Styles.heart,
                {
                    borderBottomLeftRadius: leftSide,
                    borderBottomRightRadius: rightSide
                },
                backgroundColorStyleCustom
            ]}>
            </View>
        )
    }
}
