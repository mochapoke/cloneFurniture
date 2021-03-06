import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import styled from 'styled-components';
import { icons, images, COLORS, FONTS, SIZES } from '../constants/'

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.white};
  padding-top: ${SIZES.padding/2}px;
`;
const Wrapper = styled.View`
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
`;
const Title = styled.Text`
  color: ${COLORS.black};
`;

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}
    >
      <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>
        {item.name}
      </Text>
      
      {/* 인디케이터 */}
      {
        selectedTab.id === item.id && 
        <View style={{alignItems:'center', marginTop:SIZES.base}}>
          <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue}}></View>
        </View>
      }
    </TouchableOpacity>
  );

  return(
    <View style={{marginTop: SIZES.padding}}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={ item => item.id.toString() }
      />
    </View>
  )
}


const ScrollableCard = ({navigation, productList}) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={{ marginLeft: SIZES.padding }}
      onPress={() => navigation.navigate('ItemDetail', {'itemInfo': item})}
    >
      <View style={{ width: SIZES.width/2 }}>
        <Image 
          source={item.image}
          resizeMode='cover'
          style={{width: '100%', height:'100%', borderRadius: SIZES.radius }}
        />
        <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%'}}>
          <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Furniture</Text>
          <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
        </View>
        
        <View style={{ 
          position: 'absolute', 
          bottom: 15, 
          left: 15, 
          borderRadius: 16, 
          paddingVertical: 7, 
          paddingHorizontal: 15, 
          backgroundColor: COLORS.transparentLightGray
        }}>
          <Text style={{ ...FONTS.h3}}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return(
    <View style={{ marginTop: SIZES.padding }}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={item => item.productId.toString()}
      />
    </View>
  )
}


const Home =({navigation})=>{
  
  // Dummy Data
  const [tabList, setTabList] = React.useState([
    {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 38.10,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 26.18,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 47.60,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
  ])

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: "Chair",
    title: 'chairs',
    productList: [
        {
            productId: 1,
            productName: 'Chair Green Colour',
            price: 38.10,
            image: images.greenChair,
        },
        {
            productId: 2,
            productName: 'Chair Peach Colour',
            price: 26.18,
            image: images.redChair,
        },
        {
            productId: 3,
            productName: 'Chair White Colour',
            price: 47.60,
            image: images.whiteChair,
        },

        ]
  })

  // render
  function renderPromotionCard(){
    return(
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.radius * 1,
          padding: SIZES.radius,
          height: 110,
          borderRadius: 20,
          backgroundColor: COLORS.white,
          elevation: 2
        }}
      >
        <View style={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray2,
          borderRadius: 20
        }}>
          <Image 
            source={images.sofa}
            resizeMode='contain'
            style={{
              width: '60%',
              height: '60%'
            }}
          />
        </View>

        {/* Wordings Section */}
        <View style={{
          marginLeft: SIZES.padding,
          flex: 1,
          justifyContent: 'center'
        }}>
          <Text style={{...FONTS.h2, color: COLORS.secondary}}>Special Offer</Text>
          <Text style={{...FONTS.body3, color: COLORS.gray}}>Adding to your cart</Text>
        </View>

        {/* Button */}
        <View style={{
          marginRight: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
              width: 40,
              borderRadius: 10
            }}
            onPress={() => {}}
          >
            <Image 
              source={icons.chevron}
              resizeMode='contain'
              style={{
                height: '30%',
                height: '30%'
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderTitle(title){
    return(
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Title style={{...FONTS.largeTitle}}>Collection of</Title>
        <Title style={{...FONTS.largeTitle}}>{title}</Title>
      </View>
    )
  }

  function renderHeader(){
    return(
     <View>
       <Wrapper>
          <View style={{flexDirection: 'row'}}>
            <Button
              onPress={() => {}}>
              <Image 
                  source={icons.menu} 
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25
                  }}
              />
            </Button>

            <Button style={{alignItems: 'flex-end'}}
              onPress={() => {}}>
              <Image 
                  source={icons.cart} 
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25
                  }}
              />
            </Button>
         </View>
       </Wrapper>
     </View> 
    )
  }

  return(
    <Container>
      <StatusBar backgroundColor="white" 
        barStyle='dark-content'></StatusBar>

      {renderHeader()}

      {renderTitle(selectedTab.title)}

      <ScrollableTab 
        tabList= {tabList}
        selectedTab= {selectedTab}
        onPress={(item) => setSelectedTab(item) }
      />

      <View style={{flex:1}}>
        <ScrollableCard 
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      {/* Footer - Promotion Card */}
      <View style={{
        height: '19%',
        justifyContent: 'flex-end'
      }}>
        {renderPromotionCard()}
      </View>
    </Container>
  )
}

export default Home;
