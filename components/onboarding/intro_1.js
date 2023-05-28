
import { View, TouchableOpacity, Text } from 'react-native';
export default function intro_1({navigation}) {
    return (
        <View>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text>Go to Contact</Text>
      </TouchableOpacity>
    </View>
    )
}