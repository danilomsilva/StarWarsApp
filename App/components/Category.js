import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Category = ({item}) => {
  const navigation = useNavigation();
  const capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1);

  const getImage = () => {
    switch (item) {
      case 'People':
        return require('../assets/images/people.png');
      case 'Planets':
        return require('../assets/images/planets.png');
      case 'films':
        return require('../assets/images/films.png');
      case 'species':
        return require('../assets/images/species.png');
      case 'vehicles':
        return require('../assets/images/vehicles.png');
      case 'starships':
        return require('../assets/images/starships.png');
      default:
        return require('../assets/images/people.png');
    }
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(capitalizedItem)}>
      <Image source={getImage()} style={styles.image} />
      <Text style={(styles.itemText, {fontFamily: 'Starjedi', color: '#000'})}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    textTransform: 'capitalize',
    fontSize: 29,
    marginLeft: 10,
  },
  image: {
    width: 55,
    height: 50,
    marginRight: 10,
  },
});
