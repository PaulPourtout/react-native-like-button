import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import store from 'react-native-simple-store';

import Styles from './styles/Styles';
import Heart from './Heart';
import Pulser from './Pulser';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         captionShow: false
      }
   }

   onLiked() {
      this.setState({
         captionShow: !this.state.captionShow
      });

      store.save("IS_LIKED", true);
   }

   onDisliked() {
      this.setState({
         captionShow: !this.state.captionShow
      });

      store.delete("IS_LIKED");
   }


    render() {
        return (
            <View style={Styles.container}>
               <Pulser
                  ref="pulser"
                  style={{backgroundColor: 'transparent'}}>
                  <Heart
                     onLiked={() => this.onLiked()}
                     onDisliked={() => this.onDisliked()}
                     nbLikes={100}
                     incrementValue={10}
                     likedHeartImg={require('./the_heart.png')}
                     unlikedHeartImg={require('./empty-heart.svg')}
                  >
                     { this.renderCaption() }
                  </Heart>
               </Pulser>

               {
                  /*
                  - dezoom    |    + zoom
                  onPress
                  this.refs.pulser.pulsePlus()
                  */
               }
               <View style={Styles.heartContainer}>
                  <TouchableOpacity
                     style={[Styles.zoomButtons, Styles.centerAbsolute]}
                     onPress={() => {this.refs.pulser.zoomIn()}}
                  >
                     <Text style={Styles.zoomButtonsFont}>+</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style={[Styles.zoomButtons, Styles.centerAbsolute]}
                     onPress={() => {this.refs.pulser.zoomIn()}}
                  >
                     <Text style={Styles.zoomButtonsFont}>Inf</Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                     style={[Styles.zoomButtons, Styles.centerAbsolute]}
                     onPress={() => {this.refs.pulser.zoomOut()}}
                  >
                     <Text style={Styles.zoomButtonsFont}>-</Text>
                  </TouchableOpacity>
               </View>

            </View>
        );
    }

    zoomIn() {

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
