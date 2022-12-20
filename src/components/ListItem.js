import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Dimensions} from 'react-native';
import FavoriteMonster from './FavoriteMonster';

import { Showable } from './Showable';
import colorHook from '../utils/ColorHook';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ListItem extends Component {
  constructor(props) {

    super(props);
    this.state = { selectedColor:'',chosenMonster:global.MyVar
    };

}



  onPress = () => {
    this.props.onPressItem();
  };
  onPressItem = () => {
    console.log('got the message')
    const colors = this.props.myHookValue;

    this.setState({selectedColor: colors[0].favorite})
   
  };
  render() {
    const {
       name, image, id
    } = this.props.item;

    const 
      kill
    = this.props.kill;
   
    const { selectedColor, chosenMonster } = this.state;
    
    const { rowContainer, thumb, textContainer,Fonts } = styles;
    //console.log(this.props.item)
    return (
      
      // <TouchableHighlight onPress={this.onPress} style={{backgroundColor: selectedColor ===''?'transparent':selectedColor}}>
      <TouchableHighlight onPress={this.onPress} style={{backgroundColor: chosenMonster.toLowerCase() ===name?'red': 'transparent'}}> 
        <View style={rowContainer}>
        <Image style={thumb} source={{ uri: image }} />
        <View>
            
              <Text style={textContainer}><Showable style={Fonts}>{name}</Showable>
              
            </Text>
            {kill?<FavoriteMonster item={name} onPressItem={() => this.onPressItem()} ></FavoriteMonster>:<Text></Text>}
            </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  thumb: {
    width: windowWidth/3,
    height:windowWidth/3,
    marginRight: 1
  },
  textContainer: {
    paddingLeft:4,
    width: windowWidth/2
    
  },Fonts:{
    fontSize: 2
  }

});

export default colorHook(ListItem);