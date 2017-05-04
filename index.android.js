import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';


import store from 'react-native-simple-store';
store.get("IS_LIKED")
   .then(isLiked => console.log("Store got", isLiked));


AppRegistry.registerComponent('premierProjet', () => App);
