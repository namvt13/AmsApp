import {createStackNavigator} from 'react-navigation-stack';

import Booking from '../Components/Booking/Booking';
import BookingDetail from '../Components/BookingDetail/BookingDetail';

const BookingScreenNavigation = createStackNavigator(
  {
    Booking: {screen: Booking},
    BookingDetail: {screen: BookingDetail},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Booking',
  },
);

export default BookingScreenNavigation;
