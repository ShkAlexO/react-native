import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../constants/constants';

const { WHITE_COLOR,  BLACK_COLOR, GRAY_COLOR, RED_COLOR, DARK_RED_COLOR } = Colors;

function Card({pizzaData}) {
  const { title, description, isNew, image, priceNew, oldPrice } = pizzaData;

  return (
    <View style={[styles.card, styles.innerBox]}>
      <View style={[styles.innerPhoto, styles.innerBox]}>
          {isNew && <View style={styles.badge}><Text style={styles.badgeText}>NEW</Text></View>}
          <Image
            style={styles.productPhoto}
            source={image}
            resizeMode="contain"
          />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text> 
        <View style={styles.innerPrice}>
          <Text style={[styles.newPrice, styles.price]}>{priceNew}$</Text>
          <Text style={[styles.oldPrice, styles.price]}>{oldPrice}$</Text>
        </View>
        <View style={styles.innerDescription} >
          <Text style={styles.description} numberOfLines={1}>{description}</Text> 
        </View>
      </View>

      <View style={styles.actions}>
        <Image
            style={styles.wishIcon}
            source={require('../../assets/wishIcon.png')}
            resizeMode="contain"
        />
        <View style={styles.innerCart}>
          <Text style={styles.cartText}>Buy</Text>
          <Image
            style={styles.cartIcon}
            source={require('../../assets/cart.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  innerBox: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GRAY_COLOR,
  },
  card: {
    height: 160,
    flexDirection: 'row',
    width: '100%',
    columnGap: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: WHITE_COLOR,
    marginVertical: 10,
    shadowColor:  BLACK_COLOR,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5
  },
  innerPhoto: {
    width: 110,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  productPhoto: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    right: -10,
    top: -10,
    alignSelf: 'flex-end',
    backgroundColor: RED_COLOR,
    borderWidth: 1,
    borderColor: DARK_RED_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 30, 
  },
  badgeText: {
    fontSize: 11,
    color: WHITE_COLOR,
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 22,
    lineHeight: 22,
    marginBottom: 15
  },
  innerPrice: {
    flexDirection: 'row', 
    alignItems: 'center',
    columnGap: 25,
    marginBottom: 15
  },
  price: {
    fontSize: 22,
    lineHeight: 22,
  },
  newPrice: {
    fontWeight: '600'
  },
  oldPrice: { 
    textDecorationLine: 'line-through'
  },
  innerDescription: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  description: {
    fontSize: 16
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  wishIcon: {
    width: 30,
    height: 30
  },
  innerCart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    columnGap: 4 
  },
  cartText: {
    fontSize: 16,
    fontWeight: '600'
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginBottom: -5
  }
});

export default Card