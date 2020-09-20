import React from 'react';
import {Image} from 'react-native';
import {Header, Left, Right, Body, Title, Subtitle, View} from 'native-base';

import BackButton from '../Common/BackButton/BackButton';
import MenuButton from '../SideMenu/SideMenuButton/SideMenuButton';

const vxrIcon = require('../../Images/vexere-ico.png');

const ScreenHeader = ({subText, text, onMenuPress, back = false}) => {
  return (
    <Header>
      <Left>
        {back ? <BackButton /> : <MenuButton onPress={onMenuPress} />}
      </Left>
      <Body>
        <Title>{text}</Title>
        {subText && <Subtitle>{subText}</Subtitle>}
      </Body>
      <Right>
        <View
          style={{
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 50,
          }}>
          <Image
            source={vxrIcon}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </Right>
    </Header>
  );
};

export default ScreenHeader;
