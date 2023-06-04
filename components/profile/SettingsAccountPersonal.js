import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import InputTextStyle from "../../styles/InputTextStyle";
import { useState } from "react";
import ButtonStyle from "../../styles/ButtonStyle";
import DropDownPicker from 'react-native-dropdown-picker';
const SettingsAccountPersonal = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const imageIcon = require("../../assets/logo/logo.png");

  // const showDatepicker = () => {
  //   setShowDatePicker(true);
  // };

  // const handleDateChange = (event, date) => {
  //   setShowDatePicker(false);
  //   if (date) {
  //     setSelectedDate(date);
  //   }
  // };
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageStyle}>
        <Image source={imageIcon} style={styles.avatar} />
      </View>
      <View style={styles.containerInputText}>
        <TextInput
          style={InputTextStyle.inputText}
          placeholder="Nhập tên"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={InputTextStyle.inputText}
          placeholder="Số điện thoại"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        {/* <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Nam" value="Male" />
            <Picker.Item label="Nữ" value="Female" />
            <Picker.Item label="Khác" value="Other" />
          </Picker>
        </View> */}
        <DropDownPicker
        items={items}
        defaultValue={selectedValue}
        placeholder="Select an option"
        
        style={{zIndex: 999}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />

        <View style={ButtonStyle.buttonContainer}>
          <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={""}>
            <Text style={ButtonStyle.buttonSignupText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInputText: {
    width: 350,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CBD4E1",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
  //   picker: {
  //     paddingHorizontal: 20,
  //     paddingVertical: 4,
  //     fontSize: 16,
  //   },

  imageStyle: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#FE5D26",
    padding: 2,
    marginBottom: 50
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});

export default SettingsAccountPersonal;
