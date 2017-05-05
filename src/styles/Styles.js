import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get("window");

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9feea7'
     },
     containerCenter: {
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
    heartContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    heart: {
        height: 75,
        width: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

   heartRed:{
      backgroundColor:'#ff007a'
   },

   heartGray:{
      backgroundColor:'#a4a4a4'
   },

   heartLeft: {
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 0,
        backgroundColor: '#72c7f6',
        width: 100,
        height: 30
    },

    heartRigth: {
        borderBottomRightRadius: 100,
        borderBottomRightRadius: 0
    },

    heartCaption : {
      backgroundColor : 'rgba(0, 255, 0, 0)',
   },

   miniHeartFloat : {
      width: 20,
      height: 20,

   },

   overlay : {
      backgroundColor : 'rgba(0, 0, 0, 0)',
      position : 'absolute',
      left : 0,
      right : 0,
      top : 0,
      bottom : 0,
   },

   centerAbsolute : {
      alignItems : "center",
      justifyContent : "center"
   },



   textCentered : {
      textAlign: "center"
   },

   zoomButtons : {
      borderRadius: 25,
      width: 50,
      height: 50,
      backgroundColor: '#ffa800'
   },

   zoomButtonsFont: {
      fontSize: 30,
      color: '#fff'
   }

});
