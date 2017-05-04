import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import store from 'react-native-simple-store';

import Styles from './styles/Styles';
import Heart from './Heart';
import Pulser from './Pulser';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         captionShow: false,
         count: this.props.nbLikes || 0
      }
   }

   handleLikeCount(increment) {
      this.setState({
         count: this.state.count + increment
      });
   }

   onLiked(increment) {
      this.setState({
         captionShow: !this.state.captionShow,
         count: this.state.count + increment
      });
      store.save("IS_LIKED", true);
   }

   onDisliked(increment) {
      this.setState({
         captionShow: !this.state.captionShow,
         count: this.state.count - increment
      });
      store.delete("IS_LIKED");
   }

    render() {
      const {count} = this.state;

        return (
            <View style={Styles.container}>
               <Pulser>
                  <Heart
                     onLiked={(increment) => this.onLiked(increment)}
                     onDisliked={(increment) => this.onDisliked(increment)}
                     incrementValue={10}
                     nbLikes={100}
                     likedHeartImg={require('./the_heart.png')}
                     unlikedHeartImg={require('./empty-heart.svg')}
                  />
               </Pulser>
               <Text style={Styles.textCentered}>
                  { this.formatCounter(count) }
               </Text>
               <Text style={Styles.textCentered}>
                  { this.renderCaption() }
               </Text>
            </View>
        );
    }

   formatCounter(count) {
      return `${count} likes`;
   }

    renderCaption() {
      const {captionShow} = this.state;

      const isCaptionShown = (!captionShow)
         ? 'Button is\nunclicked'
         : 'Button\nclicked';

      return(
         <Text style={{backgroundColor:"transparent"}}>{isCaptionShown}</Text>
      )
   }
}
