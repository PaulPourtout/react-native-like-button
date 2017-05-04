import React, { Component, PropTypes } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import Styles from './styles/Styles';
import HeartSide from './HeartSide';

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
         liked: props.isLiked || false,
         count: props.nbLikes || 0
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
         ? this.handleLike(-incrementValue, onDisliked)
         : this.handleLike(incrementValue, onLiked);
   }

   handleLike(value : number = 0, onComplete ?: () => {}) {
      const {liked, count} = this.state;

      this.setState({
         liked: !liked,
         count: (count + value)
      });

      onComplete && onComplete();
   }

   formatCounter(count : number) {
      return `${count} likes`;
   }

   isRequiredImgSource(source) {
      console.log(typeof source);
      return typeof source === 'string' ? {uri: source} : source;
   }


   render() {
      const {liked, count} = this.state;
      const {unlikedHeartImg, likedHeartImg, children} = this.props;

      return (
         <View style={ { backgroundColor : "transparent" } }>
            <TouchableOpacity
               onPress={() => this.toggleLike()}
            >
               { this.heart() }
            </TouchableOpacity>
            <Text>{this.formatCounter(count)}</Text>

            {children}

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
