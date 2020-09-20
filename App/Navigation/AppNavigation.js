import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import BookingScreenNavigation from './BookingScreenNavigation';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    BookingScreen: {screen: BookingScreenNavigation},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'BookingScreen',
  },
);

export default createAppContainer(PrimaryNav);
