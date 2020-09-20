import React from 'react';
import {Button, Icon} from 'native-base';

const SideMenuButton = ({onPress}) => {
  return (
    <Button transparent onPress={onPress}>
      <Icon type="FontAwesome" name="navicon" />
    </Button>
  );
};

export default SideMenuButton;
