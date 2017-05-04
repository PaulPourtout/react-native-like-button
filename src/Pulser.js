import React, { Component, PropTypes } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

import Styles from './styles/Styles';
import HeartSide from './HeartSide';

export default class Pulser extends Component {
   constructor(props) {
      super(props);
      this.state = {
         zoomAnim: new Animated.Value(1)
      };
   }

   componentDidMount() {
      // this.fadeIn();
   }

   zoomIn() {
      console.log(this.state.zoomAnim);
      Animated.timing(
         this.state.zoomAnim,
         {
            toValue: 1.5,
            duration: 1000,
            delay: 0,
            easing: Easing.bounce
         }
      ).start();
   }

   zoomOut() {
      console.log(this.state.zoomAnim);
      Animated.timing(
         this.state.zoomAnim,
         {
            toValue: 1,
            duration: 1000,
            delay: 0,
            easing: Easing.elastic(4)
         }
      ).start();
   }

   infPulse() {
      this.setState({
         zoomAnim: new Animated.Value(1)
      });
      Animated.timing(
         this.state.zoomAnim,
         {
            toValue: 1 ? 0 : 1,
            duration: 1000,
            easing: Easing.elastic(4)
         }
      )
   }

   render() {
      const {children} = this.props;

      return (
         <Animated.View
            style={{
                  ...this.props.style,
                  transform: [{scale: this.state.zoomAnim}]
            }}
         >
            {children}
         </Animated.View>
      )
   }
}
