import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import getAPI from './API';

function App() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [nearestStop, setNearestStop] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        // Define bus stops here
        const busStops = [
          { name: '保生路口', latitude: 25.006769808652816, longitude: 121.50675373741655 },
          { name: '永平高中', latitude: 25.00916816632791, longitude: 121.50965593159889 },
          { name: '保生路口2', latitude: 25.006838000930593, longitude: 121.5063978613815 },
        ];

        // Call geocoding function to get address and nearest bus stop
        getAddressAndNearestStop(location.coords.latitude, location.coords.longitude, busStops);
      } catch (error) {
        setErrorMsg('Failed to get location');
      }
    })();
  }, []);

  const getAddressAndNearestStop = async (latitude, longitude, busStops) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=zh-TW`);
      const data = await response.json();
      setAddress(data.display_name);

      // Calculate distance and find nearest bus stop
      const distances = busStops.map(stop => {
        const distance = Math.sqrt(
          Math.pow(stop.latitude - latitude, 2) +
          Math.pow(stop.longitude - longitude, 2)
        );
        return { name: stop.name, distance: distance };
      });

      const nearestStop = distances.reduce((nearest, current) => {
        return nearest.distance < current.distance ? nearest : current;
      });

      setNearestStop(nearestStop.name);
    } catch (error) {
      setAddress('Address not found');
      setNearestStop('');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <Text>{address ? `Address: ${address}` : 'Loading address...'}</Text>
          <Text>{nearestStop ? `Nearest Bus Stop: ${nearestStop}` : 'Loading nearest bus stop...'}</Text>
        </>
      )}
    </View>
  );
}
export default App;
