import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Touchable } from "react-native";

import styles from "./cates.style";
import Card from "./cardCate";
import data from "./dataCardCate";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT, SIZES } from "../../constants";
import { AuthContext } from "../../../context/AuthContext";

const Cate = ({ navigation }) => {
  const {
    getAllListPackageShooting,
    getAllListPackageShootingByTitle,
    getUserInfo,
    packageShootingListByTitle,
    handleSetPackageShootingId,
  } = useContext(AuthContext);
  const [listPackageShooting, getListPackageShooting] = useState([]);

  const fetchData = async () => {
    getUserInfo();
    const data = await getAllListPackageShooting();
    // const haha = await getPackageShootingById(
    //   "1c52af5a-315e-453a-b1cd-929d958aa167"
    // );
    getListPackageShooting(data);
    await getAllListPackageShootingByTitle("");
  };

  useEffect(() => {
    fetchData();
    // console.log(JSON.stringify(listPackageShooting) + "HAHAHAHA");
  }, []);

  const handleNavigate = (packageShootingId) => {
    handleSetPackageShootingId(packageShootingId);
    navigation.push("Detail");
  };

  return (
    <View style={styles.discoverWrapper}>
      {/* <TouchableOpacity contentContainerStyle={styles.container}> */}
      {/* <View style={styles.discoverCategoriesWrapper}> */}
      <Text style={styles.discoverTitle}>Danh mục</Text>

      <View style={styles.discoverCategoriesWrapper1}>
        <Text style={[styles.discoverCategoryText, { color: COLORS.orange40 }]}>
          All
        </Text>
        <Text style={styles.discoverCategoryText}>Tốt nghiệp</Text>
        <Text style={styles.discoverCategoryText}>Sinh nhật</Text>
        <Text style={styles.discoverCategoryText}>Đám cưới</Text>
      </View>
      {/* </View> */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {packageShootingListByTitle ? (
          packageShootingListByTitle.map((packageShooting) => (
            <TouchableOpacity
              key={packageShooting.id}
              onPress={() => handleNavigate(packageShooting.id)}
            >
              <Card
                image={{ uri: packageShooting?.images[0] }}
                rating={"4.5"}
                title={packageShooting.title}
                authorAvatar={{
                  uri: packageShooting.photographerData.avatarUrl,
                }}
                authorName={packageShooting.photographerData.name}
                navigation={navigation}
              />
            </TouchableOpacity>
          ))
        ) : (
          <Text>Không có gì ở đây</Text>
        )}
        {/* </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
// const styles = StyleSheet.create({

//   });

export default Cate;
