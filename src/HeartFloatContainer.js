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

   generateHearts = () => {
     console.log('coucou');
   };

   render() {
      const {heartsNumb} = this.props;

      return (
            <View>
                <FloatingElement
                   elementNumb={0}
                >
                   <Image
                      style={Styles.miniHeartFloat}
                      source={require('./the_heart.png')}
                   />
                </FloatingElement>
                <FloatingElement
                   elementNumb={90}
                >
                   <Image
                      style={Styles.miniHeartFloat}
                      source={require('./the_heart.png')}
                   />
                </FloatingElement>
                <FloatingElement
                   elementNumb={180}
                >
                   <Image
                      style={Styles.miniHeartFloat}
                      source={require('./the_heart.png')}
                   />
                </FloatingElement>
                <FloatingElement
                   elementNumb={270}
                >
                   <Image
                      style={Styles.miniHeartFloat}
                      source={require('./the_heart.png')}
                   />
                </FloatingElement>
            </View>
         )
      }
   }
