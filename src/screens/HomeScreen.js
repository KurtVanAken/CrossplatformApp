import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import { Button, Tile } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { getData } from '../utils/BotwApi';
// Custom Hooks
import  colorHook  from '../utils/ColorHook';
import { Showable } from '../components/Showable';
import SearchButton from '../components/SearchButton'
import {monstername} from '../utils/Global'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: false,
          message: ''
        };
    
        this.onSearchPressedAll = this.onSearchPressedAll.bind(this);
      }
      onSearchPressedAll(){
        
        this.props.navigation.navigate('MonsterScreen');

      }
      
    render(){
       
        const colors = this.props.myHookValue;
        const {
            container,
            searchInput,
            imageStyle,
            flowHorizontal,
            rightContainer,
            imageStyleLogo
          } = styles;
        
        return(
          <ScrollView>

                <View style={[container,{backgroundColor: colors[0].background,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: windowHeight,
                    }]}>
                
                <Tile 
                ViewStyle={imageStyle}
          imageSrc={{
            uri:
              'https://www.pngplay.com/wp-content/uploads/11/The-Legend-Of-Zelda-Breath-Of-The-Wild-Logo-Transparent-PNG.png',
          }}
          width={windowWidth*0.9}
          height={windowWidth*0.85}></Tile>  
     
              <Image style={imageStyleLogo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_Legend_of_Zelda_-_Sheikah_Symbol.svg/1692px-The_Legend_of_Zelda_-_Sheikah_Symbol.svg.png'}}/>
                <SearchButton style={{
                           
                           borderRadius: 8,
                           marginTop:8,
                           width: windowWidth*0.5
                           }}
                           onPressed={this.onSearchPressedAll}>
                            <Showable>
                              <Text style={{fontSize:36}}>All Monsters</Text>
                              </Showable>
                            
                </SearchButton>
   


                  
                </View>
  
  </ScrollView>
        );
    }
}
export default colorHook(HomeScreen)

const styles = StyleSheet.create({
    container: {

      alignItems: 'center',
      flex: 1
    }, flowHorizontal: {
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
      }});