import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, FlatList, Text, Image, Dimensions, RefreshControl, Pressable } from 'react-native';
import { sliderPizza, sliderPizzaAll } from './../data/pizzaData';
import handleShare from './../utils/sharUtils';

const { width } = Dimensions.get('window');

function CarouselScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(sliderPizza);
  const [refreshedOnce, setRefreshedOnce] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    if (!refreshedOnce) {
      setRefreshing(true);

      wait(3000).then(() => {
        const newItems = sliderPizzaAll.slice(0, 5);
        setData([...data, ...newItems]);
        setRefreshing(false);
        setRefreshedOnce(true);
      });
    }
  }, [data, refreshedOnce]);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (width - 30));
    setActiveIndex(index);
  };

  const handleLoadMore = () => {
    if (refreshedOnce) {
      const newItems = sliderPizzaAll.slice(data.length - sliderPizza.length, data.length - sliderPizza.length + 5);
      setData([...data, ...newItems]);
    }
  };

  return (
    <View style={styles.wrap}>
      <View>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          onScroll={handleScroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1} 
          renderItem={({ item: { shareLink, imageLink } }) => (
            <Pressable onPress={() => handleShare(shareLink)}>
              <View style={styles.slideContainer}>
                <Image
                  style={styles.slideImage}
                  source={{ uri: imageLink }}
                  resizeMode="cover"
                />
              </View>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? 'gray' : 'lightgray' },
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 100,
    flex: 1,
    paddingHorizontal: 15,
  },
  slideContainer: {
    width: width - 30,
    height: 350,
  },
  slideImage: {
    height: 350,
    flex: 1,
    marginHorizontal: 7.5
  },
  paginationContainer: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});

export default CarouselScreen