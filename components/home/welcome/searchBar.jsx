import React, { useContext, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Assuming you have installed and configured React Native Vector Icons
import { AuthContext } from "../../../context/AuthContext";

const SearchBar = ({  }) => {
  const {
    getAllListPackageShootingByTitle,
    getAllPhotographerByName,
    packageShootingListByTitle,
  } = useContext(AuthContext);

  const [searchText, setSearchText] = useState("");

  const handleSearch = async (value) => {
    setSearchText(value);
    await getAllListPackageShootingByTitle(value);
    await getAllPhotographerByName(value);
    console.log(value);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
      }}
    >
      <Feather
        onPress={() => handleSearch()}
        name="search"
        size={20}
        color="#FE5D26"
        style={{ marginRight: 10 }}
      />
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={async (value) => await handleSearch(value)}
        style={{ flex: 1 }}
      />
      {searchText !== "" ? (
        <MaterialCommunityIcons
          onPress={async (value) => await handleSearch("")}
          name="close-circle"
          size={26}
          a
          color="grey"
          style={{ marginLeft: 10 }}
        />
      ) : (
        ""
      )}
    </View>
  );
};

export default SearchBar;
