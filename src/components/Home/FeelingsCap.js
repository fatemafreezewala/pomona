import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fontFamily from '../../constant/fontFamily'

const FeelingsCap = ({title}) => {
  return (
    <View style={{flexDirection:'row',
    width:'100%',marginTop:10,height:50,borderRadius:30,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#000',fontFamily:fontFamily.Medium}}>{title}</Text>
    </View>
  )
}

export default FeelingsCap

const styles = StyleSheet.create({})