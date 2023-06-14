import { StyleSheet } from "react-native";
import { SHADOWS } from "../components/constants";

const InputTextStyle = StyleSheet.create({
  inputText: { 
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    marginBottom: 10,
   
    fontSize: 16,
    ...SHADOWS.beauty,
    elevation: 2
  },
  input: {},
  titleText: {
    fontSize: 15,
    marginBottom: 4,
  },
});
export default InputTextStyle;
