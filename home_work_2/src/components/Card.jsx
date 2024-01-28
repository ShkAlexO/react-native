import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

function Card({mockItemData}) {
  const { title, description, isNew, image, priceNew, oldPrice } = mockItemData;

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
    borderColor: '#999999',
  },
  card: {
    height: 160,
    flexDirection: 'row',
    width: '100%',
    columnGap: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    shadowColor: "#000",
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
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderColor: '#922323',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 30, 
  },
  badgeText: {
    fontSize: 11,
    color: '#fff',
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