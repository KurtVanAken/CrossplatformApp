import React, { Component }  from 'react';
import { View, Text, ScrollView } from 'react-native';
import { color, Tile } from '@rneui/base';
import { FlatList, ListItem } from 'react-native-web';

import Separator from '../components/Separator';
import colorHook from '../utils/ColorHook';
import { Showable } from '../components/Showable';





class Detail extends Component {

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
  render() {
    // get user detail information from navigation state instead of hardcoded object
    const { image, name, description, drops, common_locations, defense} =  this.props.route.params.monster
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
        <Showable style={{marginTop: 10}}><Text style={{paddingTop: 10, fontSize:30}}>Drops</Text></Showable>
              {drops ===null ?  this._listEmptyComponent('drops'):drops.map((e)=>(<Text style={{paddingLeft:20}}key={e}>▲ {e}</Text>))}
       
        <Separator></Separator>
        <Showable style={{marginTop: 50}}><Text style={{paddingTop: 10, fontSize:30}}>Common Locations</Text></Showable>
              {common_locations===null? this._listEmptyComponent('common locations'): common_locations.map((e)=>(<Text style={{paddingLeft:20}}key={e}>▲ {e}</Text>))}
       
              </View>
      </ScrollView>
    );
  }
}

export default colorHook(Detail);