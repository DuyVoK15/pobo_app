import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";

const CustomButton = ({
    title,
    onPress,
    backgroundColor,
    textColor,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    borderRadius,
  }) => {
    const buttonStyle = [
      styles.button,
      {
        backgroundColor,
        margin,
        marginTop,
        marginLeft,
        marginRight,
        borderRadius,
      },
    ];
    const textStyle = [styles.buttonText, { color: textColor }];
    return (
      <View>
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
const styles = {
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: 300,
        alignSelf: "center",
      },
      buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      },
      
}
export default CustomButton;