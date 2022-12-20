import React from 'react';
import { ThemeProvider } from './src/styles/theme';
import { RootNavigator } from './src/config/AppNavigator';
global.MyVar = "Moblin";
global.killObject = []
global.Weapon={"attack":20,"category":"equipment","common_locations":["Hebra Mountains","Akkala Highlands"],"defense":0,"description":"This guardian spear's output has been boosted to the maximum. The spearhead is designed for optimal stabbing, capable of easily piercing most armor.","id":319,"image":"https://botw-compendium.herokuapp.com/api/v2/entry/guardian_spear++/image","name":"guardian spear++"}
global.Shield={"attack":0,"category":"equipment","common_locations":["Tabantha Frontier","Gerudo Desert"],"defense":22,"description":"This Lizal shield has been strengthened by adding a different type of metal to the mix. The edge is lined with spikes, so handle with care.","id":378,"image":"https://botw-compendium.herokuapp.com/api/v2/entry/reinforced_lizal_shield/image","name":"reinforced lizal shield"}
global.Special={"attack":null,"category":"equipment","common_locations":["Hyrule Field"],"defense":null,"description":"An arrow created using ancient technology. To be struck with one is to be consigned to oblivion in an instant. It deals devastating damage\u2014even against Guardians.","id":353,"image":"https://botw-compendium.herokuapp.com/api/v2/entry/ancient_arrow/image","name":"ancient arrow"}
export default function App() {

  return (

    <ThemeProvider>
      
      <RootNavigator/>
      
    </ThemeProvider>

  );
}


