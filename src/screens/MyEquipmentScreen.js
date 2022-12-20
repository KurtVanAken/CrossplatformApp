import React, { Component } from 'react';
import { ScrollView,TextInput, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

import { Showable } from '../components/Showable';
import ToggleSwitch from '../components/ToggleSwitch';
import SearchButton from '../components/SearchButton'
import {Ionicons} from 'react-native-vector-icons'
// Custom Hooks
import  colorHook  from '../utils/ColorHook';
import Separator from '../components/Separator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MyEquipmentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weapon:global.Weapon,
      shield:global.Shield,
      special:global.Special
    };

 
    this.goToDetail = this.goToDetail.bind(this);
  
  }

goToDetail=(element)=>{
  console.log(element)
  if(element==='s'){
    const equipment=global.Special
    this.props.navigation.navigate('DetailEquipment',{ equipment })
  }else if(element==='d'){
    const equipment=global.Shield
    this.props.navigation.navigate('DetailEquipment',{ equipment })
  }else{
    const equipment=global.Weapon
    this.props.navigation.navigate('DetailEquipment',{ equipment })
  }
  
}
    render(){
     
        const colors = this.props.myHookValue;
        const {
            container,
            thumb,
         
          } = styles;
        
        return(
          <ScrollView>
                <View style={[container, {
            backgroundColor: colors[0].background,
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight,
          }]}> 
            <Showable ><Text style={{ fontSize: 50 }}>My Equipment</Text></Showable>
            <Separator></Separator>
            <Showable ><Text style={{ fontSize: 25, }}>Equipped</Text></Showable>
            <View style={{flex:1,flexDirection:"row",marginTop:10,marginLeft:windowWidth*0.009}}>
                <View style={{flex:1,alignItems: 'center'}}>
                <Separator></Separator>
                <Showable><Text>Weapon</Text>  </Showable>
                <TouchableOpacity value='w' onPress={event=>this.goToDetail('w')}> 
            <Image style={thumb} source={{uri: this.state.weapon.image}}></Image>
        </TouchableOpacity>
            <Separator></Separator>
            </View>
            <View style={{flex:1,alignItems: 'center'}}>
            <Separator></Separator>
            <Showable><Text>Defense</Text>  </Showable>
            <TouchableOpacity value='d' onPress={event=>this.goToDetail('d')}> 
            <Image style={thumb} source={{uri: this.state.shield.image}}></Image>
            </TouchableOpacity>
           
            <Separator></Separator>
            </View>
            <View style={{flex:1, alignItems: 'center',}}>
            <Separator></Separator>
            <Showable><Text>Special</Text>  </Showable>
            <TouchableOpacity value='s' onPress={event=>this.goToDetail('s')}>
              
            <Image style={thumb} source={{uri: this.state.special.image}}></Image>
            </TouchableOpacity>
          
            <Separator></Separator>
            </View>
            
          </View>
       
                </View>
       
                </ScrollView>
        );
    }
}
export default colorHook(MyEquipmentScreen)

const styles = StyleSheet.create({
    container: {
      paddingTop: 65,
      alignItems: 'center',
      flex: 1
    }, flowHorizontal: {
        flex:1,
        flexDirection: 'row'
      },
      leftContainer: {
        flex: 4
      },
      rightContainer: {
        flex: 1
      },
      searchInput: {
          height: 36,
          padding: 4,
          width:windowWidth*0.5,
          marginRight: 5,
          fontSize:15,
          borderWidth: 1,
          borderRadius: 8
        }
        ,
        imageStyle:{
          height:windowHeight,
          marginLeft:windowWidth*0.05,
          marginRight:windowWidth*0.05,
          paddingLeft:windowWidth*0.05
        },
        imageStyleLogo:{
          width: 50
        
      }
      ,
      thumb: {
        width: windowWidth/4,
        height:windowWidth/4,
        marginRight: 1
      }});