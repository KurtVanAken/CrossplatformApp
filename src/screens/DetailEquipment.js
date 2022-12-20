import React, { Component }  from 'react';
import { View, Text, ScrollView } from 'react-native';
import { color, Tile, Button } from '@rneui/base';
import { FlatList, ListItem } from 'react-native-web';

import Separator from '../components/Separator';
import colorHook from '../utils/ColorHook';
import { Showable } from '../components/Showable';





class DetailEquipment extends Component {

  separator = () => <Separator />;
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => (
    <ListItem item={item}  />
  );

  _listEmptyComponent = (text) => {
    return (
        <View>
            <Text>👹There are no {text}  </Text>
        </View>
    )
}
equipItem=(item)=>{
  item.attack>0? global.Weapon=this.props.route.params.equipment : (item.attack===null?global.Special=this.props.route.params.equipment:global.Shield=this.props.route.params.equipment)
this.props.navigation.navigate('MyEquipmentScreen');
}
  render() {
    // get user detail information from navigation state instead of hardcoded object
   
    const { image, name, description, attack, defense} =  this.props.route.params.equipment
    const colors = this.props.myHookValue;


    return (
      <ScrollView style={{backgroundColor:colors[0].background}}>
        <Tile
          imageSrc={{ uri: image }}
          
          featured
          title={name}
          titleStyle={{ fontSize: 36, backgroundColor:colors[0].background, width:'100%'}}
         />
         <View style={{flex:1, marginLeft:10,marginRight:20, marginBottom:20}}> 
         <Separator></Separator>
          <Showable style={{marginTop: 10}}>  
            <Text style={{paddingTop: 10, fontSize:30}}>Description</Text>
          </Showable>
        <Text style={{paddingLeft:20,fontSize:15}}>{description}</Text>
        <Separator></Separator>
        <Showable style={{marginTop: 10}}><Text style={{paddingTop: 10, fontSize:30}}>Attack</Text></Showable>

        <Text style={{paddingLeft:20,fontSize:15}}>{attack===null?<Text>nothing to show here - must be an Epic Item...</Text>:attack}</Text>
          
       
        <Separator></Separator>
        <Showable style={{marginTop: 50}}><Text style={{paddingTop: 10, fontSize:30}}>Defense</Text></Showable>
        <Text style={{paddingLeft:20,fontSize:15}}>{defense===null?<Text>nothing to show here - must be an Epic Item...</Text>:defense}</Text>
        <Separator></Separator>
        <Button value={this.props.route.params.equipment} onPress={event =>this.equipItem(this.props.route.params.equipment)}>Equip</Button>
    
              </View>
      </ScrollView>
    );
  }
}

export default colorHook(DetailEquipment);