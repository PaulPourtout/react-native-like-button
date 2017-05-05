import React, { Component, PropTypes } from 'react';
import { StyleSheet,
         View,
         Animated,
         Image,
         Easing,
         TouchableOpacity,
         Text
      } from 'react-native';
import FloatingElement from './FloatingElement';
import Styles from './styles/Styles';


export default class HeartFloat extends Component {
   constructor(props) {
      super(props);
      this.state = {

      };
   }

   componentDidMount() {

   }

   render() {
      const {children} = this.props;

      return (
            <View>
               <FloatingElement >
                  <Image
                     style={Styles.miniHeartFloat}
                     source={require('./the_heart.png')}
                  />
               </FloatingElement>
               <FloatingElement >
                  <Image
                     style={Styles.miniHeartFloat}
                     source={require('./the_heart.png')}
                  />
               </FloatingElement>
               <FloatingElement >
                  <Image
                     style={Styles.miniHeartFloat}
                     source={require('./the_heart.png')}
                  />
               </FloatingElement>
               <FloatingElement >
                  <Image
                     style={Styles.miniHeartFloat}
                     source={require('./the_heart.png')}
                  />
               </FloatingElement>
               <FloatingElement >
                  <Image
                     style={Styles.miniHeartFloat}
                     source={require('./the_heart.png')}
                  />
               </FloatingElement>
            </View>
         )
      }
   }
