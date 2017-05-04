import React, { Component, PropTypes } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';


export default class Pulser extends Component {
   constructor(props) {
      super(props);
      this.state = {
         zoomAnim: new Animated.Value(1)
      };
   }

   componentDidMount() {
      this.infPulse();
   }

/*
   zoomIn() {
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
   */

   infPulse() {
      const {zoomAnim} = this.state;

      const nextPulseValue = () => zoomAnim._value === 1 ? 1.1 : 1;

      Animated.timing(
         this.state.zoomAnim,
         {
            toValue: nextPulseValue(),
            duration: 500,
            easing: Easing.ease
         }
      ).start(() => this.infPulse());
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
