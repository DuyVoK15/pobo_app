import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../context/AuthContext";
export default Packages_Info = ({ route, navigation }) => {
  const { photographerId } = route.params;
  const { getAllListPackageShootingByPhotographerId } = useContext(AuthContext);
  const [listPackageShooting, getListPackageShooting] = useState([]);
  const data = [
    {
      image: require("../../../assets/images/anh4k.jpg"),
      title: "Goi chup ngoai canh",
      price: "100,000",
      number: 10,
    },
    {
      image: require("../../../assets/images/anh4k.jpg"),
      title: "Product Title 2",
      price: "200,000",
      number: 20,
    },

    {
      image: require("../../../assets/images/anh4k.jpg"),
      title: "Product Title 2",
      price: "200,000",
      number: 20,
    },
    {
      image: require("../../../assets/images/anh4k.jpg"),
      title: "Product Title 2",
      price: "200,000",
      number: 20,
    },
    {
      image: require("../../../assets/images/anh4k.jpg"),
      title: "Product Title 2",
      price: "200,000",
      number: 20,
    },
    // Add more data objects here
  ];

  const fetchData = async () => {
    const data = await getAllListPackageShootingByPhotographerId(
      photographerId
    );
    getListPackageShooting(data);
    // console.log(photographerId + "PHOTOGRAPHERID");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigateToBookingCreate = (packageShootingId) => {
    navigation.push("Detail", {packageShootingId: packageShootingId})
  }

  return (

    //     <View style={styles.container}>

    //      {data.map((item, index) => (
    //     <TouchableOpacity style={styles.card} key={index}>
    //      <View style={styles.cardCotainer}>
    //       <Image source={item.image} style={styles.image} />
    //       <View style={styles.content}>
    //         <Text style={styles.title}>{item.title}</Text>
    //         <View style={styles.priceContainer}>
    //           <Text style={styles.price}>{item.price}</Text>
    //           <Text style={styles.currency}>VND</Text>
    //         </View>
    //         <View style={styles.likesContainer}>
    //           <Ionicons name="heart-outline" size={18} color="#FF0000" />
    //           <Text style={styles.likes}>{item.number}</Text>
    //         </View>
    //       </View>
    //       </View>
    //     </TouchableOpacity>
    //   ))}
    // </View>
    // <ScrollView contentContainerStyle={styles.container}>
    //   {data.map((item, index) => (
    //     <View style={index % 2 === 0 ? styles.rowWrapper : null} key={index}>
    //       <TouchableOpacity style={styles.card}>
    //         <View style={styles.cardCotainer}>
    //           <Image source={item.image} style={styles.image} />
    //           <View style={styles.content}>
    //             <Text style={styles.title}>{item.title}</Text>
    //             <View style={styles.priceContainer}>
    //               <Text style={styles.price}>{item.price}</Text>
    //               <Text style={styles.currency}>VND</Text>
    //             </View>
    //             <View style={styles.likesContainer}>
    //               <Ionicons name="heart-outline" size={18} color="#FF0000" />
    //               <Text style={styles.likes}>{item.number}</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   ))}
    // </ScrollView>
    <View style={styles.container}>

    <ScrollView contentContainerStyle={styles.wrapCard}>
      <View style={styles.rowWrapper}>
        {listPackageShooting &&
          listPackageShooting.map((packageShooting) => (

            <TouchableOpacity style={styles.card} key={packageShooting.id} onPress={() => handleNavigateToBookingCreate(packageShooting.id)}>
              <View style={styles.cardCotainer}>

                <Image
                  source={{ uri: packageShooting.images[0] }}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>{packageShooting.title}</Text>
                  <View style={styles.wrap_price_likes}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>
                        {packageShooting.totalPrice}
                      </Text>
                      <Text style={styles.currency}>VND</Text>
                    </View>
                    <View style={styles.likesContainer}>
                      <Ionicons
                        name="heart-outline"
                        size={14}
                        color="#FF0000"
                      />
                      <Text style={styles.likes}>{20}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
           
          ))}
      </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 10,
  //   // marginBottom: 10,
  //   backgroundColor: "black",
  //   paddingTop: 20,
  // },
  // rowWrapper: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 30,
  // },
  // card: {
  //   width: 161.88,
  //   height: 252,
  //   backgroundColor: "rgba(255, 255, 255, 0.07)",
  //   borderWidth: 0.4375,
  //   borderColor: "rgba(255, 255, 255, 0.3)",
  //   borderRadius: 5.25,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // padding: 20,
  //   // marginBottom: 10,
  // },
  // image: {
  //   width: 140,
  //   height: 150.5,
  //   borderRadius: 10,
  //   top: -9,
  // },
  // content: {
  //   // padding: 10,
  //   gap: 5,
  // },
  // title: {
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   fontSize: 12.25,
  //   lineHeight: 18,
  //   letterSpacing: -0.04,
  //   color: "#FFFFFF",
  // },
  // wrap_prive_like: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 37,
  // },
  // priceContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 5,
  //   gap: 5.25,
  //   alignItems: "flex-start",
  // },
  // price: {
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   fontSize: 12.25,
  //   lineHeight: 18,
  //   color: "#FFFFFF",
  // },
  // currency: {
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: 10.5,
  //   lineHeight: 16,
  //   color: "#FFFFFF",
  // },
  // likesContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "flex-end",
  // },
  // likes: {
  //   color: "#FFFFFF",
  // },

  container: {
    flex: 1,
    backgroundColor: 'black', // Set the desired background color here
  },
  wrapCard: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  rowWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  card: {
    width: 161.88,
    height: 252,
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderWidth: 0.4375,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 5.25,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 150.5,
    borderRadius: 10,
    top: -9,
  },
  content: {
    gap: 5,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12.25,
    lineHeight: 18,
    letterSpacing: -0.04,
    color: '#FFFFFF',
  },
  wrap_price_likes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 37,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    gap: 5.25,
    alignItems: 'flex-start',
  },
  price: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12.25,
    lineHeight: 18,
    color: '#FFFFFF',
      },
      currency: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10.5,
        lineHeight: 16,
        color: '#FFFFFF',
      },
      likesContainer: {
        display:'flex',
        flexDirection: "row",
        alignItems: "flex-end",
    
      },
      likes: {
        color: "#FFFFFF",
      },
});
