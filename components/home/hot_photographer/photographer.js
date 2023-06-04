// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// const data = [
//   { name: 'John Doe', avatar: require('../../../assets/images/avata.png') },
//   { name: 'Jane Smith', avatar: require('../../../assets/images/avata.png') },
//   { name: 'Alex Johnson', avatar: require('../../../assets/images/avata.png') },
// ];

// const PhotographerList = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.wrapAll}>
//         <Text style={styles.textContent}>Nhiếp ảnh gia hot tuần này </Text>
//         <View style={styles.wrapcard}>
//           {data.map((photographer, index) => (
//             <View key={index} style={styles.rowContainer}>
//               <Image source={photographer.avatar} style={styles.avatar} />
//               <Text style={styles.name}>{photographer.name}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     padding: 19,
//     marginVertical: 10,
//     height: 200,
//   },

//   wrapAll: {
//     // display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     padding: 0,
//     marginVertical: 8,
//     height: 162,
//   },
//   textContent: {
//     width: 142,
//     height: 56,
//     fontFamily: "Mulish",
//     fontStyle: "normal",
//     fontWeight: "800",
//     fontSize: 20,
//     lineHeight: 28,
//     color: "#181818",
//   },
//   wrapcard: {
//     height: 98,
//     flexDirection: "row",
//     padding: 10
//   },
//   rowContainer: {
//     // position: 'absolute',
//     // display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: 0,
//     margin: 8,
//     position: 'absolute',
//     height: 98,
//     left: 0,
//     top: 0,
//   },
//   avatar: {
//     width: 75,
//     height: 75,
//     borderRadius: 25,
//   },
//   name: {
//     height: 15,
//     fontFamily: "Mulish",
//     fontStyle: "normal",
//     fontWeight: "600",
//     fontSize: 12,
//     lineHeight: 15,
//     color: "#797979",
//   },
// });

// export default PhotographerList;


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const data = [
  { name: 'John Doe', avatar: require('../../../assets/images/anhCuoi1.png') },
  { name: 'Jane Smith', avatar: require('../../../assets/images/anhCuoi1.png') },
  { name: 'Alex Johnson', avatar: require('../../../assets/images/anhCuoi1.png') },
  { name: 'javis', avatar: require('../../../assets/images/anhCuoi1.png') },

];

const PhotographerList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Nhiếp ảnh gia hot tuần này</Text>
      <View style={styles.wrapcard}>
        {data.map((photographer, index) => (
          <View key={index} style={styles.rowContainer}>
            <Image source={photographer.avatar} style={styles.avatar} />
            <Text style={styles.name}>{photographer.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
    // height: 200,
  },
  textContent: {
    width: 142,
    height: 56,
    // fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    color: '#181818',
  },
  wrapcard: {
    // height: 98,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 85,
  },
  name: {
    marginTop: 8,
    // height: 15,
    // fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#797979',
  },
});

export default PhotographerList;