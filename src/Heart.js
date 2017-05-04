import React, { Component, PropTypes } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Styles from './styles/Styles';
import HeartSide from './HeartSide';
import Pulser from './Pulser';

// interface HeartProps {
//    onLiked : () => {},
//    onDisliked : () => {},
//    nbLikes : number,
//    incrementValue: number,
//    likedHeartImg : string | number
//    unlikedHeartImg : string | number
// }
// interface HeartState {
//    liked : boolean,
//    count : number,
// }
export default class Heart extends Component<HeartProps, HeartState> {
   constructor(props) {
      super(props);

      this.state = {
         liked: this.props.isLiked || false
      };
   }

   componentWillMount() {
      // console.log('will mount');
   }

   componentDidMount() {
      // console.log('did mount');
      // Fetch server
   }
   // componentWillReceiveProps(nextProps) {
   //    this.setState(this.getStateByProps(nextProps));
   // }

   componentWillUnmount() {
      // console.log('will unmount');
   }

   toggleLike() {
      const {liked} = this.state;
      const {onLiked, onDisliked, incrementValue} = this.props;

      liked
         ? this.handleLike(-incrementValue, onDisliked(incrementValue))
         : this.handleLike(incrementValue, onLiked(incrementValue));

      // this.props.handleLikeCount(incrementValue);
   }

   handleLike(value : number = 0, onComplete ?: () => {}) {
      const {liked, count} = this.state;

      this.setState({
         liked: !liked
      });

      onComplete && onComplete();
   }

   isRequiredImgSource(source) {
      return typeof source === 'string' ? {uri: source} : source;
   }


   render() {
      const {liked, count} = this.state;
      const {unlikedHeartImg, likedHeartImg} = this.props;

      return (
         <View style={ { backgroundColor : "transparent" } }>
               <TouchableOpacity
                  onPress={() => this.toggleLike()}
               >
                     { this.heart() }
               </TouchableOpacity>
         </View>
      )
   }

   heart() {
      const {liked} = this.state;
      const {likedHeartImg, unlikedHeartImg} = this.props;

      return (
      liked
         ? likedHeartImg
            ? <Image
                source={this.isRequiredImgSource(likedHeartImg)}
                style={{width: 80, height: 80}}
              />
            : this.renderFullHeart()
         : unlikedHeartImg
            ? <Image
                source={this.isRequiredImgSource(unlikedHeartImg)}
                style={{width: 80, height: 80}}
              />
            : this.renderFullHeart()
      )
   }

   renderFullHeart() {
      return (
         <View style={Styles.heartContainer}>
            { this.renderHeartSide('left') }
            { this.renderHeartSide('right') }
         </View>
      )
   }

   renderHeartSide(side) {
      const { liked } = this.state;

      return (
         <HeartSide
            key={side}
            isLiked={liked}
            side={side}
         />
      )
   }
}
