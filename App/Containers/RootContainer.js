import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {Container, Content} from 'native-base';

import ReduxNavigation from '../Navigation/ReduxNavigation';
import {connect} from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

import SideMenuContainer from '../Containers/SideMenuContainer/SideMenuContainer';
import ScreenHeader from '../Components/ScreenHeader/ScreenHeader';

// Styles
import styles from './Styles/RootContainerStyles';
import stylesBoking from './Styles/BookingScreenStyles';

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        {/* <ReduxNavigation /> */}
        <SideMenuContainer>
          {(onMenuPress) => {
            return (
              <Container style={stylesBoking.mainContainer}>
                <ScreenHeader text="Đặt vé" onMenuPress={onMenuPress} />
                <ReduxNavigation />
              </Container>
            );
          }}
        </SideMenuContainer>
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
