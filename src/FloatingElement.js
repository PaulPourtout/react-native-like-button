import React, { Component, PropTypes } from 'react';
import { StyleSheet,
         View,
         Animated,
         Image,
         Easing,
         TouchableOpacity,
         Text
      } from 'react-native';
import Styles from './styles/Styles';


export default class HeartFloat extends Component {
   constructor(props) {
      super(props);
      this.state = {
         heartPosition: new Animated.Value(0.01),
         heartScale: new Animated.Value(0.01),
      };
   }

   componentDidMount() {
      setTimeout(() => {
      this.heartFloatFn();
   }, 1000)
   }

   heartFloatFn() {
      const {heartPosition, heartScale} = this.state;

      Animated.sequence([
         Animated.parallel([
            Animated.timing(heartScale, {
               toValue: 1,
               duration: 500,
               easing: Easing.bounce
            }),
            Animated.timing(heartPosition, {
               toValue: -60,
               duration: 500,
               easing: Easing.easeOut
            }),
         ]),
         Animated.parallel([
            Animated.timing(heartScale, {
               toValue: 0.01,
               duration: 1000,
               easing: Easing.easeOut
            }),
            Animated.timing(heartPosition, {
               toValue: 0.01,
               duration: 1000,
               easing: Easing.easeOut
            }),
         ]),
      ]).start(() => this.heartFloatFn());
   }

   getHeartAnimationStyle() {
      return {
         transform: [
            {translateY: this.state.heartPosition},
            {scale: this.state.heartScale},
            {translateX: Math.floor(Math.random() * 100)},
            // {rotate: '90deg'}
         ]
      }
   }

   render() {
      const {heartScale} = this.state;
      const {children} = this.props;

      return (
            <Animated.View
               style={[{...this.props.style}, this.getHeartAnimationStyle() ]}
            >
                  { children }
            </Animated.View>
         )
      }
   }
