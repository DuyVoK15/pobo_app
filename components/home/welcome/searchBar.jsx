import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you have installed and configured React Native Vector Icons

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    // <View>
    //   <TextInput
    //     placeholder="Search"
    //     value={searchText}
    //     onChangeText={setSearchText}
    //     style={{
    //       height: 41,
    //       borderRadius :10,
    //       borderColor: 'gray',
    //       borderWidth: 1,
    //       paddingHorizontal: 10,
    //     }}
    //   />
    // </View>
    // <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //   <Feather name="search" size={24} color="gray" style={{ marginRight: 10 }} />
    //   <TextInput
    //     placeholder="Search"
    //     value={searchText}
    //     onChangeText={setSearchText}
    //     style={{
    //       flex: 1,
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1,
    //       paddingHorizontal: 10,
    //     }}
    //   />
    // </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height:40, paddingHorizontal: 10 }}>
      <Feather name="search" size={20} color="#FE5D26" style={{ marginRight: 10 }} />
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        style={{ flex: 1,                              
        }}
      />
    </View>
    );
};

export default SearchBar;