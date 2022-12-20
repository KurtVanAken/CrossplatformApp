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

class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: global.MyVar,
    };

    this.onSearchPressed = this.onSearchPressed.bind(this);

  
  }
onSearchPressed=()=>{
  global.MyVar=this.state.searchString
  this.props.navigation.navigate('HomeScreen')
}

  

    render(){
     
        const colors = this.props.myHookValue;
        const {
            container,
            searchInput,
          } = styles;
        
        return(
          <ScrollView>
                <View style={[container, {
            backgroundColor: colors[0].background,
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight,
          }]}> 
            <Showable ><Text style={{ fontSize: 50 }}>Settings</Text></Showable>
            <Separator></Separator>
            <Showable ><Text style={{ fontSize: 25 }}>Toggle Light/Dark Theme</Text></Showable>
            <ToggleSwitch></ToggleSwitch>
            <Text>Current: {colors[2]?'Dark theme':'Light theme'}</Text>
            <Ionicons name={colors[2]?'moon':'sunny'} color={colors[0].ButtonText} size={25} />
            <Separator></Separator>
            <Showable style={{padding:50,margingTop:50,}} ><Text style={{ fontSize: 25 }}>Set Favorite Monster</Text></Showable>
        <TextInput
              style={[searchInput, { marginTop:8, marginBottom:8,color: colors.buttonText, borderColor: colors[0].textInputBorderColor }]}
              value={this.state.searchString}
              onChangeText={text => this.setState({ searchString: text })} /><SearchButton style={{
                borderRadius: 8,
                marginTop: 8,
                width: windowWidth * 0.5
              }}
                onPressed={this.onSearchPressed}>
              <Showable>
                <Ionicons name='star' color={colors[0].ButtonText} size={25} />
                <Text style={{ fontSize: 25 }}> Set as Favorite </Text>
                <Ionicons name='star' color={colors[0].ButtonText} size={25} />
              </Showable>
            </SearchButton>
            <Separator></Separator>
            
            
         
       
                </View>
       
                </ScrollView>
        );
    }
  }

export default colorHook(SettingsScreen)

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