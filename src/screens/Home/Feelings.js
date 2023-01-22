import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import globalStyle from '../../styles/globalStyle'
import FeelingsCap from '../../components/Home/FeelingsCap'

const Feelings = () => {

  const data = [
    {text:'Content'},
    {text:'Grateful'},
    {text:'Happy'},
    {text:'Angry'},
    {text:'Anxious'},
    {text:'Depressed'},
    {text:'Meh'},
    {text:'Sad'},
    {text:'Stressed'}
]
  return (
    <View style={[globalStyle.container,globalStyle.dullBackground]}>
      <FlatList
        data={data}
        renderItem={({item})=>(<FeelingsCap title={item.text}></FeelingsCap>)}
        keyExtractor={(item)=>item.text}
      ></FlatList>
    </View>
  )
}

export default Feelings

const styles = StyleSheet.create({})