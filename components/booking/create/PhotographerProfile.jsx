import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

const PhotographerProfile = ({ route, navigation }) => {
  const { paramValue } = route.params;
  const { getPhotographerById } = useContext(AuthContext);
  const [ photographer, setPhotographer] = useState({});
  const fetchData = async () => {
    const data = await getPhotographerById(paramValue);
    setPhotographer(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photographer.avatarUrl }}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
      <Text>{photographer.name}</Text>
      <Text>{photographer.phone}</Text>
      <Text>{photographer.email}</Text>
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotographerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
