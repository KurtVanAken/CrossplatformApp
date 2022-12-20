import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, FlatList, TextInput} from 'react-native'

import Separator from '../components/Separator';
import ListItem from '../components/ListItem';


// Custom Hooks
import  colorHook  from '../utils/ColorHook';
import { Showable } from '../components/Showable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class SearchList extends Component {
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
        fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
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
        
        //this.setState({filter: e})      
        const newItems = this.state.items.data.filter(data => 
            data.name.includes(e))
        this.setState({itemsFiltered: newItems});

      }r
      onPressItem = item => {
        console.log(`Pressed monster: ${item}`);
        const monster = item;
        
        this.props.navigation.navigate('Detail', { monster });
      };
  separator = () => <Separator />;
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => (
    <ListItem item={item} kill={this.state.setKillCount}onPressItem={() => this.onPressItem(item)} />
    
  );

  _listEmptyComponent = () => {
    return (
        <View style={{padding:20}}>
            <Text>👹 There are no monsters with that name..., Could you imagine that? Why don't you try something else? </Text>
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
        }}><Text>👹 Please wait some time... Monsters are coming </Text></View>  ;
        return(
   
            <View style={{
                backgroundColor: colors[0].background,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
            }}>
       
                
          
                <FlatList style={{flex: 2, width: windowWidth}}
                        ListHeaderComponent={<><View style={{
                           
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                        }}><Showable><Text style={{fontSize:36}}>Search for a specific monster</Text></Showable></View><TouchableOpacity>
                            <TextInput style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10, borderColor: 'white'
                            }} placeholder='enter monster' value={this.state.filter}
                                onChangeText={text => this.setFilter(text.toLowerCase())}
                                onChange={event => this.handleTextChange(event.target.value)} />
                        </TouchableOpacity></> }
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
export default colorHook(SearchList)

