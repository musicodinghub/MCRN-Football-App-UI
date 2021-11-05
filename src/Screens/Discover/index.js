/**
  TODO:

  [x] Clone the mcrn-expo-easy-starter project.
  [x] Rename the project.
  [x] Install dependencies
  [x] Start the app (yarn ios)
  [x] Study the UI Design and prepare the Fonts, Images, Colors, Dummy data.
  [x] Bottom tabs navigation (4 screens)
  [x] Discover Screen
      [x] Header Section
      [x] Banner Section
      [x] Teams Section
      [x] Matches Section
      [x] News Section
 */
 
import React from 'react';
import { StatusBar, View, FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Fonts, Images } from 'Constants';
import { McText, McImage } from 'Components';
import styled from 'styled-components/native';
import moment from 'moment'

import { dummyData } from 'Mock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const _renderTeamsItem = ({ item, index }) => {
  return (
    <TeamItemBox
      style={{
        marginLeft: index === 0 ? 16 : 0,
        marginRight: index === dummyData.Teams.length - 1 ? 0 : 10,
      }}
    >
      <BigTeamLogo source={item.logo} />
    </TeamItemBox>
  );
};
const _renderMatchesItem = ({ item, index }) => {
  return (
    <MatchItemBox
      style={{
        marginLeft: index === 0 ? 16 : 0,
        marginRight: index === dummyData.Teams.length - 1 ? 0 : 10,
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          padding: 6,
          backgroundColor: 'white',
          borderRadius: 30,
        }}
      >
        <McText bold size={9} color="#2648D1">
          {item.name}
        </McText>
      </View>
      <View
        style={{
          width: 90,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 9,
        }}
      >
        <MediumTeamLogo source={item.team1.logo} />
        <MediumTeamLogo source={item.team2.logo} />
      </View>
      <McText bold size={10} style={{ marginTop: 9 }}>
        {item.team1.name}
      </McText>
      <McText black size={6}>
        vs
      </McText>
      <McText bold size={10}>
        {item.team2.name}
      </McText>
    </MatchItemBox>
  );
};

const NewsItem = ({ item, index }) => <View>
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <McImage source={item.thumbnail} style={{
      width: 120,
      height: 93,
      borderRadius: 10,
      marginRight: 10
    }}/>
    <View style={{
      width: 189,
      justifyContent: 'space-between'
    }}>
      <McText medium size={14} numberOfLines={2}>{item.title}</McText>
      <McText regular size={11} color="#808191">
      {item.views} views - {moment(item.date).fromNow()}
      </McText>
      <McText regualr size={12}>{item.author.name}</McText>
    </View>
  </View>
</View>;

const Discover = ({ navigation }) => (
  <Container>
    <ScrollView contentContainerStyle={{}} style={{}}>
    <StatusBar hidden={true} />
    {/* Header Section */}
    <HeaderSection>
      <McText semi size={30} style={{ lineHeight: 35 }}>
        Discover
      </McText>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <McImage source={Images.Search} style={{ marginRight: 20 }} />
        <McImage source={Images.Notification} />
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: -5,
            right: 5,
          }}
        >
          <McText size={8} style={{ fontFamily: 'SourceSansPro-Regular' }}>
            3
          </McText>
        </View>
      </View>
    </HeaderSection>
    {/* BannerSection */}
    <BannerSection>
      <LinearGradient
        colors={['#4C4478', '#0C0C69']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: 181.92,
          borderRadius: 16,
          backgroundColor: 'green',
          justifyContent: 'space-between',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            width: 175,
            margin: 20,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: 79,
              height: 23,
              borderRadius: 12,
              backgroundColor: Colors.white,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <McImage source={Images.Soccer} />
            <McText
              size={12}
              color="#181829"
              style={{
                fontFamily: 'Inter-SemiBold',
              }}
            >
              Football
            </McText>
          </View>
          <McText
            size={17}
            style={{
              fontFamily: 'Inter-SemiBold',
            }}
          >
            Zidane and Real Madrid: Where it went wrong and what's next
          </McText>
          <McText
            size={12}
            style={{
              fontFamily: 'Inter-Regular',
            }}
          >
            Tomorrow, 06.30 PM
          </McText>
        </View>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <McImage source={require('Assets/images/Zidane.png')} />
      </View>
    </BannerSection>
    {/* Teams Section */}
    <Header2Section>
      <McText semi size={18}>
        Popular Teams
      </McText>
      <McText semi size={9} color="#A0A3BD">
        VIEW ALL
      </McText>
    </Header2Section>
    <View>
      <FlatList
        keyExtractor={(item) => '_team' + item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        data={dummyData.Teams}
        renderItem={_renderTeamsItem}
      ></FlatList>
    </View>
    {/* Matches Section */}
    <Header2Section>
      <McText semi size={18}>
        Upcoming Matches
      </McText>
      <McText semi size={9} color="#A0A3BD">
        VIEW ALL
      </McText>
    </Header2Section>
    <View>
      <FlatList
        keyExtractor={(item) => '_match' + item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        data={dummyData.Matches}
        renderItem={_renderMatchesItem}
      ></FlatList>
    </View>
    {/* News Section */}
    <Header2Section>
      <McText semi size={18}>
        Latest News
      </McText>
      <McText semi size={9} color="#A0A3BD">
        VIEW ALL
      </McText>
    </Header2Section>
    <View>
      <FlatList
        keyExtractor={(item) => '_news' + item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        data={dummyData.News}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={
              () => {
                navigation.navigate('ArticleDetail', {selectedArticle: item})
              }
            }
           style={{
            width: 319,
            height: 93,
            marginTop: 15,
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === dummyData.length - 1 ? 0 : 10,
          }}>
            <NewsItem item={item} />
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
    {/* <View style={{marginTop: 100}}></View> */}
    </ScrollView>     
  </Container>
);

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => Colors.background};
`;
const HeaderSection = styled.View`
  height: 30px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Header2Section = styled.View`
  height: 18px;
  margin: 23px 16px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BannerSection = styled.View`
  height: 200px;
  margin: 25px 16px 0px;
  /* background: red; */
`;

const TeamItemBox = styled.View`
  width: 70px;
  height: 65px;
  border-radius: 10px;
  background-color: #222232;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const BigTeamLogo = styled.Image`
  width: 50px;
  height: 55px;
`;
const MatchItemBox = styled.View`
  width: 112px;
  height: 156px;
  border-radius: 10px;
  background-color: #222232;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: ${(props) => Colors.blue};
`;
const MediumTeamLogo = styled.Image`
  width: 40px;
  height: 43px;
`;
export default Discover;
