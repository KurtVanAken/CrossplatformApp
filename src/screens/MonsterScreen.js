import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, FlatList, Button} from 'react-native'

import Separator from '../components/Separator';
import ListItem from '../components/ListItem';


// Custom Hooks
import  colorHook  from '../utils/ColorHook';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class SearchScreen extends Component {
    constructor(props) {

        super(props);
        this.state = { items: [], 
          DataisLoaded: false,
          setKillCount:true
        };
         
    }
    componentDidMount() {
        fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
          .then(res => res.json())
          .then(data => {
            this.setState({items: data,
              DataisLoaded: true});
          }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
              throw error;
            });
        
      }
      onPressItem = item => {
        console.log(`Pressed monster: ${item}`);
        const monster = item;
        
        this.props.navigation.navigate('Detail', { monster });
      };
  separator = () => <Separator />;
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => (
    <ListItem item={item} kill={this.state.setKillCount} onPressItem={() => this.onPressItem(item)} />
  );

  navigateToSearch =()=>{
    this.props.navigation.navigate('SearchListScreen');
  }
    render(){

        const colors = this.props.myHookValue;
    
        const { DataisLoaded, items } = this.state;
        console.log(global.killObject)
    if (!DataisLoaded) return <View style={{backgroundColor: colors[0].background,
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight,
        }}><Text>👹 Please wait some time... Monsters are coming  </Text></View>  ;
        return(
   
                <View style={{backgroundColor: colors[0].background,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex:1
                    }}>
                   
                    <FlatList
                        data={items.data.sort(function(a, b){
                          if(a.name < b.name) { return -1; }
                          if(a.name > b.name) { return 1; }
                          return 0;
                      })}
                        ListHeaderComponent={
                          <Button onPress={this.navigateToSearch}title='Would you like to search for a specific monster?'></Button>
                        }
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.separator}
                     />
                </View>
          
          
        );
    }
}
export default colorHook(SearchScreen)