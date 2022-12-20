/* const getUrlForSearchOnMonsterName = value => {

  if(value===''){
    value = 'moblin'
  }else{
    value=value.replaceAll(' ', '%20');
  }
  console.log(value)
  return `https://botw-compendium.herokuapp.com/api/v2/entry/${value}`;
};
 */
export const getData = async monster => {

  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${monster}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      //console.log(json);
      return json;
    });
};

export const getAllMonsters = async () => {
  const url = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
fetch(url)
      .then(res => res.json())
      .then(json => {  

        return json;
      });
};