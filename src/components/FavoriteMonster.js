 import React, { Component, useState } from 'react';
 import{Text} from 'react-native'
 import Ionicons from 'react-native-vector-icons/Ionicons';

 class FavoriteMonster extends Component {
    constructor(props) {

        super(props);
        
       
        const name = this.props.item;
        const i = global.killObject.findIndex(_element => _element.name === name);
        let calcCount=0
        if (i > -1) {calcCount = global.killObject[i].newCount}
        this.state = { isFavorite:false,
            count: calcCount
        };
    }
    referrer = () => {
        console.log('like referral')
        this.props.onPressItem();
      };
    changeCount = () => {
        const newCount = this.state.count + 1
        this.setState({ count:newCount});
        const monsterName=this.props.item
        const killInfo= {name:monsterName, newCount}
        this.upsert(global.killObject, killInfo)
       // global.killObject.push(killInfo)
        this.referrer();
     };
     upsert(array, element) { // (1)
        const i = array.findIndex(_element => _element.name === element.name);
        if (i > -1) {
            array[i] = element; 
            console.log('updated')
        }
        else {
            array.push(element);
            console.log('inserted')
        }
      }
     
    render(){
        const { isFavorite, count } = this.state;
        const 
            name
          = this.props.item;
          
        return(
            <><Ionicons onPress={this.changeCount}

                item={name} name={'skull'} size={25} /><Text>{count}</Text></>
        )
    }


 };
  
 export default FavoriteMonster;
