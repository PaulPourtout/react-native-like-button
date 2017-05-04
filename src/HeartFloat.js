import React, { Component, PropTypes } from 'react';
import { StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';


export default class HeartFloat extends Component {
   constructor(props) {
      super(props);
      this.state = {
         zoomAnim: new Animated.Value(1)
      };
   }

   componentDidMount() {
         // this.infPulse();
   }

   infPulse() {
      console.log('coucou');
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
         <TouchableOpacity
            style={{backgroundColor: 'green'}}
            onPress={() => {console.log('coucou')}}
            >
            <Animated.View
               style={{
                     ...this.props.style,
                     transform: [{scale: this.state.zoomAnim}]
               }}
            >
                  {children}
            </Animated.View>
         </TouchableOpacity>
      )
   }
}
