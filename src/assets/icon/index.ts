import icoMoonConfig from '@assets/icon/selection.json';
import icoMoonConfig2 from '@assets/icon/selection2.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const check = 'icomoon';

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, check);
const CustomIcon2 = createIconSetFromIcoMoon(icoMoonConfig2, 'goEdu');

const Icons = {
  demo: CustomIcon,
  ionicons: Ionicons,
  goEdu: CustomIcon2,
  fontAwesome: FontAwesome,
};

export type IconType = keyof typeof Icons;

export const getIconComponent = (componentName: IconType) => {
  if (!Icons[componentName]) {
    return null;
  }
  return Icons[componentName];
};
