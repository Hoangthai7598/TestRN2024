import Button from 'components/Button';
import {View} from 'react-native';
import {COLORS} from 'utils/constants';
import {IFooter} from './model';

const Footer = ({handleChoice}: IFooter) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 15,
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -999,
      }}>
      <Button
        name="times"
        size={24}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <Button
        name="star"
        size={20}
        color={COLORS.star}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <Button
        name="heart"
        size={24}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
};

export default Footer;
