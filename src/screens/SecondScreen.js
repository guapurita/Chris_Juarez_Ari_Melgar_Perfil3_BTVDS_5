import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteFoods = [
  {
    id: 1,
    name: 'Tacos',
    description: 'A Arisita le gustan los tacos',
    image: require('../img/tacos.png'),
  },
  {
    id: 2,
    name: 'Hamburguesas',
    description: 'A Ari tambien le gusta la biggest',
    image: require('../img/burguer.jpg'),
  },
  {
    id: 3,
    name: 'Pizza',
    description: 'A cri le gustan pizza',
    image: require('../img/pisa.jpg'),
  },
  {
    id: 4,
    name: 'Burro',
    description: 'Burro al pastor',
    image: require('../img/buro.jpg'),
  },
  {
    id: 5,
    name: 'Pasta',
    description: 'Me gusta la pasta',
    image: require('../img/pasta.jpg'),
  },
  {
    id: 6,
    name: 'Pollo',
    description: 'Me gusta el pollito',
    image: require('../img/pollo.jpg'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteFoods.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <Image source={food.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  foodContainer: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteFoodsScreen;
