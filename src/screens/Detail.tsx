import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import useDetail from '../hooks/useDetail';
import {DetailProps} from '../types/HomeTypes';
import {screenWidth} from '../utils/uiHelper';
import {colors} from '../utils/colors';
import RenderHTML from 'react-native-render-html';
import Text from '../components/Text';
import LinearGradient from 'react-native-linear-gradient';

const Detail = () => {
  const {params} = useRoute();
  const id = params.item.Id;
  const {detailData}: {detailData: DetailProps} = useDetail({id});
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const handleDate = (date: string) => {
    const tarihStr = date;
    const [gun, ay, yil] = tarihStr.split('.');
    const girisTarihi = new Date(`${yil}-${ay}-${gun}`);
    const simdikiTarih = new Date();
    const kalanGunSayisi = Math.ceil(
      (girisTarihi - simdikiTarih) / (1000 * 60 * 60 * 24),
    );
    return kalanGunSayisi;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View>
          {detailData.ImageUrl && (
            <Image source={{uri: detailData.ImageUrl}} style={styles.image} />
          )}
          <View style={styles.brandIconContainer}>
            {detailData.BrandIconUrl && (
              <Image
                source={{uri: detailData.BrandIconUrl}}
                style={styles.brandIcon}
              />
            )}
          </View>
          {detailData.RemainingText && (
            <View style={styles.remainingTextContainer}>
              <Text style={styles.remainingTextStyle} fontSize={16}>
                son {handleDate(detailData.RemainingText)} gün
              </Text>
            </View>
          )}
        </View>
        {detailData.Title && (
          <RenderHTML
            contentWidth={screenWidth}
            source={{html: detailData.Title}}
            ignoredStyles={['color']}
            baseStyle={styles.mainTitle}
          />
        )}
        {detailData.Description && (
          <RenderHTML
            contentWidth={screenWidth}
            source={{html: detailData.Description}}
            ignoredStyles={['color']}
            baseStyle={styles.description}
          />
        )}
      </ScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', colors.white]}
        locations={[0, 0.5]}
        style={styles.linearGradient}
      />
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText} fontSize={16} fontWeight="bold">
          {detailData.DetailButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: screenWidth,
    height: 380,
    borderBottomLeftRadius: 120,
    resizeMode: 'cover',
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  goBackButton: {
    backgroundColor: colors.darkGray,
    width: 44,
    height: 44,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 40,
    left: 20,
  },
  brandIconContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: -16,
    left: 6,
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 99,
  },
  brandIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    borderRadius: 99,
  },
  mainTitle: {
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 26,
  },
  description: {
    color: colors.descriptionColor,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    maxWidth: screenWidth - 48,
  },
  actionButton: {
    backgroundColor: colors.red,
    width: screenWidth * 0.9,
    maxWidth: 360,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    zIndex: 3,
  },
  actionButtonText: {
    color: colors.white,
    paddingVertical: 20,
  },
  contentContainer: {
    paddingBottom: 100,
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
  linearGradient: {
    width: screenWidth,
    height: 160,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    opacity: 0.8,
  },
});
