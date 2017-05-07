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
      const {elementNumb} = this.props;

      Animated.sequence([
         Animated.parallel([
            Animated.timing(heartScale, {
               toValue: 1,
               duration: 500,
               easing: Easing.easeOut
            }),
            Animated.timing(heartPosition, {
               toValue: -20 * elementNumb,
               easing: Easing.easeOut
            }),
         ]),
         Animated.parallel([
            Animated.timing(heartScale, {
               toValue: 0.01,
               duration: 1200,
               easing: Easing.easeOut
            }),
            Animated.timing(heartPosition, {
               toValue: 0.01,
               duration: 1200,
               easing: Easing.easeOut
            }),
         ]),
      ]).start(() => this.heartFloatFn());
   }

   getCircle() {
     const {elementNumb} = this.props;


   }

   getRandomValue() {
      const {elementNumb} = this.props;

      const plusOrMinus = Math.round(Math.random()) * 2 - 1;
      const randomNumber = elementNumb * 20 * plusOrMinus;

      const newRandom = -50 * Math.random();
      console.log(newRandom);
      return randomNumber;
   }

   getHeartAnimationStyle() {
      const {elementNumb} = this.props;
      console.log(20*Math.sin(90));
      return {
         transform: [
            // {translateY: this.state.heartPosition},
            // {scale: this.state.heartScale},
            // {translateX: this.getRandomValue()},
            {scale: 1},
            {translateX: 50 * Math.cos(elementNumb)},
            {translateY: 50 * Math.sin(elementNumb)},

         ]
      }
   }

   render() {
      const {heartScale} = this.state;
      const {children} = this.props;

      return (
            <Animated.View
               style={[{...this.props.style, position: 'absolute'}, this.getHeartAnimationStyle() ]}
            >
                  { children }
            </Animated.View>
         )
      }
   }
