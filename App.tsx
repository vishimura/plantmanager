import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';

import { PlantProps } from './src/libs/storage';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      })
      return () => subscription.remove();

    // async function notifications(){
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('---------------- OIIII --------------');
    //   console.log(data);
    // }

    // subscription();

  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Routes />
  );
}
