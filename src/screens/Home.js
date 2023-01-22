import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React,{useContext} from 'react'
import globalStyle from '../styles/globalStyle'
import Bell from '../assets/img/Home/Bell.svg'
import Insight from '../assets/img/Home/insight.svg'
import Arrow from '../assets/img/Home/arrow.svg'
import fontFamily from '../constant/fontFamily'
import Button from '../components/Button'
import FlatlistComp from '../components/FlatlistComp'
import TemplateList from '../components/Home/TemplateList'
import colors from '../constant/colors'
import api from '../constant/api'
import Loader from '../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import imageApi from '../constant/imageApi'
import AppContext from '../context/AppContext'
const Home = ({navigation}) => {  
  const [getTemplate, setGetTemplate] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const user = React.useState()
 const {puser,setUser} = useContext(AppContext)

  // React.useEffect(() => {
  //   console.log(puser)
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getUser()
  //   });
  //   return unsubscribe;
  // }, [navigation]);
  React.useEffect(() => {
    getUser()
  }, [])  
  const getUser= async()=>{
    let usera = await AsyncStorage.getItem('USER')
    let userid = await AsyncStorage.getItem('USER_TOKEN')
    usera = JSON.parse(usera)
    setUser(usera)
    getTemplateData(userid)
  }
  const getTemplateData = async(id) =>{
    let usera = await AsyncStorage.getItem('USER')
    usera = JSON.parse(usera)
    setUser(usera)

    setLoading(true)
    api.post('?action=getAllergyTempByID',{
      "user_id":id
    }).then(res=>{
      setGetTemplate(res.data.data)
    }).catch(err=>{

    }).finally(()=>{
      setLoading(false)
    })
  }
  const items = ({item}) => {
    return (<TemplateList onPress={()=> navigation.navigate('TemplateDetails',{item:item,user:user})} item={item}></TemplateList>)
  }
  
  return (
    <View style={[globalStyle.container,globalStyle.dullBackground,{padding:0}]}>
       <View style={[globalStyle.rowSpaceBetween,{padding:15}]}>
      <TouchableOpacity onPress={()=>navigation.navigate('Options')} style={[globalStyle.rowSpaceBetween]}>
       {user?.u_profile == '' ? (<Image 
       style={{width:50,height:50,borderRadius:10}} 
       source={require('../assets/img/logo.png')}>
       </Image>) : (<Image 
        style={{width:50,height:50,borderRadius:10}} source={{uri:imageApi+puser?.u_profile}}></Image>)}
        <Text style={[globalStyle.heading,{fontSize:20},globalStyle.ml5]}>Hi {puser && puser.u_fullname}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
        <Bell></Bell>
      </TouchableOpacity>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
    
     <View style={[{backgroundColor:'#fff',padding:20,borderRadius:15,marginHorizontal:15},
     globalStyle.mt5]}>
      <Text style={[{fontSize:22,color:'#000',fontFamily:fontFamily.Medium,textAlign:'center'},globalStyle.mt5]}>
      Good afternoon
      </Text>
      <Text style={[{fontSize:16,color:'#000',fontFamily:fontFamily.Regular,textAlign:'center'},globalStyle.mt5]}>How do you feel right now?</Text>
      <Button onPress={()=>navigation.navigate('Feelings')} style={[globalStyle.mt5,globalStyle.mb5]} title="Record your Feeling"></Button>
     </View>
     <View style={[globalStyle.rowSpaceBetween,globalStyle.mt5,{marginHorizontal:15,backgroundColor:'#fff',padding:20,borderRadius:15}]}>
      <Insight></Insight>
      <View>
        <Text style={{fontSize:16,color:'#000',fontFamily:fontFamily.Medium}}>Your Insights</Text>
        <Text style={{fontSize:12,fontFamily:fontFamily.Regular}}>Check your last 7 day insight</Text>
      </View>
      <Arrow></Arrow>
     </View>
     <View style={[{backgroundColor:'#fff',
     borderTopStartRadius:30,borderTopRightRadius:30},globalStyle.mt5]}>
      <Text style={[{fontSize:18,fontFamily:
        fontFamily.Medium,color:colors.black,marginHorizontal:15,marginTop:20},globalStyle.mb5]}>Allergy Templates</Text>
        <Loader loading={loading}></Loader>
        <FlatlistComp DATA={getTemplate} 
        renderItem={items}></FlatlistComp>
      </View>
     </ScrollView>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})