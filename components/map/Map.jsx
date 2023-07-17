// // import React, { useEffect, useState } from "react";
// // import { StyleSheet, View, Image } from "react-native";
// // import MapView, { Marker } from 'react-native-maps';
// // import * as Location from 'expo-location';

// // const Map = ({ navigation }) => {
// //   const [location, setLocation] = useState(null);
// //   const [avatarUrl, setAvatarUrl] = useState('');

// //   useEffect(() => {
// //     getLocationAsync();
// //     fetchAvatarUrlFromApi();

// //   }, []);

// //   const getLocationAsync = async () => {
// //     let { status } = await Location.requestForegroundPermissionsAsync();
// //     if (status !== 'granted') {
// //       console.log('Permission to access location was denied');
// //       return;
// //     }

// //     let location = await Location.getCurrentPositionAsync({});
// //     setLocation(location.coords);
// //   };

// //   const fetchAvatarUrlFromApi = async () => {
// //     // Fetch the avatar URL from your API
// //     // Replace the following with your API endpoint
// //     const response = await fetch('YOUR_API_ENDPOINT');
// //     const data = await response.json();

// //     // Set the avatar URL from the API response
// //     setAvatarUrl(data.avatarUrl);
// //   };


// //   return (
// //     <View style={styles.container}>
      
// //         <MapView
// //           style={styles.map}
// //           region={{
// //             latitude: location.latitude,
// //             longitude: location.longitude,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421,
// //           }}
// //         >
// //           <Marker
// //             coordinate={{
// //               latitude: location.latitude,
// //               longitude: location.longitude,
// //             }}
// //           >
// //             <Image source={ require =('../../assets/images/avata1.png')} style={styles.avatar} />
// //           </Marker>
// //         </MapView>
      
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     width: '100%',
// //     height: '100%',
// //   },
// // });

// // export default Map;

// import React, { useEffect, useState } from "react";
// import { StyleSheet, View, Image } from "react-native";
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const Map = ({ navigation }) => {
//   const [location, setLocation] = useState(null);
//   const [avatarUrl, setAvatarUrl] = useState('');

//   useEffect(() => {
//     getLocationAsync();
//     fetchAvatarUrlFromApi();
//   }, []);

//   const getLocationAsync = async () => {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     } catch (error) {
//       console.log('Error getting current location:', error);
//     }
//   };

//   const fetchAvatarUrlFromApi = async () => {
//     // Fetch the avatar URL from your API
//     // Replace the following with your API endpoint
//     const response = await fetch('YOUR_API_ENDPOINT');
//     const data = await response.json();

//     // Set the avatar URL from the API response
//     setAvatarUrl(data.avatarUrl);
//   };

//   return (
//     <View style={styles.container}>
//       {location && (
//         <MapView
//           style={styles.map}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//           >
//             <Image source={require("../../assets/images/avata3.png")} style={styles.avatar} />
//           </Marker>
//         </MapView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
//   avatar: {
//     borderWidth:4,
//     width: 40,
//     height: 40,
//     borderRadius:20,
//     borderColor: '#FFFFFF',
//     borderStyle: 'solid',
//   },
// });

// export default Map;





// import React, { useEffect, useState } from "react";
// import { StyleSheet, View, Image, Button, Alert } from "react-native";
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import MapViewDirections from 'react-native-maps-directions';

// const Map = ({ navigation }) => {
//   const [location, setLocation] = useState(null);
//   const [avatarUrl, setAvatarUrl] = useState('');
//   const [destination, setDestination] = useState(null);

//   useEffect(() => {
//     getLocationAsync();
//     fetchAvatarUrlFromApi();
//   }, []);

//   const getLocationAsync = async () => {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     } catch (error) {
//       console.log('Error getting current location:', error);
//     }
//   };

//   const fetchAvatarUrlFromApi = async () => {
//     // Fetch the avatar URL from your API
//     // Replace the following with your API endpoint
//     const response = await fetch('YOUR_API_ENDPOINT');
//     const data = await response.json();

//     // Set the avatar URL from the API response
//     setAvatarUrl(data.avatarUrl);
//   };

//   const handleFindLocation = () => {
//     // Implement the logic to find the destination location
//     // For example, you can use geocoding services or manually input the destination coordinates

//     const destinationCoords = {
//       latitude: DESTINATION_LATITUDE,
//       longitude: DESTINATION_LONGITUDE,
//     };

//     setDestination(destinationCoords);
//   };

//   return (
//     <View style={styles.container}>
//       {location && (
//         <MapView
//           style={styles.map}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           {destination && (
//             <>
//               <Marker coordinate={destination} />
//               <MapViewDirections
//                 origin={location}
//                 destination={destination}
//                 apikey={GOOGLE_MAPS_API_KEY}
//                 strokeWidth={3}
//                 strokeColor="blue"
//               />
//             </>
//           )}

//           <Marker coordinate={location}>
//             <Image source={require("../../assets/images/avata3.png")} style={styles.avatar} />
//           </Marker>
//         </MapView>
//       )}

//       <Button title="Find Location" onPress={handleFindLocation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   avatar: {
//     borderWidth: 4,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderColor: '#FFFFFF',
//     borderStyle: 'solid',
//   },
// });

// export default Map;