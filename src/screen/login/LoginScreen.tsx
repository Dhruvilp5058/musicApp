import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { routesNav } from '../../component/String/string'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='onpress' onPress={()=>navigation.navigate(routesNav.hometab)} />
    </View>
  )
}

export default LoginScreen