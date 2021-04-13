import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import home from '../assets/icons/home-active.png'
import orders from '../assets/icons/order.png'
import help from '../assets/icons/help.png'
import inbox from '../assets/icons/inbox.png'
import account from '../assets/icons/account.png'
import search from '../assets/icons/search.png'
import promo from '../assets/icons/promo.png'
import gopay from '../assets/icons/gopay.png'
import pay from '../assets/icons/pay.png'
import nearby from '../assets/icons/nearby.png'
import topup from '../assets/icons/topup.png'
import more from '../assets/icons/more.png'
import goCar from '../assets/icons/go-car.png'
import goFood from '../assets/icons/go-food.png'
import goRide from '../assets/icons/go-ride.png'
import goSend from '../assets/icons/go-send.png'
import goBluebird from '../assets/icons/go-bluebird.png'
import goDeals from '../assets/icons/go-deals.png'
import goMore from '../assets/icons/go-more.png'
import goPulsa from '../assets/icons/go-pulsa.png'
import white from '../assets/icons/white.png'
import gojex from '../assets/images/gojex.jpg'
import food from '../assets/images/food-banner.jpg'
import goFoodd from '../assets/icons/go-food.png'
import gojek from '../assets/icons/gojek.png'
const App = () => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      {/* search */}
      <ScrollView style={{backgroundColor:'white', flex:1}}>
        <View  style={{marginHorizontal:17,marginBottom:-17, flexDirection:'row', padding:17}}>
          <View style={{position:'relative', flex:1}}>
          <TextInput placeholder="what do you want eat ?" 
          style={{borderWidth:1, 
          borderRadius:25,
           borderColor:'#E8E8E8',
            height:40,fontSize:13, 
            paddingLeft:45,
            paddingRight:20,
            backgroundColor:'white',
            
            
            }}>

          </TextInput>
          <Image source={search}
           style={{height:26, width:26, position:'absolute', top:8, left:10}}
          
          />
          </View>
          <View style={{ width:35, marginLeft:17, alignItems:'center',justifyContent:'center' }}>
           <Image 
           
           source={promo}
           style={{height:26, width:26 }}
           
           />
          
          </View>

        </View>
        
       {/* gopay */}
       <View style={{padding:17}}>
         <View style={{flexDirection:'row', 
         justifyContent:'space-between',
         backgroundColor:'#2C5FB8',
         borderTopLeftRadius:4,
         borderTopRightRadius:4,
         padding:14
         }}>
           <Image source={gopay} 
           
           />
           <Text style={{fontSize:17, color:'white', fontWeight:'bold'}}>Rp 45.000,00</Text>

         </View >
         <View style={{flexDirection:'row', backgroundColor:'#2F65BD',
          paddingTop:20, paddingBottom:14, 
          borderBottomLeftRadius:4,
          borderBottomRightRadius:4}}>
           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        
             <Image  source={pay}/>
             <Text style={{fontWeight:'bold', color:'white', marginTop:13,marginBottom:13, fontSize:13}}>Pay</Text>
             </View>
           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        
           <Image 
           source={nearby}
           
           />
 
             <Text style={{fontWeight:'bold', color:'white', marginTop:13,marginBottom:13,fontSize:13}}>Nearby</Text>
             </View>
           <View style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
       
          <Image 
          source={topup}
          />
             <Text style={{fontWeight:'bold', color:'white', marginTop:13,marginBottom:13,fontSize:13}}>Top Up</Text>
             </View>
           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          
           <Image 
           source={more}
           />
             <Text style={{fontWeight:'bold', color:'white', marginTop:13,marginBottom:13,}}>More</Text>
             
             </View>


         </View>

       </View>

       {/* main feature */}
       
       <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:17}}>
         <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between', marginBottom:18}}>
        
         <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
         <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF', alignItems:'center'}}>
           <Image source={goRide} />
         </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-Ride</Text>
         </View>
        
         <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
         <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF', alignItems:'center'}}>
           <Image source={goCar}/>
         </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-CAR</Text>
         </View>
       
         <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
         <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
           <Image source={goBluebird}/>
         </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>G0-BLUBIRD</Text>
         </View>
        
         <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
         <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
           <Image source={goSend}/>
         </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-SEND</Text>
         </View>
         </View>
         <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between', marginBottom:18}}>
      
         <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
         <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
           <Image source={goDeals}/>
         </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-DEALS</Text>
         </View>
   
        <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
        <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
          <Image source={goPulsa}/>
        </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-PULSA</Text>
         </View>
    
        <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
        <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
          <Image source={goFood} />
        </View>
           <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-FOOD</Text>
         </View>
       <View style={{justifyContent:'center', alignItems:'center', width:"25%"}}>
       <View style={{height:58, width:58, borderWidth:1,borderRadius:18,borderColor:'#EFEFEF',alignItems:'center'}}>
         <Image  source={goMore}/>
       </View>
       <Text style={{fontSize:11, fontWeight:'bold', marginTop:6}}>GO-MORE</Text>
       </View>
         </View>

       </View>



       {/* section */}
       <View style={{height:17, backgroundColor:'#F2F2F4', marginTop:20, marginBottom:20}}>
      
       </View>


       {/* news */}
       <View style={{marginHorizontal:17, position:'relative'}}>
        
       <Image source={gojex}
          style={{width:380,height:200, borderRadius:8}}
         
       />
       <View  style={{height:200, width:380,position:'absolute', left:0, top:0, backgroundColor:'black', borderRadius:8, opacity:0.3}}/>
       <Image  
       source={white}
       style={{height:15, width:60, position:'absolute', top:16, left:16}}
       
       
       />

         <Text style={{fontWeight:'bold',fontSize:16, marginTop:16,color:'#1C1C1C'}}>GO-NEWS</Text>
         <Text style={{marginTop:6, fontWeight:'500',color:'#7A7A7A'}}>Gojek kembali menjadi hero di mata masyarakat dengan memberikan pelayanan gratis bagi tidak mampu.</Text>
         <View style={{
           backgroundColor:'#61A756', 
           paddingHorizontal:12, 
           paddingVertical:11,
            marginTop:12, 
            alignSelf:'flex-end', 
            borderRadius:4,
        
            
            
            }}>
           <TouchableOpacity onPress={()=>{
             alert('read lagi bro')
           }}>
             <Text style={{fontWeight:'bold', fontSize:13, color:'white', textAlign:'center'}}>READ</Text>
           </TouchableOpacity>
           
         </View>
         <View style={{height:2, backgroundColor:'#F2F2F4', marginTop:20, marginBottom:20}}>
      </View>

       </View>


       {/* internal information */}
       <View style={{margin:17}}>
           <Image  
       source={gojek}
       style={{height:15, width:60 }}
       
       
       />
       <Text style={{fontSize:17, fontWeight:'bold', marginTop:15, color:'#1C1C1C', marginBottom:20}}>Complete Your Profile</Text>
       <View style={{flexDirection:'row'}}>
         <Image source={require('../assets/icons/facebook-connect.png')}/>
         <View style={{marginLeft:16}}>
           <Text>
             Connect with Facebook
             
           </Text>
           <Text style={{color:'#4A4A4A', fontSize:15, fontWeight:'normal'}}> 
             Loggin faster without verfication code 

           </Text>
         </View>


       </View>
       <View style={{
           backgroundColor:'#61A756', 
           paddingHorizontal:12, 
           paddingVertical:11,
            marginTop:16, 
            alignSelf:'flex-end', 
            borderRadius:4,
        
            
            
            }}>
           <TouchableOpacity onPress={()=>{
             alert('read lagi bro')
           }}>
             <Text style={{fontWeight:'bold', fontSize:13, color:'white', textAlign:'center'}}>CONNECT</Text>
           </TouchableOpacity>
           
         </View>
         <View style={{height:2, backgroundColor:'#F2F2F4', marginTop:20, marginBottom:20}}>
       </View>
       </View>







       {/* banner Goofoo */}

       <View style={{marginHorizontal:17, position:'relative'}}>
        <Image source={food}
           style={{width:380,height:200, borderRadius:8}}
   
        />
        <View  style={{height:200, width:380,position:'absolute', left:0, top:0, backgroundColor:'black', borderRadius:8, opacity:0.3}}/>
        <Image  
        source={white}
        style={{height:15, width:60, position:'absolute', top:16, left:16}}
        />
          <Text style={{fontWeight:'bold',
          fontSize:16,
           marginTop:16,color:'white',
            position:'absolute',
            top:120,left:16
            
            }}>Free GO-FOOD vouchers</Text>

              <Text style={{fontWeight:'500',
          fontSize:13,
           marginTop:12,color:'white',
            position:'absolute',
            top:150,left:16
            
            }}>Quick before they run out!</Text>

          <View style={{
            backgroundColor:'#61A756', 
            paddingHorizontal:12, 
            paddingVertical:11,
             marginTop:12, 
             alignSelf:'flex-end', 
             borderRadius:4,
             position:'absolute',
             top:130,
             right:6
            
         
             
             
             }}>
            <TouchableOpacity onPress={()=>{
              alert('read lagi bro')
            }}>
              <Text style={{fontWeight:'bold', fontSize:13, color:'white', textAlign:'center'}}>GET VOUCHER</Text>
            </TouchableOpacity>
            
          </View>
          <View style={{height:2, backgroundColor:'#F2F2F4', marginTop:20, marginBottom:20}}>
       </View>

        </View>

        {/* Go Food Nearby */}
        <View style={{marginHorizontal:17}}>
         <Image 
         source={goFoodd}
         
         />
         <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:16, marginTop:8}}>
         <Text style={{fontSize:17, fontWeight:'bold',color:'#1C1C1C'}}>Neraby Restaurants</Text>
         <Text style={{fontWeight:'bold', fontSize:16, color:'#61A756'}}>See All</Text>
         </View>
         <ScrollView horizontal>
         <View style={{flexDirection:'row'}}>
           <View>
           <View style={{height:150,width:150, backgroundColor:'red',borderRadius:10,margin:6}}>
            <Image 
            source={require('../assets/images/go-food-banka.jpg')}
            style={{height:undefined,width:undefined, resizeMode:'cover', flex:1, borderRadius:10}}
            
            
            />

           </View>
           <Text style={{fontSize:14, textAlign:'center', marginTop:12, color:'#1C1C1C', fontWeight:'bold'}}>Martbak Banka</Text>
           </View>
           <View>
           <View style={{height:150,width:150, backgroundColor:'red',borderRadius:10,margin:6}}>
            <Image 
            source={require('../assets/images/go-food-kfc.jpg')}
            style={{height:undefined,width:undefined, resizeMode:'cover', flex:1, borderRadius:10}}
            
            
            />

           </View>
           <Text style={{fontSize:14, textAlign:'center', marginTop:12, color:'#1C1C1C', fontWeight:'bold'}}>KFC Bandung</Text>
           </View>
           <View>
           <View style={{height:150,width:150, backgroundColor:'red',borderRadius:10,margin:6}}>
            <Image 
            source={require('../assets/images/go-food-orins.jpg')}
            style={{height:undefined,width:undefined, resizeMode:'cover', flex:1, borderRadius:10}}
            
            
            />

           </View>
           <Text style={{fontSize:14, textAlign:'center', marginTop:12, color:'#1C1C1C', fontWeight:'bold'}}>Martabak Orins</Text>
           </View>
           <View>
           <View style={{height:150,width:150, backgroundColor:'red',borderRadius:10,margin:6}}>
            <Image 
            source={require('../assets/images/go-food-gm.jpg')}
            style={{height:undefined,width:undefined, resizeMode:'cover', flex:1, borderRadius:10}}
            
            
            />

           </View>
           <Text style={{fontSize:14, textAlign:'center', marginTop:12, color:'#1C1C1C', fontWeight:'bold'}}>Mie Ayam</Text>
           </View>
           <View>
           <View style={{height:150,width:150, backgroundColor:'red',borderRadius:10,margin:6}}>
            <Image 
            source={require('../assets/images/go-food-pak-boss.jpg')}
            style={{height:undefined,width:undefined, resizeMode:'cover', flex:1, borderRadius:10}}
            
            
            />

           </View>
           <Text style={{fontSize:14, textAlign:'center', marginTop:12, color:'#1C1C1C', fontWeight:'bold'}}>Ayam Rarang</Text>
           </View>

        
         </View>
         
         </ScrollView>
         <View style={{height:2, backgroundColor:'#F2F2F4', marginTop:20, marginBottom:20}}>
       </View>
         
         

        </View>
 
          

 
  

       </ScrollView>

       <View style={{ height:54, flexDirection:'row', backgroundColor:'white'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{backgroundColor:'white', width:26, height:26}}>
             <Image 
             source={home}
             style={{width:26, height:26}}
             />
            </View>
            <Text style={{fontSize:10, color:'#43AB4A',marginTop:4}}>Home</Text>
            </View>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white', width:26, height:26}}>
          <Image 
             source={orders}
             style={{width:26, height:26}}
             />
          </View>
            
            <Text style={{fontSize:10, color:'#545454',marginTop:4}}>Orders</Text>
            </View>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white', width:26, height:26}}>
          <Image 
             source={help}
             style={{width:26, height:26}}
             />
          </View>
            <Text style={{fontSize:10, color:'#545454',marginTop:4}}>Help</Text>
            </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white', width:26, height:26}}>
          <Image 
             source={inbox}
             style={{width:26, height:26}}
             />
         </View>
            <Text style={{fontSize:10, color:'#545454',marginTop:4}}>Inbox</Text>
            </View>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white', width:26, height:26}}>
          <Image 
             source={account}
             style={{width:26, height:26}}
             />
          </View>
            <Text style={{fontSize:10, color:'#545454',marginTop:4}}>Account</Text>
            </View>
        
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
