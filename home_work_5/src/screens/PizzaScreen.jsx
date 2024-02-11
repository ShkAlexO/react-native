import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { Colors } from '../constants/constants';
const { WHITE_COLOR, RED_COLOR, DARK_RED_COLOR } = Colors;

function PizzaScreen({ route }) {
  const { pizzaData } = route.params;
  const { isNew, image, title, description, priceNew, oldPrice } = pizzaData;

  return (
    <View style={styles.container}>
      {isNew && <View style={styles.badge}><Text style={styles.badgeText}>NEW</Text></View>}
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{priceNew}$</Text>
      <Text style={styles.oldPrice}>{oldPrice}$</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  badge: {
    backgroundColor: RED_COLOR,
    borderWidth: 1,
    borderColor: DARK_RED_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 30, 
    marginBottom: 30
  },
  badgeText: {
    fontSize: 11,
    color: WHITE_COLOR,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  oldPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through'
  },
});

export default PizzaScreen;
