import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import {colors} from '../utils/colors';
import useHome from '../hooks/useHome';
import {PromotionCardProps, TagListProps} from '../types/HomeTypes';
import {screenHeight, screenWidth} from '../utils/uiHelper';
import Carousel from 'react-native-reanimated-carousel';
import RenderHTML from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParams} from '../types/NavigationTypes';

const Home = () => {
  const {tagsList, promotions} = useHome();
  const [selectedFilter, setSelectedFilter] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/icons/logo.png')}
          style={styles.logo}
        />
        <View style={styles.headerSecondContainer}>
          <Button onPressButton={() => {}} containerStyle={styles.loginButton}>
            <Text style={styles.loginButtonText} fontWeight="bold">
              Giriş Yap
            </Text>
          </Button>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/icons/avatar.png')}
              style={styles.avatar}
            />
          </View>
        </View>
      </View>
    );
  };

  const TagsListButtons = () => {
    const renderItem = ({item, index}: {item: TagListProps; index: number}) => {
      return (
        <Button
          containerStyle={[
            styles.tagsListRenderItemContainer,
            selectedFilter === index && {borderColor: colors.red},
          ]}
          onPressButton={() => {
            setSelectedFilter(index);
          }}>
          <Image source={{uri: item.IconUrl}} style={styles.tagsListIcon} />
          <Text style={styles.tagListText}>{item.Name}</Text>
        </Button>
      );
    };

    return (
      <View style={styles.tagsListContainer}>
        <FlatList
          data={tagsList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsListMainContainer}
        />
      </View>
    );
  };

  const MainSlider = () => {
    const handleDate = (date: string) => {
      const tarihStr = date;
      const [gun, ay, yil] = tarihStr.split('.');
      const girisTarihi = Number(new Date(`${yil}-${ay}-${gun}`));
      const simdikiTarih = Number(new Date());
      const kalanGunSayisi = Math.ceil(
        (girisTarihi - simdikiTarih) / (1000 * 60 * 60 * 24),
      );
      return kalanGunSayisi;
    };

    const goDetailScreen = (item: PromotionCardProps) => {
      navigation.navigate('Detail', {item});
    };

    const renderItem = ({item}: {item: PromotionCardProps}) => {
      return (
        <View style={styles.renderItemContainer}>
          <TouchableOpacity
            style={styles.mainSliderButton}
            activeOpacity={0.7}
            onPress={() => {
              goDetailScreen(item);
            }}>
            <View style={styles.promotionCardSubContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.ImageUrl}}
                  style={styles.promotionCardImage}
                />
                <View style={styles.brandIconContainer}>
                  <Image
                    source={{uri: item.BrandIconUrl}}
                    style={styles.brandIcon}
                  />
                </View>
                <View style={styles.remainingTextContainer}>
                  <Text style={styles.remainingTextStyle} fontSize={16}>
                    son {handleDate(item.RemainingText)} gün
                  </Text>
                </View>
              </View>
              <View style={styles.titlesContainer}>
                {item.Title && (
                  <RenderHTML
                    contentWidth={screenWidth}
                    source={{html: item.Title}}
                    ignoredStyles={['color']}
                    baseStyle={styles.mainTitle}
                  />
                )}
                {item.ListButtonText && (
                  <RenderHTML
                    contentWidth={screenWidth}
                    source={{html: item.ListButtonText}}
                    ignoredStyles={['color']}
                    baseStyle={{
                      color: item.ListButtonTextBackGroudColor || colors.black,
                      alignSelf: 'center',
                      width: '80%',
                      textAlign: 'center',
                      fontFamily: 'Helvetica-Bold',
                      fontWeight: 'bold',
                    }}
                  />
                )}
              </View>
            </View>
            <View
              style={[
                styles.subShape,
                {backgroundColor: item.ListButtonTextBackGroudColor},
              ]}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={styles.promotionContainer}>
        <Carousel
          data={promotions}
          renderItem={renderItem}
          width={screenWidth}
          height={500}
          mode="parallax"
          loop={false}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxAdjacentItemScale: 0.85,
          }}
          onSnapToItem={index => setCurrentIndex(index)}
        />
      </View>
    );
  };

  const PagingDots = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {promotions.map((item: {item: PromotionCardProps}, index: number) => (
          <View
            key={index}
            style={{
              width: index === currentIndex ? 20 : 10,
              height: 10,
              backgroundColor:
                index === currentIndex ? colors.red : colors.dotGray,
              borderRadius: 99,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <TagsListButtons />
      {useMemo(
        () => (
          <MainSlider />
        ),
        [promotions],
      )}
      <PagingDots />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    width: screenWidth,
    height: screenHeight,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  loginButton: {
    backgroundColor: colors.red,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 12,
  },
  loginButtonText: {
    color: colors.white,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 99,
    width: 42,
    height: 42,
    marginLeft: 8,
  },
  headerSecondContainer: {
    flexDirection: 'row',
  },
  tagsListIcon: {
    width: 26,
    height: 26,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  tagsListRenderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 48,
  },
  tagListText: {
    marginLeft: 8,
    fontSize: 14,
  },
  tagsListMainContainer: {
    gap: 8,
    height: 48,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  tagsListContainer: {
    height: 48,
  },
  promotionCardContainer: {
    alignItems: 'center',
    width: screenWidth / 2,
    marginTop: 12,
    flex: 1,
    backgroundColor: colors.white,
  },
  promotionCardImage: {
    width: 300,
    height: 380,
    borderRadius: 16,
    borderBottomLeftRadius: 120,
  },
  promotionCardSubContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderColor: colors.borderColor,
    borderWidth: 2,
    padding: 4,
  },
  promotionContainer: {
    width: screenWidth,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 99,
  },
  imageContainer: {},
  brandIconContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 4,
    left: 4,
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 99,
  },
  remainingTextContainer: {
    backgroundColor: colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    position: 'absolute',
    zIndex: 1,
    bottom: 8,
    right: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  remainingTextStyle: {
    color: colors.white,
  },
  titlesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    marginTop: 8,
    maxWidth: 280,
  },
  subShape: {
    backgroundColor: colors.red,
    width: 308,
    height: 60,
    zIndex: -1,
    position: 'absolute',
    bottom: -14,
    borderRadius: 999,
    transform: [{rotate: '3deg'}],
  },
  renderItemContainer: {
    alignItems: 'center',
  },
  mainSliderButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
