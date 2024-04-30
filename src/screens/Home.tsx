import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import {colors} from '../utils/colors';
import useHome from '../hooks/useHome';
import {TagListProps} from '../types/HomeTypes';

const Home = () => {
  const {tagsList} = useHome();
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
    const renderItem = ({item}: {item: TagListProps}) => {
      return (
        <Button
          containerStyle={styles.tagsListRenderItemContainer}
          onPressButton={() => {}}>
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

  return (
    <View style={styles.container}>
      <Header />
      <TagsListButtons />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
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
  },
  tagListText: {
    marginLeft: 8,
    fontSize: 14,
  },
  tagsListMainContainer: {
    gap: 8,
    height: 40,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  tagsListContainer: {
    height: 48,
  },
});
