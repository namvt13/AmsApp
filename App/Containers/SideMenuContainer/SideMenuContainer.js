import React, {useRef} from 'react';
import {Drawer} from 'native-base';

import SideMenu from '../../Components/SideMenu/SideMenu/SideMenu';

const SideMenuContainer = ({children}) => {
  let drawer = useRef().current;

  closeDrawer = () => {
    drawer && drawer._root.close();
  };

  openDrawer = () => {
    drawer && drawer._root.open();
  };

  return (
    <Drawer
      ref={(ref) => (drawer = ref)}
      content={<SideMenu />}
      onClose={closeDrawer}>
      {children(openDrawer)}
    </Drawer>
  );
};

export default SideMenuContainer;
