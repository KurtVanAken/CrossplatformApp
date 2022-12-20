import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, FlatList, TextInput} from 'react-native'
import { Button } from '@rneui/themed';
import {Ionicons} from 'react-native-vector-icons'
import Separator from '../components/Separator';
import ListItem from '../components/ListItem';


// Custom Hooks
import  colorHook  from '../utils/ColorHook';
import { Showable } from '../components/Showable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class EquipmentScreen extends Component {
    constructor(props) {

        super(props);
        this.state = { items: [], 
            itemsFiltered: [],
          DataisLoaded: false, 
          filter:'',
          setKillCount:false
        };

    }
    componentDidMount() {
        fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
          .then(res => res.json())
          .then(monsters => {
            this.setState({items: monsters, itemsFiltered: monsters.data,
              DataisLoaded: true});
          }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
              throw error;
            });
         
        
      }
      

 handleTextChange = (e) => {
   this.setState({filter:e});
}
      setFilter(e){
        console.log(e)
        //this.setState({filter: e})      
        const newItems = (e==='Attack')?this.state.items.data.filter(data => 
            data.attack>0):(e==='Defense')?this.state.items.data.filter(data => 
                data.defense>0):this.state.items.data.filter(data => 
                    data.defense===null ||data.attack===null)
        this.setState({itemsFiltered: newItems});

      }r
      onPressItem = item => {
        console.log(`Pressed equipment: ${item}`);
        const equipment = item;
        
        this.props.navigation.navigate('DetailEquipment', { equipment });
      };
  separator = () => <Separator />;
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => (
    <ListItem item={item} kill={this.state.setKillCount}onPressItem={() => this.onPressItem(item)} />
    
  );

  _listEmptyComponent = () => {
    return (
        <View style={{padding:20}}>
            <Text>👹 There are no pieces of equipment of that type..., Could you imagine that? Why don't you try something else? </Text>
        </View>
    )
}
    render(){

        const colors = this.props.myHookValue;
    
        const { DataisLoaded, items, itemsFiltered, filter } = this.state;
   
    if (!DataisLoaded) return <View style={{backgroundColor: colors[0].background,
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight,
        }}><Text>👹 Please wait some time... All this stuff is heavy you know... </Text></View>  ;
        return(
   
            <View style={{
                backgroundColor: colors[0].background,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
            }}>
       
                
          
                <FlatList style={{flex: 2, width: windowWidth-20, marginTop:10}}
                        ListHeaderComponent={
                        
                        
                        <><View style={{                          
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,   
                            }}>
                                <Showable>
                                    <Text style={{fontSize:36}}>Search for a specific type of equipment</Text>
                                </Showable>
                        </View>
                        <TouchableOpacity>
                            <View style={{flex:1, justifyContent:'space-between', flexDirection:'row'}}>
                            <Button style={{backgroundColor:colors[0].Button}}value={'Attack'} onPress={event => this.setFilter('Attack')}><Ionicons name='eyedrop-outline' color={colors[0].ButtonText} size={25} />Attack</Button>
                            <Button style={{marginTop:5,borderColor:'white', borderWidth:1, borderStyle:'solid'}}value={'Defense'} onPress={event => this.setFilter('Defense')}><Ionicons name='aperture-outline' color={colors[0].ButtonText} size={25} />Defense</Button>
                            <Button style={{borderColor:'white', borderWidth:1, borderStyle:'solid'}}value={'Special'} onPress={event => this.setFilter('Special')}><Ionicons name='ribbon-outline' color={colors[0].ButtonText} size={25} />Special</Button>
                            </View>
                        </TouchableOpacity>
                        </> }
                        data={itemsFiltered.sort(function(a, b){
                            if(a.name < b.name) { return -1; }
                            if(a.name > b.name) { return 1; }
                            return 0;
                        })}
                        ListEmptyComponent={this._listEmptyComponent}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.separator} />
                </View>
          
          
        );
    }
}
export default colorHook(EquipmentScreen)

