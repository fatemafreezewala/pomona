import { FlatList, StyleSheet, Image, View ,Platform,PermissionsAndroid} from 'react-native'
import React,{ useEffect } from 'react'
import InnerPageHeading from '../../components/InnerPageHeading'
import globalStyle from '../../styles/globalStyle'
import FlatlistComp from '../../components/FlatlistComp'
import Card from '../../components/Restaurant/Card'
import Location from '../../components/Restaurant/Location'
import Pin from '../../assets/img/Restaurant/pin.svg'
import Home from '../../assets/img/Restaurant/home.svg'
import Salad from '../../assets/img/Restaurant/salad.svg'
import Pills from '../../components/Restaurant/Pills'
import api from '../../constant/api'
import Loader from '../../components/Loader'
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { Searchbar } from 'react-native-paper'
import fontFamily from '../../constant/fontFamily'
import CuisineSelector from '../../components/Restaurant/CuisineSelector'
import TypeSelector from '../../components/Restaurant/TypeSelector'

const Index = ({route,navigation}) => {
  const {lat,lon,address} = route.params 

  const [getRestaurants, setGetRestaurants] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [caddress, setAddress] = React.useState(address)
  const [lattitude, setlattitude] = React.useState('')
  const [longitude, setlongitude] = React.useState('') 
  const [filteredDataSource, setFilteredDataSource] = React.useState();
  const [cusine, setCusine] = React.useState('Cusine')
  const [cusineModal, setCusineModal] = React.useState(false)
  const [typeModal, setTypeModal] = React.useState(false)
  const [type, setType] = React.useState('Type')

  React.useEffect(() => {
    navigation.setOptions({ tabBarHideOnKeyboard: true });
  
   
  }, [])
  
  const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource and update FilteredDataSource
        const newData = getRestaurants.filter(
          function (item) {
            // Applying filter for the inserted text in search bar
            const itemData = item.restaurant_name
                ? item.restaurant_name.toUpperCase()
                : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        );
        setFilteredDataSource(newData);
      
      } else {

        setFilteredDataSource(getRestaurants);
      
        
      }
    };
  const items = ({item,index}) =>{
    return <Card onPress={()=> navigation.navigate('RestaurantDetail',{item:item})} 
    item={item} ></Card>
  }

  const pillData = [
    {id:1,img:<Home></Home>,title:type,onPress:()=>{setTypeModal(true)}},
    {id:2,img:<Salad></Salad>,title:cusine,onPress:()=>{setCusineModal(true)}},
    {id:3,img:<Pin></Pin>,title:'Location'}
  ]

  useEffect(()=>{
   getResto()
  },[])
  const getResto = () =>{
    Geocoder.init("AIzaSyBqGZecCZJXWPQM3YIe6p9wZCMIo88bEJc"); 
    setLoading(true);
    api.get('?action=getRestaurants')
    .then((res)=>{
      setGetRestaurants(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
    setLoading(false)

    getCurrent()
  }
  const getCurrent = ()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        decodeAddress(position.coords.latitude,position.coords.longitude)
      },
      (error) => {
        requestPermission()
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000,forceRequestLocation:true }
  );
  }
  const decodeAddress = (lat,long) =>{
    Geocoder.from(lat, long)
    .then(json => {
      
      var addressComponent = json.results[0].formatted_address;
      setAddress(addressComponent)
    })
    .catch(error => console.warn(error));
     setlattitude(lat)
     setlongitude(long)
  }
  const requestPermission = async () => {
    if(Platform.OS == 'ios'){
      Geolocation.requestAuthorization('whenInUse')
      getCurrent()
    }else{
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrent()
        } else {
          requestPermission()
        }
      } catch (err) {
        console.log(err) 
      }
    }        
		
	}
  const onCusineSelect = (text) =>{
     // Check if searched text is not blank
     setCusine(text)
     if (text != 'Cuisine') {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = getRestaurants.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.restaurant_Cuisine
              ? item.restaurant_Cuisine.toUpperCase()
              : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(newData);
    
    } else {

      setFilteredDataSource(getRestaurants);
    
      
    }
  }
  const ontypeSelect = (text) =>{
// Check if searched text is not blank
setType(text)
if (text != 'Type') {
 // Inserted text is not blank
 // Filter the masterDataSource and update FilteredDataSource
 const newData = getRestaurants.filter(
   function (item) {
     // Applying filter for the inserted text in search bar
     const itemData = item.restaurant_Cuisine
         ? item.restaurant_Cuisine.toUpperCase()
         : ''.toUpperCase();
     const textData = text.toUpperCase();
     return itemData.indexOf(textData) > -1;
   }
 );
 setFilteredDataSource(newData);

} else {

 setFilteredDataSource(getRestaurants);

 
}
  }
  return (
    <View style={[globalStyle.container,globalStyle.dullBackground]}>
      <InnerPageHeading title="Restaurants" subtitle="Explore place near you"></InnerPageHeading>
      <View style={globalStyle.mt5}></View>
        <Location 
          onPress={()=>navigation.navigate('ChangeLocation',{
          address:address,
          lat:lattitude,
          lon:longitude
        })}
          address={caddress}
        ></Location>
        <Searchbar onChangeText={searchFilterFunction} style={[globalStyle.mt5,{fontSize:10,fontFamily:fontFamily.Regular}]} placeholder="Search Restro.." placeholderTextColor="#000">

        </Searchbar>
       <View style={globalStyle.mt5}></View>
     <View>

     <FlatList
      horizontal
      data={pillData}
      renderItem={({item,index})=>(<Pills index={index} item={item}></Pills>)}
      keyExtractor={(item)=>item.id}
      showsHorizontalScrollIndicator={false}
      ></FlatList>
     </View>
     <Loader loading={loading}></Loader>
      <FlatlistComp DATA={filteredDataSource ? filteredDataSource : getRestaurants} renderItem={items}></FlatlistComp>
    <CuisineSelector onCusineSelect={onCusineSelect} modalVisible={cusineModal} setModalVisible={setCusineModal}></CuisineSelector>
    <TypeSelector onCusineSelect={ontypeSelect} typeModal={typeModal} setTypeModal={setTypeModal}></TypeSelector>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})