import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, Pressable } from "react-native";
import Container from '../components/Container';

function ProfileScreen() {
    const navigation = useNavigation();

  return (
    <Container>
        <Pressable 
            onPress={(toScreen) => {navigation.navigate('Screen2')}}
            style={{margin: 15}}
        >
            <Text>To screen 2</Text>
        </Pressable>
    </Container>
  )
}

export default ProfileScreen