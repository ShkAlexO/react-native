import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import Card from '../components/Card';
import { pizzaData } from '../data/pizzaData';
import { Colors } from '../constants/constants';

const { GRAY_COLOR, WHITE_COLOR } = Colors;

const { unchecked, checkbox } = {
  unchecked: require('../../assets/unchecked.png'),
  checkbox: require('../../assets/checkbox.png'),
};

function MenuScreen() {
  const [inputValue, onChangeInputValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);

  const filteredPizzaData = pizzaData.filter(({ title, isNew }) => {
    const searchText = inputValue.toLowerCase().split(' ');
    const titleProductLower = title.toLowerCase();

    return (
      searchText.every((searchWord) =>
        titleProductLower.split(' ').some((titleWord) => titleWord.startsWith(searchWord))
      ) && (!onlyNew || (onlyNew && isNew))
    );
  });

  const getPressableStyles = (pressed) => [
    {
      backgroundColor: pressed ? GRAY_COLOR : 'transparent',
    },
    styles.wrapperPressable,
  ];

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CarouselScreen', {}, { presentation: 'modal' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.wrapSearchBar}>
          <View style={styles.innerInput}>
            {showSearch && (
              <TextInput
                onChangeText={onChangeInputValue}
                style={styles.input}
                value={inputValue}
              />
            )}

            <Pressable
              android_ripple={{ color: WHITE_COLOR, borderless: false, radius: 50, foreground: false }}
              style={[styles.button, styles.buttonOpen]}
              onPress={handlePress}
            >
              <Image
                style={styles.iconSearch}
                source={require('../../assets/wishIcon.png')}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              android_ripple={{ color: WHITE_COLOR, borderless: false, radius: 50, foreground: false }}
              onPress={() => setShowSearch((prevState) => !prevState)}
              style={({ pressed }) => getPressableStyles(pressed)}
            >
              <Image
                style={styles.iconSearch}
                source={require('./../../assets/search.png')}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <Pressable 
            android_ripple={{ color: WHITE_COLOR, borderless: false, radius: 50, foreground: false }}
            onPress={() => setModalFilter((prevState) => !prevState)}
            style={styles.filterBtn}
          >
            <Image
              style={styles.iconSearch}
              source={require('./../../assets/filter.png')}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <FlatList
          data={filteredPizzaData}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('PizzaScreen', { pizzaData: item })}>
              <Card pizzaData={item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFilter}
        onRequestClose={() => {
          setModalFilter(!modalFilter);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalFilter(false)}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.filterText}>Filter</Text>
            <Pressable onPress={() => setOnlyNew(!onlyNew)}>
              <View style={styles.checkbox}>
                <Image
                  style={styles.iconSearch}
                  source={onlyNew ? checkbox : unchecked}
                  resizeMode="contain"
                />
                <Text style={styles.filterTextCheckbox}>Only new</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );

}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10, 
  },
  innerInput: {
    marginTop: 20,
    marginBottom: 15,
    height: 50,
    columnGap: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  wrapperPressable: {
    borderRadius: 8,
  },
  iconSearch: {
    width: 36,
    height: 36,
  },

  centeredView: {
    marginTop: 'auto',
  },
  modalView: {
    backgroundColor: 'red',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: GRAY_COLOR,
  },
  textStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  filterBtn: {
    width: 36,
    height: 36,
  },
  filterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterTextCheckbox: {
    fontSize: 18,
  },
  checkbox: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
});

export default MenuScreen;
