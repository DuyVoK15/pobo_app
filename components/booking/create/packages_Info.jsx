import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default Packages_Info = ()=> {
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
    return(
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rowWrapper}>
        {data.map((item, index) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.cardCotainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.wrap_prive_like}>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.currency}>VND</Text>
                </View>
                <View style={styles.likesContainer}>
                  <Ionicons name="heart-outline" size={14} color="#FF0000" />
                  <Text style={styles.likes}>{item.number}</Text>
                </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 10,
    // marginBottom: 10,
    backgroundColor: "black",
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
    // padding: 20,
    // marginBottom: 10,
  },
  image: {
    width: 140,
    height: 150.5,
    borderRadius: 10,
    top :-9
  },
  content: {
    // padding: 10,
    gap:5
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12.25,
    lineHeight: 18,
    letterSpacing: -0.04,
    color:'#FFFFFF'
    
  },
  wrap_prive_like:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap: 37  
  },
  priceContainer: {
    display:'flex',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    gap:5.25,
    alignItems:'flex-start'
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
  