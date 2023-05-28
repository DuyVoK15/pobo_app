import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, onChangeText }) => {
  const [value, setValue] = useState('');

  const handleChangeText = (text) => {
    setValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    borderColor: "#CBD4E1"
    
  },
  input: {
    fontSize: 16,
    
  },
});

export default CustomInput;
