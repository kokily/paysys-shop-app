import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';
import PasswordScreen from '../screens/users/PasswordScreen';
import { useMutation } from 'react-query';
import { logoutAPI } from '../libs/api/auth';
import { Alert } from 'react-native';
import { useUserState } from '../libs/context/UserContext';

const Drawer = createDrawerNavigator<RootStackParamsList>();

function DrawerNavigation() {
  const [, setUser] = useUserState();
  const logoutMutate = useMutation(logoutAPI);

  const onLogout = async () => {
    try {
      await logoutMutate.mutateAsync();
      setUser(null);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  const LogoutContents = (props: DrawerContentComponentProps) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="로그아웃" onPress={onLogout} />
    </DrawerContentScrollView>
  );

  return (
    <Drawer.Navigator
      drawerContent={(props) => <LogoutContents {...props} />}
      screenOptions={{ drawerPosition: 'right' }}
    >
      <Drawer.Screen
        name="SoldierList"
        component={MainNavigation}
        options={{
          title: '첫 메뉴로',
          headerTitle: '행사전표시스템',
        }}
      />
      <Drawer.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          drawerLabel: '비밀번호 변경',
          title: '비밀번호 변경',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
