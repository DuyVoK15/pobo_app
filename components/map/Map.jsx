import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';

const Map = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };


  return (
    <View style={styles.container}>
      
        <MapView
          style={styles.map}
          
        >
          
        </MapView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
