import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25,
  },
  images: {
    width: width * 0.9,
    height: height * 0.77,
    borderRadius: 20,
  },
  userContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
  },
  location: {
    fontSize: 18,
    color: 'white',
    fontWeight: '300',
  },
  distance: {
    fontSize: 18,
    color: 'white',
    fontWeight: '300',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{rotate: '-30deg'}],
  },
  nopeContainer: {
    right: 45,
    transform: [{rotate: '30deg'}],
  },
});

export default styles;
